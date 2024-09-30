"use client";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import { useMemo, useState } from "react";
import {
  AccountBalanceWalletOutlined,
  HelpOutline,
  HomeOutlined,
  Menu,
  SavingsOutlined,
} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { useCheckUserWidth } from "@/lib/userDeviceContext";
import { ClientProps } from "@/types/client";
import { client } from "../constants";

export default function Header() {
  const { isMobile } = useCheckUserWidth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const pathname = usePathname();
  const router = useRouter();

  const currentDashboardPath = useMemo((): string | undefined => {
    const paths = pathname.split("/");
    return paths.some((path) => path === "dashboard") && paths.length >= 3
      ? paths[2]
      : undefined;
  }, [pathname]);

  const menuItems = [
    { icon: <HomeOutlined />, name: "Home" },
    { icon: <SavingsOutlined />, name: "Savings" },
    { icon: <AccountBalanceWalletOutlined />, name: "Expenses" },
    { icon: <HelpOutline />, name: "Help" },
  ];

  const companyLogoDictionary: ClientProps = {
    acme: { src: "/clients/acme/logo.svg", width: { bg: 140, sm: 120 } },
    CrossCountry: {
      src: "/clients/CrossCountry/logo.svg",
      width: { bg: 120, sm: 100 },
    },
  };

  return (
    <>
      <AppBar
        position={"static"}
        sx={{
          bgcolor: "white",
          color: "#212121",
          boxShadow: "none",
          zIndex: "1400",
        }}
      >
        <Toolbar
          sx={{
            borderBottom: 1,
            borderColor: "grey.300",
            justifyContent: isMobile ? "flex-start" : "flex-start",
            gap: "12px",
            height: "48px",
          }}
        >
          <Box sx={{ display: "flex", gap: "0px", alignItems: "center" }}>
            <Image
              src={companyLogoDictionary[client].src}
              width={
                isMobile
                  ? companyLogoDictionary[client].width.sm
                  : companyLogoDictionary[client].width.bg
              }
              height={isMobile ? 40 : 48}
              alt="Company Logo"
            />
            <Typography
              variant="body-xl"
              sx={{
                marginTop: "4px",
                marginLeft: "-10px",
                marginRight: "8px",
              }}
            >
              by
            </Typography>
            <Typography
              variant="body-bold"
              sx={{ color: "primary.main", marginTop: "4px" }}
            >
              EarnUp
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
