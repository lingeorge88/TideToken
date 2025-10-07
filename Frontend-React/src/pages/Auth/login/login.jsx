import { Input } from "@/components/ui/input";
// import "./Login.css";
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
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/Redux/Auth/Action";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";
import SpinnerBackdrop from "@/components/custome/SpinnerBackdrop";
// import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});
const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (data) => {
    data.navigate = navigate;
    dispatch(login(data));
    console.log("login form", data);
  };
  return (
    <div className="space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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

          <div className="text-left">
            <button
              type="button"
              onClick={() => navigate("/forgot-password")}
              className="text-sm text-celestial-blue hover:text-persian-blue font-medium"
            >
              Forgot Password?
            </button>
          </div>

          {!auth.loading ? (
            <Button
              type="submit"
              className="w-80 py-3 bg-celestial-blue hover:bg-persian-blue text-white rounded-full font-medium"
            >
              Log In
            </Button>
          ) : (
            <SpinnerBackdrop show={true} />
          )}
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
