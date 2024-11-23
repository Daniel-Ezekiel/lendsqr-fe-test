"use client";
import { ReactNode, useEffect } from "react";
import { auth } from "@/app/_services/firebase";
import { Auth } from "firebase/auth";
// import { useRouter } from "next/router";
import { useParams, usePathname, useRouter } from "next/navigation";

function PrivateRoute({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathName = usePathname();
  const { userId } = useParams();
  // const navigate = useNavigate();
  // const location = useLocation();
  const authState = (auth as Auth).currentUser;

  useEffect(() => {
    if (authState && pathName === "/") {
      router.push("/dashboard/customers/users");
    } else if (
      (authState === null && pathName === "/dashboard/customers/users") ||
      (authState === null &&
        pathName === `/dashboard/customers/users/${userId}`)
    ) {
      router.push("/");
    }
  }, [authState, pathName, router, userId]);

  return children;
}

export default PrivateRoute;
