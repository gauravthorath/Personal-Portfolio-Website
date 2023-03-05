import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import ProjectTable from "./ProjectsTable";
import ToggleButtonNotEmpty from "./ToggleButtons";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    width: 200,
    height: 200,
  },
});

const profileData = {
  name: "Gaurav Thorat",
  jobTitle: "Snior Frontend Developer",
  email: "gaurav@google.com",
  phone: +49 - 334553345,
  location: "Hamburg, Germany",
  profileImage: "image:URL",
};

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Avatar
          src={profileData.profileImage}
          alt={profileData.name}
          className={classes.avatar}
        />
        <Typography variant="h5" gutterBottom>
          {profileData.name}
        </Typography>
        <Typography variant="subtitle1">{profileData.jobTitle}</Typography>
        <Typography variant="body1">{profileData.email}</Typography>
        <Typography variant="body1">{profileData.phone}</Typography>
        <Typography variant="body1">{profileData.location}</Typography>
      </div>

      <ProjectTable></ProjectTable>
      <ToggleButtonNotEmpty />
    </>
  );
};

export default Home;
