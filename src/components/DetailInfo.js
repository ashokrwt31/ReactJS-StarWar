import React, { Component } from "react";

export default class DetailInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const detailInfoData  = this.props.planetDetail;
        return(
            <table>
    <tr>
      <td><b>Name</b></td>
      <td>{detailInfoData.name}</td>
    </tr>
    <tr>
      <td><b>Population</b></td>
      <td>{detailInfoData.population}</td>
    </tr>
    <tr>
      <td><b>Rotation Period</b></td>
      <td>{detailInfoData.rotation_period}</td>
    </tr>
    <tr>
      <td><b>Orbital Period</b></td>
      <td>{detailInfoData.orbital_period}</td>
    </tr>
    <tr>
      <td><b>Diameter</b></td>
      <td>{detailInfoData.diameter}</td>
    </tr>
    <tr>
      <td><b>Climate</b></td>
      <td>{detailInfoData.climate}</td>
    </tr>
    <tr>
      <td><b>Gravity</b></td>
      <td>{detailInfoData.gravity}</td>
    </tr>
    <tr>
      <td><b>Terrain</b></td>
      <td>{detailInfoData.terrain}</td>
    </tr>
    <tr>
      <td><b>Surface Water</b></td>
      <td>{detailInfoData.surface_water}</td>
    </tr>
  </table>

        );
    }
}