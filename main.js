$.ajaxSetup({
  async: false
  });

  function sortHouses(js1,js2,type,loc,a) {
      let htmlwokr = ``;
      let b_html=``;
      $.getJSON(js1, function (data) {
      var tmp_idx=0;
      $.getJSON(js2, function(Da) {
          var psf  = Da.Cost;
          var tmp = data.Prop;

          for (var i = 0; i < tmp.length; i++) {
              for (tmp_idx=0;tmp_idx<psf.length;tmp_idx++) {  if(psf[tmp_idx].loc == tmp[i].location) {break;}    }
              //Get the data from Json
              if( (tmp[i].a == a) || (a == 'All') ) {
                  if( (tmp[i].location == loc ) || (loc == 'All') ) {
                      if( (tmp[i].type == type) || (type == 'All') ) {
                          b_html = ``;
                          for(idx in tmp[i].b) {
                            if(tmp[i].b[idx] == "tree")     {b_html += ` <img src="images/tree.png" alt="Outdoors" width="20" height="20" title="Near to Nature, Parks nearby">`}
                            if(tmp[i].b[idx] == "shopping") {b_html += ` <img src="images/shopping.png" alt="Shopping" width="20" height="20" title="Shopping">`}
                            if(tmp[i].b[idx] == "gym")      {b_html += ` <img src="images/gym.png" alt="Exercise" width="20" height="20" title="Exercise facilities available">`}
                            if(tmp[i].b[idx] == "drink")    {b_html += ` <img src="images/drink.png" alt="Nightlife" width="20" height="20" title="Social Life Hotspot">`}
                          }
                          htmlwokr += `
                          <br>
                          <div class="row">
                              <div class="col-12 col-md-4 d-flex align-items-center justify-content-center">
                                  <img src="`+ tmp[i].img + `" class="w-100" id="img2" alt="place image here">
                              </div>
                              <div class="col-12 col-md-8">
                                  <br>
                                  <h1 id="name`+ i + `">` + tmp[i].Name + ` , ` + tmp[i].location + `</h1>
                                  <h4 id="price`+ i + `">` + tmp[i].price + ` ( PSF : `+tmp[i].psf+` )</h4>
                                  <h4 id="price`+ i + `">Average PSF of property = `+psf[tmp_idx].psf+`</h4>
                                  <h5>
                                    `+tmp[i].bed+` <img src="images/bed.png" alt="Bed" width="20" height="20">
                                    `+tmp[i].bath+` <img src="images/bathtub.png" alt="Bath" width="20" height="20"> 
                                    `+b_html+`

                                  </h5>
                                  <br>
                                  <p id="des`+ i + `">` + tmp[i].desc + `</p>
                                  <a class="btn btn-primary btn-xs " style="background-color:grey;" href="`+tmp[i].link+`" id="link`+i+`">Go to Site</a>


                              </div>

                          </div>
                          <br>
                          `;
                      }
                  }
              }
          }
      });
  });
  return (htmlwokr);
  }