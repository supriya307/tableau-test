import * as React from "react";

import "leaflet/dist/leaflet.css";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import { Map, TileLayer, Marker, Popup, icon } from "react-leaflet";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  phoneNumber: {
    color: "red",
    fontSize: "1.09rem"
  },
  contactInfo: {
    fontWeight: "bold"
  }
}));

export default () => {
  const classes = useStyles();

  React.useEffect(() => {
    const L = require("leaflet");

    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconUrl: require("../../styles/mapIcons/hospital.png"),
      iconSize: [50, 65],
      iconAnchor: null,
      shadowAnchor: null
    });
  }, []);

  return (
    <Map center={[-21.1, 55.5506]} zoom={10} style={{ height: "50vh" }}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-20.891, 55.444]}>
        <Popup>
          <span className={classes.contactInfo}>
            {" "}
            CHU Felix Guyon (Saint Denis)
            <br />
            Allée des topazes CS 11 021
            <br />
            Saint-Denis 97400, Réunion
            <br />
            www.chr-reunion.fr
            <br />
          </span>

          <span className={classes.phoneNumber}>
            Standard : 0262 90 50 50
            <br />
            Renseignements admissions :<br />
            0262 90 51 00
            <br />
            Secrétariat de direction de site :<br />
            0262 90 50 01/ 0262 90 50 02
            <br />
            Fax : 0262 90 50 51
            <br />
            Mail : direction.fguyon@chu-reunion.fr
            <br />
          </span>
        </Popup>
      </Marker>
      <Marker position={[-21.332838, 55.471843]}>
        <Popup>
          <span className={classes.contactInfo}>
            CHU de La Réunion sites Sud (Saint-Pierre - St Joseph - Le Tampon -
            St Louis - Cilaos)
          </span>
          <br />
          <span className={classes.phoneNumber}>
            Standard : 0262 35 90 00
            <br />
            Renseignements admissions :<br />
            0262 35 90 48
            <br />
            Secrétariat de direction des sites :<br />
            0262 35 95 55 / 0262 35 95 56
            <br />
            Fax : 0262 35 90 04
            <br />
            Mail : direction.ghsr@chu-reunion.fr
            <br />
          </span>
        </Popup>
      </Marker>
      <Marker position={[-20.973377, 55.304143]}>
        <Popup>
          <span className={classes.contactInfo}>
            Centre Hospitalier Ouest Réunion
            <br />
            5 impasse Plaine Chabrier
            <br />
            Le grand pourpier sud
            <br />
            97 460 SAINT-PAUL
            <br />
            Ile de la Réunion
            <br />
          </span>

          <span className={classes.phoneNumber}>
            Tel. : 0262 45 30 30
            <br />
            Mail : direction@chor.re
          </span>
        </Popup>
      </Marker>
      <Marker position={[-21.057414, 55.710413]}>
        <Popup>
          <span className={classes.contactInfo}>
            Groupe Hospitalier Est Réunion GHER
            <br />
            30 rte Nationale 3 - ZAC Madeleine - BP 186
            <br />
            97470 Saint Benoît
            <br />
          </span>
          <span className={classes.phoneNumber}>
            Tél. : 02 62 98 80 00
            <br />
            Fax : 02 62 98 80 19
          </span>
        </Popup>
      </Marker>
    </Map>
  );
};
