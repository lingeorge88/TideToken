/* eslint-disable no-unused-vars */
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "@/Redux/Auth/Action";
import SpinnerBackdrop from "@/components/custome/SpinnerBackdrop";

const formSchema = z.object({
  fullName: z.string().nonempty("Full name is required"),
  email: z.string().email("Invalid email address").optional(),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .optional(),
});
const SignupForm = () => {
  const {auth}=useSelector(store=>store)

  const navigate=useNavigate();
  const dispatch=useDispatch()
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      fullName: "",
    },
  });
  const onSubmit = (data) => {
    data.navigate=navigate
    dispatch(register(data))
    console.log("signup form", data);
  };
  return (
    <div className="space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <FormControl>
                  <Input
                    {...field}
                    id="fullName"
                    type="text"
                    className="border w-80 border-gray-300 rounded-lg py-3 px-4 focus:ring-2 focus:ring-celestial-blue focus:border-celestial-blue"
                    placeholder="Enter your full name"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <FormControl>
                  <Input
                    {...field}
                    id="email"
                    type="email"
                    className="border w-80 border-gray-300 rounded-lg py-3 px-4 focus:ring-2 focus:ring-celestial-blue focus:border-celestial-blue"
                    placeholder="Enter your email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <FormControl>
                  <Input
                    {...field}
                    id="password"
                    type="password"
                    className="border w-80 border-gray-300 rounded-lg py-3 px-4 focus:ring-2 focus:ring-celestial-blue focus:border-celestial-blue"
                    placeholder="Enter your password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
         {!auth.loading? <Button
            type="submit"
            className="w-80 py-3 bg-celestial-blue hover:bg-persian-blue text-white rounded-full font-medium"
          >
            Sign Up
          </Button>:<SpinnerBackdrop show={true}/>}
        </form>
      </Form>
    </div>
  );
};

export default SignupForm;
