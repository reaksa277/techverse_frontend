import {
  Box,
  Button,
  IconButton,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import styled from "@emotion/styled";
import { Icon } from "@iconify/react";
import { IconCircle } from "../../layouts/serviceSection/styles";


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

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

interface Props {
  open: boolean;
  onClose: () => void;
}

const EditProfileModal = ({ open, onClose }: Props) => {
  return (
    <Modal open={open}>
      <Box sx={style}>
        <Stack sx={{ justifyContent: "space-between" }}>
          <Typography variant="h5" sx={{ textAlign: "center" }} mb={2}>
            Edit Profile
          </Typography>
          {/* Close Button */}
          <IconButton
            onClick={onClose}
            sx={{ position: "absolute", top: 8, right: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </Stack>

        <Stack spacing={2}>
          <TextField fullWidth label="Full name" margin="normal" />
          <TextField fullWidth label="Position" margin="normal" />
          <TextField
            id="outlined-multiline-static"
            label="Bio"
            multiline
            rows={4}
          />
          <Typography variant="body1" >
            Change Profile Image
          </Typography>
          <Button
            component="label"
            role={undefined}
            variant="outlined"
            tabIndex={-1}
            sx={{ height: "167px", margin: "0" }}
          >
            <IconCircle><Icon icon="solar:cloud-upload-bold-duotone" width="36" height="36" /></IconCircle>
            <VisuallyHiddenInput
              type="file"
              onChange={(event) => console.log(event.target.files)}
              multiple
            />
          </Button>
        </Stack>

        <Button variant="contained" fullWidth sx={{ mt: 2, height: "51px" }}>
          Update profile
        </Button>
      </Box>
    </Modal>
  );
};

export default EditProfileModal;
