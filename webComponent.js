(function()  {
    
    let chartsJS=document.createElement('script');
    chartsJS.src='https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.js';
    document.head.appendChild(chartsJS);
	
    let stylesheet = document.createElement('link');
    stylesheet.rel='stylesheet';
    stylesheet.href='https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css';
    stylesheet.async=false;
    document.head.appendChild(stylesheet);    
	
    let template = document.createElement('template');
	
  template.innerHTML = `
  <div id="myDiv">
			<canvas id="myChart" width="400" height="400"></canvas>
		</div>
  `;

    
   
	
    
    chartsJS.onload = () => 
    customElements.define('com-sap-sample-helloworld5', class HelloWorld extends HTMLElement {


		constructor() {
			super(); 
          
		   let shadowRoot = this.attachShadow({mode: "open"});
		   shadowRoot.appendChild(template.content.cloneNode(true));
           this._firstConnection = false;
           this.chartTypeValue="radar";
           
        

      this.addEventListener("click", event => {
				var event = new Event("onClick");
				this.dispatchEvent(event);
            });
		
    
    }

        //Fired when the widget is added to the html DOM of the page
        connectedCallback(){
            this._firstConnection = true;
            this.redraw(); 
        }

         //Fired when the widget is removed from the html DOM of the page (e.g. by hide)
        disconnectedCallback(){
        
        }

         //When the custom widget is updated, the Custom Widget SDK framework executes this function first
		onCustomWidgetBeforeUpdate(oChangedProperties) {

		}

        //When the custom widget is updated, the Custom Widget SDK framework executes this function after the update
		onCustomWidgetAfterUpdate(oChangedProperties) {
            if (this._firstConnection){
                this.redraw();
            }
        }
        
        //When the custom widget is removed from the canvas or the analytic application is closed
        onCustomWidgetDestroy(){
        
        }

        
        //When the custom widget is resized on the canvas, the Custom Widget SDK framework executes the following JavaScript function call on the custom widget
        // Commented out by default
        /*
        onCustomWidgetResize(width, height){
        
        }
        */
         

         get chartType() {
            return this.chartTypeValue;
        }

        set chartType(value) {
            this.chartTypeValue = value;
        }
         
        redraw(){
        
        
            let myChart=this.shadowRoot.getElementById('myChart');
             let typeofchart=this.chartType;
		//Global Options

		Chart.defaults.global.defaultFontFamily='Lato';
		Chart.defaults.global.defaultFontSize=18;
		Chart.defaults.global.defaultFontColor='Lato';
    
    
    
    let massPopChart=new Chart(myChart,{
			type:typeofchart,//bar,horizontalBar,pie,line,doughnut,radar,polarArea
			data:{
				labels:['Boston','Worcester','Springfield','Lowell','Cambridge','New Bedford'],
				datasets:[{
					label:'Population',
					data:[
					617594,
					181045,
					153060,
					106519,
					105162,
					95072
					],
					//backgroundColor:'green'
					backgroundColor:[
					'rgba(255,99,132,0.6)',
					'rgba(54,162,235,0.6)',
					'rgba(255,206,86,0.6)',
					'rgba(75,192,192,0.6)',
					'rgba(153,102,255,0.6)',
					'rgba(255,159,64,0.6)',
					'rgba(255,99,132,0.6)'
					],
					borderWidth:1,
					borderColor:'#777',
					hoverBorderWidth:3,
				    hoverBorderColor:'#000'

				}]
			},
			options:{
				title:{
					display:true,
					text:'Largest Cities In Massachusetts',
					fontSize:25
				},
				legend:{
					display:true,
					position:'right',
					labels:{
						fontColor:'#000'
					}
				},
				layout:{
					padding:{
						left:50,
						right:0,
						bottom:0,
						top:0
					}
				},
				tooltips:{
					enabled:true
				}
			}
		});



        }
    
    
    });
        
})();
