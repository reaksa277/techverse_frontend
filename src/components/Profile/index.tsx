import { Icon } from "@iconify/react";
import { Box, Stack, Typography } from "@mui/material";

interface Props {
  avatar: string;
  author: string;
  date?: string;
}

const Profile = ({ avatar, author, date }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <img
        src={avatar}
        alt={author}
        style={{ width: "48px", height: "48px", borderRadius: "100px" }}
      />
      <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
        <Typography variant="body1">{author}</Typography>
        {date && (
          <>
            <Icon icon="tabler:circle-dot-filled" width="4" height="4" />
            <Typography variant="body1">{date}</Typography>
          </>
        )}
      </Stack>
    </Box>
  );
};

export default Profile;
