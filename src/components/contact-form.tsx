'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Mail, User } from 'lucide-react'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { Form, FormControl, FormField, FormItem } from './ui/form'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Textarea } from './ui/textarea'
import Divider from './divider'

const formSchema = z.object({
  name: z.string().min(1, 'Imię jest wymagane'),
  email: z
    .string()
    .email('Nieprawidłowy adres e-mail')
    .min(1, 'E-mail jest wymagany'),
  message: z.string().min(1, 'Wiadomość jest wymagana'),
})

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const formData = new FormData()
    formData.append('name', data.name)
    formData.append('email', data.email)
    formData.append('message', data.message)
    formData.append('access_key', process.env.NEXT_PUBLIC_WEB3_FORMS || '')

    const object = Object.fromEntries(formData)
    const json = JSON.stringify(object)

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: json,
    }).then((res) => res.json())

    if (res.success) {
      console.log('Success', res)
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='w-[500px] space-y-4 bg-white/16 backdrop-blur-sm p-6 rounded-2xl'
      >
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className='flex items-center gap-2'>
                  <User className='size-5 text-white' />
                  <Input placeholder='Imię i nazwisko' {...field} />
                </div>
              </FormControl>
            </FormItem>
          )}
        />

        <Divider />

        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className='flex items-center gap-2'>
                  <Mail className='size-5 text-white' />
                  <Input placeholder='E-mail' {...field} />
                </div>
              </FormControl>
            </FormItem>
          )}
        />

        <Divider />

        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder='Wiadomość'
                  {...field}
                  className='h-[150px] max-h-[150px] resize-none'
                />
              </FormControl>
            </FormItem>
          )}
        />

        {form.formState.errors && (
          <div className='text-red-500 text-sm'>
            {Object.values(form.formState.errors)[0]?.message}
          </div>
        )}

        <Button type='submit' className='w-full rounded-lg'>
          Submit
        </Button>
      </form>
    </Form>
  )
}
