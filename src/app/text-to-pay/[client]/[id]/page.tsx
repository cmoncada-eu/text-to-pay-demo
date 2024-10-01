"use client";
import { fetcher } from "@/lib/fetcher";
import { useCheckUserWidth } from "@/lib/userDeviceContext";
import { ArrowBack } from "@mui/icons-material";
import {
  Box,
  Button,
  ButtonBase,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import useSWR from "swr";

type Params = {
  client: string;
  id: string;
};

export default function VerifyIdentity({ params }: { params: Params }) {
  const router = useRouter();
  const { isMobile } = useCheckUserWidth();
  const requestId = useMemo(() => {
    return params.id;
  }, [params]);
  const { data, error } = useSWR(`/api/payment-request/${requestId}`, fetcher);

  const [yearOfBirth, setYearOfBirth] = useState("");
  const [endOfSSN, setEndOfSSN] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [showErrorMsg, setShowErrorMsg] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setter: Dispatch<SetStateAction<string>>
  ) => {
    const newValue = event.target.value;
    if (/^\d*$/.test(newValue) && newValue.length < 5) {
      setter(newValue);
    }
  };

  const handleVerify = useCallback(async () => {
    try {
      const res = await fetcher(
        `/api/verify-identity/${requestId}?birthYear=${yearOfBirth}&ssn=${endOfSSN}`
      );
      if (res?.message === "success") {
        setIsVerified(true);
        setShowErrorMsg(false);
      } else {
        setShowErrorMsg(true);
      }
    } catch (error) {
      error && console.error(error);
    }
  }, [requestId, yearOfBirth, endOfSSN]);

  useEffect(() => {
    const lender = params.client;
    const requestId = params.id;
    if (!requestId || !lender) {
      // push out, wrong params
      router.push("/");
    }
  }, [params]);

  useEffect(() => {}, []);

  if (error) return <div>Error loading data</div>;
  if (!data) return <div>Loading...</div>;

  // start flow here
  if (isVerified) {
    return <>Verified</>;
  }

  return (
    <Box sx={{ bgcolor: "white" }}>
      <Stack alignItems={"center"} justifyContent={"flex-start"}>
        <Image
          src={"/clients/acme/celebrate_banner.svg"}
          height={114}
          width={327}
          alt="celebrate banner"
        />
        <Divider flexItem sx={{ marginBottom: "24px" }} />
      </Stack>
      <Stack alignItems={"flex-start"} justifyContent={"flex-start"} gap="16px">
        <Typography variant="h5" color="grey.800">
          Lets confirm your identity
        </Typography>
        <Typography variant="body-xl">
          To verify your identity, please enter the last 4 digits of your SSN
          and your year of birth.
        </Typography>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": {
              margin: "10px 0px",
              // width: '100%',
              boxSizing: "border-box",
              // marginLeft: 0,
            },
            // paddingX: '24px',
            width: "100%",
            paddingX: "0px",
            display: "grid",
            gridTemplateColumns: "auto",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="Year of Birth"
            placeholder=""
            value={yearOfBirth}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              handleChange(event, setYearOfBirth);
            }}
          />

          <TextField
            label="Last 4 digits of yor SSN"
            placeholder=""
            value={endOfSSN}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              handleChange(event, setEndOfSSN);
            }}
          />
        </Box>
        {showErrorMsg && (
          <Typography variant="body-xl" color={"error.main"}>
            Please, enter your correct information.
          </Typography>
        )}
        <Button
          variant="contained"
          color="primary"
          autoFocus
          fullWidth={isMobile}
          disabled={yearOfBirth.length !== 4 || endOfSSN.length !== 4}
          onClick={() => handleVerify()}
          sx={{
            color: "white",
            borderRadius: "50px",
            height: "60px",
            fontSize: "18px",
            fontWeight: "800",
          }}
        >
          Verify Identity
        </Button>
      </Stack>

      <Stack alignItems={"center"} justifyContent={"flex-start"}>
        <ButtonBase
          sx={{ color: "grey.700", marginTop: isMobile ? "12px" : "0px" }}
          // onClick={}
        >
          <ArrowBack />
          <Typography variant="body-text" sx={{ fontWeight: "600" }}>
            Back
          </Typography>
        </ButtonBase>
      </Stack>

      <Typography>name</Typography>
      <Typography>{data?.first_name || "N/A"}</Typography>
    </Box>
  );
}
