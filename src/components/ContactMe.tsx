import React from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, TextareaAutosize } from "@mui/material";

interface GoogleMapProps {
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
}

const ContactUs: React.FC = () => {
  const googlemapRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    // Google Maps setup
    const googlemap = new google.maps.Map(googlemapRef.current, {
      center: { lat: 44.5403, lng: -78.5463 },
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    });
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: handle form submission
  };

  return (
    <Container maxWidth="lg">
      <Box mb={4}>
        <h1>Contact Us</h1>
      </Box>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Box flexGrow={1} mr={2}>
          <Box id="googlemap" sx={{ width: "100%", height: 350 }} ref={googlemapRef}></Box>
        </Box>
        <Box flexGrow={1} ml={2}>
          <form onSubmit={handleSubmit}>
            <FormControl sx={{ mb: 2 }}>
              <FormLabel htmlFor="form-name">Name</FormLabel>
              <Input type="text" id="form-name" placeholder="Name" />
            </FormControl>
            <FormControl sx={{ mb: 2 }}>
              <FormLabel htmlFor="form-email">Email Address</FormLabel>
              <Input type="email" id="form-email" placeholder="Email Address" />
            </FormControl>
            <FormControl sx={{ mb: 2 }}>
              <FormLabel htmlFor="form-subject">Telephone</FormLabel>
              <Input type="text" id="form-subject" placeholder="Subject" />
            </FormControl>
            <FormControl sx={{ mb: 2 }}>
              <FormLabel htmlFor="form-message">Email your Message</FormLabel>
              <TextareaAutosize id="form-message" placeholder="Message" minRows={4} />
            </FormControl>
            <Button variant="contained" type="submit" sx={{ mt: 2 }}>
              Contact Us
            </Button>
          </form>
        </Box>
      </Box>
    </Container>
  );
};

export default ContactUs;
