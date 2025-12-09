import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  Modal,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Icon } from "@iconify/react";
import Logo from "../../assets/logo.png";
import CloseIcon from "@mui/icons-material/Close";

const Visibility = <Icon icon="tabler:eye-closed" width="24" height="24" />;
const VisibilityOff = <Icon icon="tabler:eye" width="24" height="24" />;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "500px",
  bgcolor: "background.paper",
  borderRadius: "16px",
  boxShadow: 24,
  p: 3,
};

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

const LoginModal = ({ open, onClose }: LoginModalProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <Modal open={open}>
      <Box sx={style}>
        {/* Close Button */}
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", top: 8, right: 8 }}
        >
          <CloseIcon />
        </IconButton>
        <Stack sx={{ alignItems: "center", margin: "20px 0" }}>
          <img
            src={Logo}
            alt="Logo"
            style={{ height: "39px", width: "158px" }}
          />
          <Typography variant="h3" sx={{ textAlign: "center" }} mb={2}>
            Welcome to TechVerse
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "center" }} mb={2}>
            Log in to access the platform, explore new technology, and share
            knowledge.
          </Typography>
        </Stack>

        <Stack spacing={2}>
          <TextField fullWidth label="Email" margin="normal" required/>
          <FormControl sx={{ width: "100%" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password" required>
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? VisibilityOff : Visibility}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>

          <FormControlLabel
            control={<Checkbox />}
            label="Remember me"
            sx={{ mt: 1 }}
          />
        </Stack>

        <Button variant="contained" fullWidth sx={{ mt: 2, height: "51px" }}>
          Login
        </Button>
      </Box>
    </Modal>
  );
};

export default LoginModal;
