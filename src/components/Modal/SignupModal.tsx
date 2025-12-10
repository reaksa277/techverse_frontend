import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Modal,
  OutlinedInput,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Icon } from "@iconify/react";
import Logo from "../../assets/logo.png";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";

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

interface SingupModalProps {
  open: boolean;
  onClose: () => void;
}

const SignupModal = ({ open, onClose }: SingupModalProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const password = watch("password");


  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [who, setWho] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

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
            Join now to engage with new technologies and participate in
            knowledge sharing.
          </Typography>
        </Stack>

        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <Stack spacing={2}>
            <TextField
              fullWidth
              label="First Name"
              margin="normal"
              {...register("firstname", {
                required: "First name is required",
              })}
              error={!!errors.firstname}
              helperText={errors.firstname?.message}
              required
            />
            <TextField
              fullWidth
              label="Last Name"
              margin="normal"
              {...register("lastname", {
                required: "Last name is required",
              })}
              error={!!errors.lastname}
              helperText={errors.lastname?.message}
              required
            />
            <TextField
              fullWidth
              label="Email"
              margin="normal"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email format",
                },
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
              required
            />
            <FormControl fullWidth sx={{ mt: 2 }} error={!!errors?.whoareyou}>
              <InputLabel id="who-label" required>
                Who Are You?
              </InputLabel>

              <Select
                labelId="who-label"
                id="who"
                value={who}
                label="Who Are You?"
                {...register("whoareyou", {
                  required: "Who are you is required",
                })}
                onChange={(e) => setWho(e.target.value)}
                sx={{
                  borderRadius: "16px",
                  "& fieldset": {
                    borderRadius: "16px",
                  },
                }}
              >
                <MenuItem value="student">Student</MenuItem>
                <MenuItem value="teacher">Teacher</MenuItem>
                <MenuItem value="developer">Developer</MenuItem>
                <MenuItem value="business">Business Owner</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>

              <FormHelperText>{errors.whoareyou?.message}</FormHelperText>
            </FormControl>
            <FormControl sx={{ width: "100%" }} variant="outlined" error={!!errors?.password}>
              <InputLabel htmlFor="password" required>
                Password
              </InputLabel>
              <OutlinedInput
                id="password"
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
                {...register("password", {
                    required: "Password is required",
                    minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                    }
                })}
              />
              <FormHelperText>{errors.password?.message}</FormHelperText>
            </FormControl>

            <FormControl fullWidth variant="outlined" error={!!errors?.confirmpassword}>
              <InputLabel
                htmlFor="outlined-adornment-confirm-password"
                required
              >
                Confirm Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showConfirmPassword
                          ? "hide the password"
                          : "display the password"
                      }
                      onClick={handleClickShowConfirmPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {showConfirmPassword ? VisibilityOff : Visibility}
                    </IconButton>
                  </InputAdornment>
                }
                label="Confirm Password"
                {...register("confirmpassword", {
                    required: "Please confirm your password",
                    validate: (value) =>
                        value === password || "Password do not match",
                })}
              />
              <FormHelperText>{errors.confirmpassword?.message}</FormHelperText>
            </FormControl>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={!isValid}
              sx={{ mt: 2, height: "51px" }}
            >
              Create account
            </Button>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
};

export default SignupModal;
