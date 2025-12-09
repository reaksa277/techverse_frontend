import { Box, Stack, Typography } from "@mui/material";

interface Props {
  username: string;
  avatar: string;
  tag?: string;
  bio?: string;
}

const ProfileBlock = ({ username, avatar, tag, bio }: Props) => {
  return (
      <Stack direction="column" spacing={2}>
        <Box sx={{display: "flex", flexDirection: "row", alignItems: "start", gap: "20px"}}>
          <img
            src={avatar}
            alt={username}
            style={{ width: "193px", height: "193px", borderRadius: "100px" }}
          />
          <Stack direction="column" spacing={2}>
            <Typography variant="h3">{username}</Typography>
            {tag && (
              <Typography
                sx={{
                  height: "28px",
                  padding: "4px 8px",
                  backgroundColor: "primary.lighter",
                  color: "primary.main",
                  width: "fit-content",
                  borderRadius: "16px",
                }}
                variant="body2"
              >
                {tag}
              </Typography>
            )}
            {bio && (
            <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
              {bio}
            </Typography>
            )}
          </Stack>
        </Box>
      </Stack>
  );
};

export default ProfileBlock;
