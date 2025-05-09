"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Control, useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"

import { Input } from "@/components/ui/input"
import  CustomFormField, { FormFieldType } from "../CustomFormField"

import { PatientFormValidation, UserFormValidation } from "@/lib/validation"
import { Form } from "../ui/form"
import SubmitButton from "../SubmitButton"
import { useState } from "react"
import { useRouter } from "next/navigation"



const  PatientForm = () =>  {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
  // 1. Define your form.
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
        name: "",
        email: "",
        phone: "",
    },
  })

  // 2. Define a submit handler.
  async function onSubmit({name, email, phone}: z.infer<typeof UserFormValidation>) {
    setIsLoading(true)

    try{
        // const userData = {name, email, phone};
        // const user = await CreateUser(userData);

        // if(user)  router.push(`/patients/${user.id}/register`)

    } catch (error){
        console.log(error)
    }

    // Do something with
    //  the form values.
    // ✅ This will be type-safe and validated.
    // console.log(values)
  }
  return(
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
       <section className="mb-12 space-y-4">
        <h1 className="header">Hi there</h1>
        <p className="text-dark-700">Schedule your first appointment.</p>
       </section>
       <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="name"
          label="Full name"
          placeholder="John Doe"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="email"
          label="Email"
          placeholder="johndoe@gmail.com"
          iconSrc="/assets/icons/email.svg"
          iconAlt="email"
        />

        <CustomFormField
          fieldType={FormFieldType.PHONE_INPUT}
          control={form.control}
          name="phone"
          label="Phone number"
          placeholder="(555) 123-4567"
        />

      <SubmitButton isLoading={isLoading}>
        Get Started
      </SubmitButton>
    </form>
  </Form>
  )
}

export default PatientForm