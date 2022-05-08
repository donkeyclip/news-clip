export default {
    song: {
      label: "Song",
      type: "string",
      optional: true,
      default: "https://donkeyclip.github.io/news-clip/demo/assets/news-audio.mp3",
    },
    backgroundColor: {
        label: "Background Color",
        type: "color",
        optional: true,
        default: "white",
    },
    basicColor: {
        label: "Basic Color",
        type: "color",
        optional: true,
        default: "black",
    },
    secondaryColor: {
        label: "Basic Color",
        type: "color",
        optional: true,
        default: "#fac132",
    },
    tertiaryColor: {
        label: "Basic Color",
        type: "color",
        optional: true,
        default: "#fa2020",
    },
    whiteCubeEffectColor: {
        label: "Color Effect for Cube",
        type: "color",
        optional: true,
        default: "#bbc6c9",
    },
    text1: {
        label: "Cube Text Part 1",
        type: "string",
        optional: true,
        default: "Cube",
    },
    text2: {
        label: "Cube Text Part 2",
        type: "string",
        optional: true,
        default: "news",
    },
    slide1: {
        label: "Slide 1",
        type: "object",
        optional: true,
        default: {
            video:
              "https://donkeyclip.github.io/news-clip/demo/assets/man-and-woman-talk.mp4",
            location: {
              city: "NewYork",
              country: "USA",
            },
            source: "FAKENEWS AGENCY",
            text: [
              "the",
              "good",
              "news",
              "about",
              "computers",
              "is",
              "that",
              "they",
              "do",
              "what",
              "you",
              "tell",
              "them",
              "to",
              "do",
              ".",
              "the",
              "bad",
              "news",
              "is",
              "that",
              "they",
              "do",
              "what",
              "you",
              "tell",
              "them",
              "to",
              "do",
              ".",
            ],
          },
    },
    slide2:{
        label: "Slide 2",
        type: "object",
        optional: true,
        default:{
            video:
              "https://donkeyclip.github.io/news-clip/demo/assets/world-news.mp4",
            location: {
              city: "Moscow",
              country: "RUSSIA",
            },
            text: {
              text1: "We are in the bussines",
              text2: "of gathering the news.",
              text3: "We're not in the bussiness",
              text4: "of taking about the news.",
            },
          },
    },
    slide3:{
        label: "Slide 3",
        type: "object",
        optional: true,
        default:{
            video: "https://donkeyclip.github.io/news-clip/demo/assets/man-talk.mp4",
            text: [
            "The",
            "idea",
            "of",
            "redememption",
            "is",
            "always",
            "good",
            "news",
            "even",
            "if",
            "it",
            "means",
            "sacrifice",
            "or",
            "some",
            "difficult",
            "times",
            ".",
            ],
        },
    },
    slide4:{
        label: "Slide 4",
        type: "object",
        optional: true,
        default:{
            video: "https://donkeyclip.github.io/news-clip/demo/assets/woman-talk.mp4",
            text: "the brains of humans contain a mechanism that is designed ",
            boldtext: "to give priority to bad news.",
            name: {
            firstname: "Alice",
            lastname: "Smith",
            },
            subtitle: "politician",
        }
    },
    slide5:{
        label: "Slide 5",
        type: "object",
        optional: true,
        default:{
            video: "https://donkeyclip.github.io/news-clip/demo/assets/demonstration.mp4",
            title: "main news of the day",
            text: "bad news travels at the speed of light.good news travels like molasses.",
            location: {
            city: "Amsterdam",
            country: "Netherlands",
            },
            personImg: "https://donkeyclip.github.io/news-clip/demo/assets/person.jpeg",
        }
    },
    slide6:{
        label: "Slide 6",
        type: "object",
        optional: true,
        default:{
            video: "https://donkeyclip.github.io/news-clip/demo/assets/live.mp4",
            title: ["the", "expected", "meeting", "took", "place"],
            text: "If there is one way that I would sum up what the 2016 election was on cable news, it was world-class journalists interviewing morons.",
        }
    },
    slide7:{
        label: "Slide 7",
        type: "object",
        optional: true,
        default:{
            video: "https://donkeyclip.github.io/news-clip/demo/assets/breaking-news.mp4",
            title: "breaking news",
             text: "fake news is cheap to produce genuine journalism is expensive nothing in fine print is ever good news.",
        }
    },
    slide8:{
        label: "Slide 8",
        type: "object",
        optional: true,
        default:{
            video: "https://donkeyclip.github.io/news-clip/demo/assets/police.mp4",
            title: "news summary of the day",
            text: {
                text1: "My mentor is Lorem Ipsum, the greatest",
                text2: "news anchor Ipsum Loren has had.",
            },
            source: "TVNews Agency",
        }
    },
    slide9:{
        label: "Slide 9",
        type: "object",
        optional: true,
        default:{
          video: "https://donkeyclip.github.io/news-clip/demo/assets/woman-in-red.mp4",
          title: ["BREAKING", "NEWS"],
          text: {
            text1: "I BELIEVE IN ELVES AND",
            text2: "GIANTS. I BELIEVE THAT FAIRY",
            text3: "TALES ARE NOTHING MORE",
            text4: "THAN NEWS REPORTS OF",
            text5: "WHAT ONCE HAPPEND.",
          },
          person: {
            name: ["Jenny", "Brown"],
            job: "journalist",
          },
        }
    },
    slide10:{
        label: "Slide 10",
        type: "object",
        optional: true,
        default:{
            video: "https://donkeyclip.github.io/news-clip/demo/assets/france-news.mp4",
            text1: "The news used to be to report facts and allow you to make the decision.",
            text2: "This country is a better place because Cube News has succeeded.",
            location: {
                city: "Paris",
                country: "France",
            },
        }
    },
    slide11:{
        label: "Slide 11",
        type: "object",
        optional: true,
        deafult:{
          video: "https://donkeyclip.github.io/news-clip/demo/assets/france-news2.mp4",
          text: "OUR DEMOCRACY DEPENDS ON A FREE AND INDEPENDENT PRESS. WHEN POLITICIANS CALL REPORTING THEY DON'T LIKE 'FAKE NEWS', THEY UNDERMINE TRUSTIN OUR CIVIC ORGANIZATION FOR THEIR OWN POLITICAL GAIN.",
          source: "Lorem Ipsum Media",
        }
    },
    slide12:{
        label: "Slide 12",
        type: "object",
        optional: true,
        default:{
            video: "https://donkeyclip.github.io/news-clip/demo/assets/people.mp4",
            title: ["what", "is", "going", "on", "in", "the", "world", "?"],
            text: {
                text1:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                text2:
                    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                text3:
                    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            },
            location: {
                city: "Berlin",
                country: "Germany",
            },
            person: {
                personImg:
                    "https://donkeyclip.github.io/news-clip/demo/assets/woman.jpeg",
                name: "Emma Wilson",
                job: "reporter",
            },
        }
    }
  }; 