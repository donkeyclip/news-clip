export default {
    song: {
      label: "Song",
      type: "string",
    },
    styles:{
       label:"Styles Sheet",
       type: "object",
       props:{
        backgroundColor: {
            label: "Background Color",
            type: "color",
        },
        basicColor: {
            label: "Basic Color",
            type: "color",
        },
        secondaryColor: {
            label: "Basic Color",
            type: "color",
        },
        tertiaryColor: {
            label: "Basic Color",
            type: "color",
        },
        whiteCubeEffectColor: {
            label: "Color Effect for Cube",
            type: "color",
        },
       } 
    },
    title:{
        label:"Title",
        type:"object",
        props:{
            text1: {
                label: "Cube Text Part 1",
                type: "string",
            },
            text2: {
                label: "Cube Text Part 2",
                type: "string",
            },
        }
    },
    slide1: {
        label: "Slide 1",
        type: "object",
        props:{
            video:{type:"string"},
            location:{
                type:"object",
                props:{
                    city:{type:"string"},
                    country:{type:"string"},
                }
            },
            source:{type:"string"},
            text:{
                type:"array",
                items:{
                    type:"string"
                }
            }
        },
    },
    slide2:{
        label: "Slide 2",
        type: "object",
        props:{
            video:{type:"string"},
            location:{
                type:"object",
                props:{
                    city:{type:"string"},
                    country:{type:"string"},
                }
            },
            text:{
                type:"object",
                props:{
                    text1:{type:"string"},
                    text2:{type:"string"},
                    text3:{type:"string"},
                    text4:{type:"string"},
                }
            },
        },
    },
    slide3:{
        label: "Slide 3",
        type: "object",
        props:{
            video:{type:"string"},
            text:{
                type:"array",
                items:{
                    type:"string"
                }
            }
        },
    },
    slide4:{
        label: "Slide 4",
        type: "object",
        props:{
            video:{type:"string"},
            text:{type:"string"},
            boldtext:{label:"bold text",type:"string"},
            name:{
                type:"object",
                props:{
                    firstname:{label:"First Name",type:"string"},
                    lastname:{label:"Last Name",type:"string"},
                }
            },
            subtitle:{type:"string"},
        },
    },
    slide5:{
        label: "Slide 5",
        type: "object",
        props:{
            video:{type:"string"},
            title:{type:"string"},
            text:{type:"string"},
            location:{
                type:"object",
                props:{
                    city:{type:"string"},
                    country:{type:"string"},
                }
            },
            personImg:{type:"string"}
        },
    },
    slide6:{
        label: "Slide 6",
        type: "object",
        props:{
            video:{type:"string"},
            title:{
                type:"array",
                items:{
                    type:"string"
                }
            },
            text:{type:"string"}
        },
    },
    slide7:{
        label: "Slide 7",
        type: "object",
        props:{
            video:{type:"string"},
            title:{type:"string"},
            text:{type:"string"},
        },
    },
    slide8:{
        label: "Slide 8",
        type: "object",
        props:{
            video:{type:"string"},
            title:{type:"string"},
            text:{
                type:"object",
                props:{
                    text1:{type:"string"},
                    text2:{type:"string"},
                }
            },
            source:{type:"string"},
        },
    },
    slide9:{
        label: "Slide 9",
        type: "object",
        props:{
            video:{type:"string"},
            title:"array",
            text:{
                type:"object",
                props:{
                    text1:{type:"string"},
                    text2:{type:"string"},
                    text3:{type:"string"},
                    text4:{type:"string"},
                    text5:{type:"string"},
                }
            },
            person:{
                type:"object",
                props:{
                    name:{
                        type:"array",
                        items:{
                            type:"string"
                        }
                    },
                    job:{type:"string"},
                }
            },
        },
    },
    slide10:{
        label: "Slide 10",
        type: "object",
        props:{
            video:{type:"string"},
            text1:{type:"string"},
            text2:{type:"string"},
            location:{
                type:"object",
                props:{
                    city:{type:"string"},
                    country:{type:"string"},
                }
            },
        },
    },
    slide11:{
        label: "Slide 11",
        type: "object",
        props:{
            video:{type:"string"},
            text:{type:"string"},
            source:{type:"string"},
        },
    },
    slide12:{
        label: "Slide 12",
        type: "object",
        props:{
            video:{type:"string"},
            title:{
                type:"array",
                items:{
                    type:"string"
                }
            },
            text:{
                type:"object",
                props:{
                    text1:{type:"string"},
                    text2:{type:"string"},
                    text3:{type:"string"},
                }
            },
            location:{
                type:"object",
                props:{
                    city:{type:"string"},
                    country:{type:"string"},
                }
            },
            person:{
                type:"object",
                props:{
                    personImg:{type:"string"},
                    name:{type:"string"},
                    job:{type:"string"},
                }
            },
        },
    }
  }; 