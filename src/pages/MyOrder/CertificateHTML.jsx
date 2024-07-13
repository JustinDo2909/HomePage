import React from "react";
import logo from "../Home/image/logot.png";
import facet1 from "../Home/image/Facet_part1.jpg";
import facet2 from "../Home/image/Facet_part2.jpg";

const CertificateHTML = (certificate) => {
  return `
      <html>
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <style>
      body {
          padding: 20px;
      }
  
      .title {
          display: flex;
          width: 100%;
          justify-content: center;
          align-content: center;
  
          .logo {
              flex: 1;
              width: 50px;
  
              img {
                  width: 200px;
              }
  
          }
  
          .titleName {
              flex: 1;
              text-align: center;
          }
  
          .nullBlock {
              flex: 1;
          }
      }
  
      .body {
          display: flex;
          justify-content: space-around;
          align-items: flex-start;
          margin-top: 10px;
          gap: 40px;
  
          .S-prop>p {
              width: 100%;
              color: antiquewhite;
              font-size: 14px;
              font-weight: bold;
              font-family: Arial, Helvetica, sans-serif;
              padding-left: 5px;
              background-color: rgb(9, 70, 123);
          }
  
          .S-prop>div:not(.middle-report div) {
              border: 2px solid rgb(9, 70, 123);
              padding: 10px;
              font-family: Arial, Helvetica, sans-serif;
          }
  
          .S-prop>div span:not(.comment) {
              float: right;
          }
  
  
          .props,
          .characters {
              display: flex;
              justify-content: center;
              align-items: center;
          }
  
          .thead>th {
              align-items: center;
          }
  
          .left-report {
              flex: 1;
          }
  
          .middle-report {
              flex: 1;
          }
  
          .right-report {
              flex: 1;
  
              th {
                  width: 20%;
              }
  
              table {
                  width: 100%;
              }
  
              tr>td:not(.empty-th, .empty-td) {
                  text-align: center;
                  border: 2px solid rgb(9, 70, 123);
                  border-collapse: collapse;
              }
          }
      }
  </style>
  
  <body>
      <div class="title">
          <div class="logo">
              <img src=${logo} alt="LogoShine">
          </div>
          <div class="titleName">
              <h1 style="font-size: 20px; font-weight: bold;">SHINE REPORT</h1>
              <p>${certificate.code}</p>
          </div>
          <div class="nullBlock"></div>
      </div>
  
      <div class="body">
          <div class="left-report">
              <div class="S-prop">
                  <p>SHINE NATURAL DIAMOND ORIGIN REPORT</p>
                  <div class="detail">
                      <p>September 01/2024</p>
                      <p>SHINE Report Number <span>${
                        certificate.code
                      }</span></p>
                      <p>Shape and Cutting Style <span>${
                        certificate.cut
                      }</span></p>
                      <p>Measurements <span>${
                        certificate.measurement
                      }</span></p>
                  </div>
              </div>
              <div class="S-prop">
                  <p>GRADING RESULT</p>
                  <div class="detail">
                      <p>Carar Weight <span>${certificate.carat}</span></p>
                      <p>Color Grade <span>${certificate.color}</span></p>
                      <p>Clarity Grade <span>${certificate.clarity}</span></p>
                      <p>Cut Grade <span>${certificate.make.replace(
                        /([a-z])([A-Z])/g,
                        "$1 $2"
                      )}</span></p>
                  </div>
              </div>
              <div class="S-prop">
                  <p>ADDITIONAL GRADING INFORMATION</p>
                  <div class="detail">
                      <p>Polish <span>${certificate.polish.replace(
                        /([a-z])([A-Z])/g,
                        "$1 $2"
                      )}</span></p>
                      <p>Symmetry <span>${certificate.symmetry.replace(
                        /([a-z])([A-Z])/g,
                        "$1 $2"
                      )}</span></p>
                      <p>Flourescence <span>${certificate.flourescence.replace(
                        /([a-z])([A-Z])/g,
                        "$1 $2"
                      )}</span></p>
                      <p>Inscription(s) <span>SHINE ${
                        certificate.code
                      }</span></p>
                      <p><span class="comment" style="font-weight: bold;">Comments:
                          </span>*SAMPLE**SAMPLE**SAMPLE**SAMPLE*</p>
                      <p>Additional pinpoints are not shown</p>
                  </div>
              </div>
              <div class="S-prop">
                  <p>ORIGIN RESULT</p>
                  <div class="detail">
                      <p>Country of Origin: <span>South Africa</span></p>
                  </div>
              </div>
          </div>
  
          <div class="middle-report">
              <div class="S-prop">
                  <p>PROPORTIONS</p>
                  <div class="props">
                      <img class="alt-diamond" src=${facet1} alt="">
                  </div>
              </div>
              <div class="S-prop">
                  <p>CLARITY CHARACTERISTICS</p>
                  <div class="characters">
                      <img class="alt-diamond" src=${certificate.photo} alt="">
                  </div>
              </div>
  
          </div>
  
          <div class="right-report">
              <div class="S-prop">
                  <p>GRADING SCALES</p>
                  <table>
                      <tr class="thead">
                          <th>SHINE COLOR SCALE</th>
                          <th class="empty-th"></th>
                          <th>SHINE CLARITY SCALE</th>
                          <th class="empty-th"></th>
                          <th>GIA CUT SCALE</th>
                      </tr>
                      <tr>
                          <td>D</td>
                          <td class="empty-td" rowspan="23"></td>
                          <td rowspan="3">FLAWLESS</td>
                          <td class="empty-td" rowspan="23"></td>
                          <td rowspan="4">EXCELLENT</td>
                      </tr>
                      <tr>
                          <td>E</td>
                      </tr>
                      <tr>
                          <td>F</td>
                      </tr>
                      <tr>
                          <td>G</td>
                          <td rowspan="2">INTERNALLY FLAWLESS</td>
                      </tr>
                      <tr>
                          <td>H</td>
                          <td rowspan="5">VERY GOOD</td>
                      </tr>
                      <tr>
                          <td>I</td>
                          <td rowspan="2">VVS1</td>
                      </tr>
                      <tr>
                          <td>J</td>
                      </tr>
                      <tr>
                          <td>K</td>
                          <td rowspan="2">VVS2</td>
                      </tr>
                      <tr>
                          <td>L</td>
                      </tr>
                      <tr>
                          <td>M</td>
                          <td rowspan="2">VS1</td>
                          <td rowspan="5">GOOD</td>
                      </tr>
                      <tr>
                          <td>N</td>
                      </tr>
                      <tr>
                          <td>O</td>
                          <td rowspan="2">VS2</td>
                      </tr>
                      <tr>
                          <td>P</td>
                      </tr>
                      <tr>
                          <td>Q</td>
                          <td rowspan="2">SI1</td>
                      </tr>
                      <tr>
                          <td>R</td>
                          <td rowspan="5">FAIR</td>
                      </tr>
                      <tr>
                          <td>S</td>
                          <td rowspan="2">SI2</td>
                      </tr>
                      <tr>
                          <td>T</td>
                      </tr>
                      <tr>
                          <td>U</td>
                          <td rowspan="2">I1</td>
                      </tr>
                      <tr>
                          <td>Y</td>
                      </tr>
                      <tr>
                          <td>W</td>
                          <td rowspan="2">I2</td>
                          <td rowspan="4">POOR</td>
                      </tr>
                      <tr>
                          <td>X</td>
                      </tr>
                      <tr>
                          <td>Y</td>
                          <td rowspan="2">I3</td>
                      </tr>
                      <tr>
                          <td>Z</td>
                      </tr>
  
                  </table>
              </div>
          </div>
  
      </div>
  
  </body>
  
  </html>
    `;
};

export default CertificateHTML;
