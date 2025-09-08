import { Button, Text, TextField } from "@/components/common";
import { ERoute } from "@/configs/router";
import { useScreenSize } from "@/hooks";
import useLocalStorage from "@/hooks/useLocalStorage";
import useToast from "@/hooks/useToast";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import "./LoginPage.scss";

const LoginPage = () => {
  const { setAccessInfo, getAcessInfo } = useLocalStorage();
  const navigate = useNavigate();
  const { showToast } = useToast();
  const { isMobile } = useScreenSize();

  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const accessInfo = getAcessInfo();

  const handleLogin = () => {
    const id = idRef.current?.value;
    const MUST_INCLUDED = "simpson";
    const password = passwordRef.current?.value;

    if (!id?.includes(MUST_INCLUDED)) {
      showToast("Invalid username or password.", "error");
      return;
    }

    showToast("Logged in successfully", "success");
    setAccessInfo({ name: id, email: `${id}-${password}` });
    navigate(`/${ERoute.LISTING}`);
  };

  // WATCHER: Object Access Info to detect whether user already logged in or NOT
  useEffect(() => {
    if (accessInfo) {
      navigate(`/${ERoute.LISTING}`);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        handleLogin();
      }
    });
    () => {
      window.removeEventListener("keyup", handleLogin);
    };
  }, []);

  return (
    <div className="login-page">
      <Text variant="h5"> Login</Text>
      <div className="login-page__fields">
        <TextField
          placeholder="Username *"
          ref={idRef}
          width={isMobile ? 330 : 350}
        />
        <TextField
          placeholder="Password *"
          ref={passwordRef}
          type="password"
          width={isMobile ? 330 : 350}
        />
      </div>
      <Button width={180} height={40} onClick={handleLogin}>
        <Text size="title" align="center">
          Login
        </Text>
      </Button>
    </div>
  );
};

export default LoginPage;
