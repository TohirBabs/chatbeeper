import { useState } from "react";
import { SignUpForm } from "../../components/AuthForms";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { Stack, Typography } from "@mui/material";
import ChatBeeperLogo from "../../components/Logo";
import { pageAnimation } from "../../utilities/animations";
import CreateAccountForm from "../../components/AuthForms/CreateAccountForm";

export default function CreateAccount() {
  return (
    <motion.div
      variants={pageAnimation}
      animate="animate"
      initial="initial"
      exit="exit"
      transition={pageAnimation.transition}
    >
      <Stack width="100vw" mt={5} alignItems="center">
        <ChatBeeperLogo />

        <Typography variant="h1" my={2}>
          Create an account
        </Typography>

        <CreateAccountForm />
        {/* <SignUpForm /> */}

        <Typography variant="body" my={2}>
          Already have a beeper account?{" "}
          <Link to="/auth/login">
            <Typography variant="link">Log in</Typography>
          </Link>
        </Typography>
      </Stack>
    </motion.div>
  );
}
