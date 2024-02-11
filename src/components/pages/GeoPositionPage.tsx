import {
  Box,
  Typography,
} from "@mui/material";
import React from "react";
import { FormattedMessage } from "react-intl";
import ListGeoTemplate from "../templates/ListGeoTemplate";

type Props = {};

const GeoPositionPage = (props: Props) => {
  return (
    <Box component={"div"}>
      <Typography variant="h5">
        <FormattedMessage
          id="GeoPositionPage.title"
          defaultMessage={"Georeference Point"}
        />
      </Typography>
      <ListGeoTemplate />
    </Box>
  );
};

export default GeoPositionPage;
