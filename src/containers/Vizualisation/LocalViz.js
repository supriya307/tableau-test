import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import Charts from "react-apexcharts";
import { getDaysInMonth } from "../../helpers/getDaysInMonth";

const months = getDaysInMonth(2, 2020);

const styles = theme => ({
  root: {
    marginTop: "0.50rem"
  }
});

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
          horizontal: true
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
        colors: ["#F44336"]
      },
      dataLabels: {
        enabled: false
      },

      yaxis: {
        title: {
          text: "nombre de cas",
          style: {
            fontSize: "1.25em"
          }
        }
      },
      title: {
        text: "Évolution du nombre de nouveau cas par jour",
        align: "center",
        margin: 20,
        offsetY: 20,
        style: {
          fontSize: "1.25rem"
        }
      },
      responsive: [
        {
          breakpoint: 600,
          options: {
            title: {
              style: {
                fontSize: "0.60rem"
              }
            }
          }
        }
      ]
    },
    series: [
      {
        name: "cas confirmé(s) par jour",
        data: [
          1,
          3,
          1,
          1,
          3,
          0,
          3,
          2,
          10,
          7,
          2,
          18,
          10,
          19,
          21,
          20,
          10,
          38,
          24,
          17,
          23
        ]
      }
    ]
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Charts
          className={classes.root}
          options={this.state.options}
          series={this.state.series}
          type="line"
          height="500px"
        />
      </div>
    );
  }
}

export default withStyles(styles)(Chart);
