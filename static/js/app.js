const url="https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"
d3.json(url).then(function(data){
    console.log(data);


let sample= data.samples[0];
console.log(`This is a sample ${sample}`);
let values=sample.sample_values;
console.log(`This is value ${values}`);
//let labels=sample.otu_ids;

//let labels = sample.otu_ids;
let labels = sample.otu_ids.map(otu_id => `OTU ${otu_id}`);
console.log(`This is otu_ids ${labels}`);
 
let data1=[{
        y: labels,
        x: values,
        type: 'bar',
        orientation:'h'
        }];
        Plotly.newPlot('bar', data1); 
    })
    

