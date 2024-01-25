import { Typography, Box, CardMedia, Container } from "@mui/material";
import imageSrc from "../assets/images/about-image.jpg";

const About = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 4,
        }}
      >
        <Typography variant="h4" component="h2" gutterBottom>
          How I&apos;m Different
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          After careers in the security and defence industries, I followed my
          passion for IT and creative services. I&apos;ve helped businesses
          reach their goals through IT support, management, and design projects.
          I&apos;m focused on overseeing projects from concept through final
          delivery. Throughout my career, I have contributed to positive
          business results through effective organization, prioritization, and
          execution of critical projects. My experience as a defence veteran
          gave me a broad vision of others&apos; needs while respecting and
          valuing cultural diversity.
        </Typography>
        <Box sx={{ maxWidth: 600, overflow: "hidden", borderRadius: "8px" }}>
          <CardMedia
            component="img"
            image={imageSrc}
            alt="silhouette of a girl gazing towards the horizon"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default About;
