/**********************************************************************
 * Copyright 2020 Paul Reeve <preeve@pdjr.eu>
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you
 * may not use this file except in compliance with the License. You may
 * obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
 * implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

module.exports = class KellyColors {

  constructor() {
    this.COLORS = [ 
      '#F3C300',
      '#875692',
      '#F38400',
      '#A1CAF1',
      '#BE0032',
      '#C2B280',
      '#848482',
      '#008856',
      '#E68FAC',
      '#0067A5',
      '#F99379',
      '#604E97',
      '#F6A600',
      '#B3446C',
      '#DCD300',
      '#882D17',
      '#8DB600',
      '#654522',
      '#E25822',
      '#2B3D26'
    ];
    this.start = this.COLORS[0];
  }
 
  reset() {
    while (this.COLORS[0] != this.start) this.getColor();
    return(this);
  }

  getColor() {
    var retval = this.COLORS.shift();
    this.COLORS.push(retval);
    return(retval);
  }

  getColors(n) {
    return(this.COLORS.slice(-n));
  }

}
