'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Calendar, Clock, Users, Music, CheckCircle } from 'lucide-react'
import { format, addDays, isThursday } from 'date-fns'

const reservationSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().regex(/^[\d\s\-\+\(\)]+$/, 'Please enter a valid phone number'),
  date: z.string().min(1, 'Please select a date'),
  time: z.string().min(1, 'Please select a time'),
  guests: z.number().min(1).max(20, 'Please select between 1-20 guests'),
  specialRequests: z.string().optional(),
  thursdayMusic: z.boolean().optional(),
})

type ReservationFormData = z.infer<typeof reservationSchema>

const timeSlots = [
  '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', 
  '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', 
  '9:00 PM', '9:30 PM'
]

export default function ReservationsPage() {
  const [submitted, setSubmitted] = useState(false)
  const [selectedDate, setSelectedDate] = useState('')
  
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ReservationFormData>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      guests: 2,
      thursdayMusic: false,
    }
  })

  const watchedDate = watch('date')
  const isThursdaySelected = watchedDate ? isThursday(new Date(watchedDate)) : false

  const onSubmit = (data: ReservationFormData) => {
    console.log('Reservation submitted:', data)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-giovanni-cream flex items-center justify-center px-4">
        <div className="bg-white rounded-xl p-8 max-w-md w-full text-center shadow-lg">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="font-display text-3xl text-giovanni-charcoal mb-4">
            Reservation Confirmed!
          </h1>
          <p className="text-giovanni-charcoal/70 mb-6">
            Thank you for booking with Giovanni's. We've sent a confirmation email 
            with your reservation details.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="btn btn-primary"
          >
            Make Another Reservation
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-giovanni-cream">
      {/* Header */}
      <section className="bg-giovanni-amber text-giovanni-charcoal py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="font-display text-4xl md:text-6xl mb-4">Make a Reservation</h1>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Reserve your table for an authentic Trieste dining experience
          </p>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="section">
        <div className="container-custom max-w-4xl">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-giovanni-charcoal mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    {...register('name')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-giovanni-blue focus:border-transparent"
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-giovanni-charcoal mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    {...register('email')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-giovanni-blue focus:border-transparent"
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-giovanni-charcoal mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    {...register('phone')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-giovanni-blue focus:border-transparent"
                    placeholder="(123) 456-7890"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>

                {/* Number of Guests */}
                <div>
                  <label className="block text-sm font-semibold text-giovanni-charcoal mb-2">
                    Number of Guests *
                  </label>
                  <select
                    {...register('guests', { valueAsNumber: true })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-giovanni-blue focus:border-transparent"
                  >
                    {[...Array(20)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1} {i === 0 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                  {errors.guests && (
                    <p className="mt-1 text-sm text-red-600">{errors.guests.message}</p>
                  )}
                </div>

                {/* Date */}
                <div>
                  <label className="block text-sm font-semibold text-giovanni-charcoal mb-2">
                    Date *
                  </label>
                  <input
                    type="date"
                    {...register('date')}
                    min={format(new Date(), 'yyyy-MM-dd')}
                    max={format(addDays(new Date(), 90), 'yyyy-MM-dd')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-giovanni-blue focus:border-transparent"
                  />
                  {errors.date && (
                    <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>
                  )}
                </div>

                {/* Time */}
                <div>
                  <label className="block text-sm font-semibold text-giovanni-charcoal mb-2">
                    Time *
                  </label>
                  <select
                    {...register('time')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-giovanni-blue focus:border-transparent"
                  >
                    <option value="">Select a time</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                  {errors.time && (
                    <p className="mt-1 text-sm text-red-600">{errors.time.message}</p>
                  )}
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-sm font-semibold text-giovanni-charcoal mb-2">
                  Special Requests
                </label>
                <textarea
                  {...register('specialRequests')}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-giovanni-blue focus:border-transparent"
                  placeholder="Any dietary restrictions, special occasions, or seating preferences?"
                />
              </div>

              {/* Thursday Music Notice */}
              {isThursdaySelected && (
                <div className="bg-giovanni-blue/10 border border-giovanni-blue/20 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <Music className="w-5 h-5 text-giovanni-blue flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="font-semibold text-giovanni-blue">
                        Thursday Live Music Night!
                      </p>
                      <p className="text-sm text-giovanni-charcoal/70 mt-1">
                        You've selected a Thursday! Join us for live music from 7:00 PM - 10:00 PM. 
                        Would you like to reserve a table in our music area?
                      </p>
                      <label className="flex items-center space-x-2 mt-2">
                        <input
                          type="checkbox"
                          {...register('thursdayMusic')}
                          className="rounded text-giovanni-blue focus:ring-giovanni-blue"
                        />
                        <span className="text-sm text-giovanni-charcoal">
                          Yes, I'd like a table near the music area
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <div className="flex justify-center pt-6">
                <button
                  type="submit"
                  className="btn btn-primary min-w-[200px]"
                >
                  Confirm Reservation
                </button>
              </div>
            </form>
          </div>

          {/* Additional Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Calendar className="w-8 h-8 text-giovanni-blue mx-auto mb-2" />
              <h3 className="font-semibold text-giovanni-charcoal mb-1">Cancellation Policy</h3>
              <p className="text-sm text-giovanni-charcoal/60">
                Free cancellation up to 24 hours before your reservation
              </p>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 text-giovanni-terracotta mx-auto mb-2" />
              <h3 className="font-semibold text-giovanni-charcoal mb-1">Large Groups</h3>
              <p className="text-sm text-giovanni-charcoal/60">
                For parties larger than 20, please call us directly
              </p>
            </div>
            <div className="text-center">
              <Clock className="w-8 h-8 text-giovanni-amber-dark mx-auto mb-2" />
              <h3 className="font-semibold text-giovanni-charcoal mb-1">Arrival Time</h3>
              <p className="text-sm text-giovanni-charcoal/60">
                We hold tables for 15 minutes past reservation time
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}