import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import Charts from "react-apexcharts";
import { getDaysInMonth } from "../../helpers/getDaysInMonth";

const months = getDaysInMonth(2, 2020);

const styles = theme => ({
  root: {
    margin: "70px auto",
    overflow: "hidden",
    height: "100%",
    width: "100%",
    textAlign: "center"
  }
});

console.log(months);

class Chart extends Component {
  state = {
    options: {
      chart: {
        background: "#f4f4f4",
        foreColor: "#333"
      },

      xaxis: {
        categories: months
      },
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      markers: {
        size: 4,
        colors: ["#FFA41B"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
          size: 7
        }
      },
      stroke: {
        width: 7,
        curve: "smooth",
        colors: ["#ff0000"]
      },
      dataLabels: {
        enabled: false
      },

      yaxis: {
        title: {
          text: "cas de contamination / jour",
          style: {
            fontSize: "25px"
          }
        }
      },
      title: {
        text: "évolution du nb de contaminés à la Réunion en mars 2020",
        align: "center",
        margin: 20,
        offsetY: 20,
        style: {
          fontSize: "25px"
        }
      }
    },
    series: [],
    noData: {
      text: "Loading..."
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Charts
          options={this.state.options}
          series={this.state.series}
          type="line"
          height="100%"
          width="100%"
        />
      </div>
    );
  }
}

export default withStyles(styles)(Chart);
