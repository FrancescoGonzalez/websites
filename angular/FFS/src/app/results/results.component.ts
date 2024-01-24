import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent {
  data =// 20240123154236
// https://transport.opendata.ch/v1/connections?from=Lugano&to=LuzernRosenberg&limit=5

    {
      "connections": [
        {
          "from": {
            "station": {
              "id": "8505300",
              "name": "Lugano",
              "score": null,
              "coordinate": {
                "type": "WGS84",
                "x": 46.005494,
                "y": 8.946993
              },
              "distance": null
            },
            "arrival": null,
            "arrivalTimestamp": null,
            "departure": "2024-01-23T16:02:00+0100",
            "departureTimestamp": 1706022120,
            "delay": 0,
            "platform": "3",
            "prognosis": {
              "platform": null,
              "arrival": null,
              "departure": "2024-01-23T16:02:00+0100",
              "capacity1st": null,
              "capacity2nd": null
            },
            "realtimeAvailability": null,
            "location": {
              "id": "8505300",
              "name": "Lugano",
              "score": null,
              "coordinate": {
                "type": "WGS84",
                "x": 46.005494,
                "y": 8.946993
              },
              "distance": null
            }
          },
          "to": {
            "station": {
              "id": null,
              "name": "Viva Luzern Rosenberg, Luzern, Rosenbergstr. 2-4",
              "score": null,
              "coordinate": {
                "type": "WGS84",
                "x": null,
                "y": null
              },
              "distance": null
            },
            "arrival": "2024-01-23T19:00:00+0100",
            "arrivalTimestamp": 1706032800,
            "departure": null,
            "departureTimestamp": null,
            "delay": null,
            "platform": null,
            "prognosis": {
              "platform": null,
              "arrival": null,
              "departure": null,
              "capacity1st": null,
              "capacity2nd": null
            },
            "realtimeAvailability": null,
            "location": {
              "name": "Viva Luzern Rosenberg, Luzern, Rosenbergstr. 2-4",
              "score": null,
              "coordinate": {
                "type": "WGS84",
                "x": null,
                "y": null
              },
              "distance": null
            }
          },
          "duration": "00d02:58:00",
          "transfers": 2,
          "service": null,
          "products": [
            "IC 2",
            "IR 26",
            "19"
          ],
          "capacity1st": null,
          "capacity2nd": null,
          "sections": [
            {
              "journey": {
                "name": "000886",
                "category": "IC",
                "subcategory": null,
                "categoryCode": null,
                "number": "2",
                "operator": "SBB",
                "to": "Zürich HB",
                "passList": [
                  {
                    "station": {
                      "id": "8505300",
                      "name": "Lugano",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 46.005494,
                        "y": 8.946993
                      },
                      "distance": null
                    },
                    "arrival": null,
                    "arrivalTimestamp": null,
                    "departure": "2024-01-23T16:02:00+0100",
                    "departureTimestamp": 1706022120,
                    "delay": 0,
                    "platform": "3",
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": "2024-01-23T16:02:00+0100",
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8505300",
                      "name": "Lugano",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 46.005494,
                        "y": 8.946993
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "8505213",
                      "name": "Bellinzona",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 46.195425,
                        "y": 9.029522
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T16:16:00+0100",
                    "arrivalTimestamp": 1706022960,
                    "departure": "2024-01-23T16:17:00+0100",
                    "departureTimestamp": 1706023020,
                    "delay": 1,
                    "platform": null,
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": "2024-01-23T16:18:00+0100",
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8505213",
                      "name": "Bellinzona",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 46.195425,
                        "y": 9.029522
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "0000140",
                      "name": "Gotthard-Panoramastrecke",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 46.604323,
                        "y": 8.594655
                      },
                      "distance": null
                    },
                    "arrival": null,
                    "arrivalTimestamp": null,
                    "departure": null,
                    "departureTimestamp": null,
                    "delay": null,
                    "platform": null,
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": "2024-01-23T15:43:52+0100",
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "0000140",
                      "name": "Gotthard-Panoramastrecke",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 46.604323,
                        "y": 8.594655
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "8505004",
                      "name": "Arth-Goldau",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.049035,
                        "y": 8.549449
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T18:11:00+0100",
                    "arrivalTimestamp": 1706029860,
                    "departure": null,
                    "departureTimestamp": null,
                    "delay": 0,
                    "platform": "4",
                    "prognosis": {
                      "platform": null,
                      "arrival": "2024-01-23T18:11:00+0100",
                      "departure": null,
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8505004",
                      "name": "Arth-Goldau",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.049035,
                        "y": 8.549449
                      },
                      "distance": null
                    }
                  }
                ],
                "capacity1st": null,
                "capacity2nd": null
              },
              "walk": null,
              "departure": {
                "station": {
                  "id": "8505300",
                  "name": "Lugano",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 46.005494,
                    "y": 8.946993
                  },
                  "distance": null
                },
                "arrival": null,
                "arrivalTimestamp": null,
                "departure": "2024-01-23T16:02:00+0100",
                "departureTimestamp": 1706022120,
                "delay": 0,
                "platform": "3",
                "prognosis": {
                  "platform": null,
                  "arrival": null,
                  "departure": "2024-01-23T16:02:00+0100",
                  "capacity1st": null,
                  "capacity2nd": null
                },
                "realtimeAvailability": null,
                "location": {
                  "id": "8505300",
                  "name": "Lugano",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 46.005494,
                    "y": 8.946993
                  },
                  "distance": null
                }
              },
              "arrival": {
                "station": {
                  "id": "8505004",
                  "name": "Arth-Goldau",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.049035,
                    "y": 8.549449
                  },
                  "distance": null
                },
                "arrival": "2024-01-23T18:11:00+0100",
                "arrivalTimestamp": 1706029860,
                "departure": null,
                "departureTimestamp": null,
                "delay": 0,
                "platform": "4",
                "prognosis": {
                  "platform": null,
                  "arrival": "2024-01-23T18:11:00+0100",
                  "departure": null,
                  "capacity1st": null,
                  "capacity2nd": null
                },
                "realtimeAvailability": null,
                "location": {
                  "id": "8505004",
                  "name": "Arth-Goldau",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.049035,
                    "y": 8.549449
                  },
                  "distance": null
                }
              }
            },
            {
              "journey": {
                "name": "002332",
                "category": "IR",
                "subcategory": null,
                "categoryCode": null,
                "number": "26",
                "operator": "SOB-sob",
                "to": "Basel SBB",
                "passList": [
                  {
                    "station": {
                      "id": "8505004",
                      "name": "Arth-Goldau",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.049035,
                        "y": 8.549449
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T18:11:00+0100",
                    "arrivalTimestamp": 1706029860,
                    "departure": "2024-01-23T18:15:00+0100",
                    "departureTimestamp": 1706030100,
                    "delay": 0,
                    "platform": "5",
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": "2024-01-23T18:15:00+0100",
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8505004",
                      "name": "Arth-Goldau",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.049035,
                        "y": 8.549449
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "0000137",
                      "name": "Rotsee",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.074525,
                        "y": 8.320799
                      },
                      "distance": null
                    },
                    "arrival": null,
                    "arrivalTimestamp": null,
                    "departure": null,
                    "departureTimestamp": null,
                    "delay": null,
                    "platform": null,
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": "2024-01-23T15:42:52+0100",
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "0000137",
                      "name": "Rotsee",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.074525,
                        "y": 8.320799
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "8505000",
                      "name": "Luzern",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.050174,
                        "y": 8.310185
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T18:41:00+0100",
                    "arrivalTimestamp": 1706031660,
                    "departure": null,
                    "departureTimestamp": null,
                    "delay": 0,
                    "platform": "6",
                    "prognosis": {
                      "platform": null,
                      "arrival": "2024-01-23T18:41:00+0100",
                      "departure": null,
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8505000",
                      "name": "Luzern",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.050174,
                        "y": 8.310185
                      },
                      "distance": null
                    }
                  }
                ],
                "capacity1st": null,
                "capacity2nd": null
              },
              "walk": null,
              "departure": {
                "station": {
                  "id": "8505004",
                  "name": "Arth-Goldau",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.049035,
                    "y": 8.549449
                  },
                  "distance": null
                },
                "arrival": "2024-01-23T18:11:00+0100",
                "arrivalTimestamp": 1706029860,
                "departure": "2024-01-23T18:15:00+0100",
                "departureTimestamp": 1706030100,
                "delay": 0,
                "platform": "5",
                "prognosis": {
                  "platform": null,
                  "arrival": null,
                  "departure": "2024-01-23T18:15:00+0100",
                  "capacity1st": null,
                  "capacity2nd": null
                },
                "realtimeAvailability": null,
                "location": {
                  "id": "8505004",
                  "name": "Arth-Goldau",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.049035,
                    "y": 8.549449
                  },
                  "distance": null
                }
              },
              "arrival": {
                "station": {
                  "id": "8505000",
                  "name": "Luzern",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.050174,
                    "y": 8.310185
                  },
                  "distance": null
                },
                "arrival": "2024-01-23T18:41:00+0100",
                "arrivalTimestamp": 1706031660,
                "departure": null,
                "departureTimestamp": null,
                "delay": 0,
                "platform": "6",
                "prognosis": {
                  "platform": null,
                  "arrival": "2024-01-23T18:41:00+0100",
                  "departure": null,
                  "capacity1st": null,
                  "capacity2nd": null
                },
                "realtimeAvailability": null,
                "location": {
                  "id": "8505000",
                  "name": "Luzern",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.050174,
                    "y": 8.310185
                  },
                  "distance": null
                }
              }
            },
            {
              "journey": null,
              "walk": {
                "duration": 300
              },
              "departure": {
                "station": {
                  "id": "8505000",
                  "name": "Luzern",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.050174,
                    "y": 8.310185
                  },
                  "distance": null
                },
                "arrival": "2024-01-23T18:41:00+0100",
                "arrivalTimestamp": 1706031660,
                "departure": "2024-01-23T18:41:00+0100",
                "departureTimestamp": 1706031660,
                "delay": null,
                "platform": null,
                "prognosis": {
                  "platform": null,
                  "arrival": null,
                  "departure": null,
                  "capacity1st": null,
                  "capacity2nd": null
                },
                "realtimeAvailability": null,
                "location": {
                  "id": "8505000",
                  "name": "Luzern",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.050174,
                    "y": 8.310185
                  },
                  "distance": null
                }
              },
              "arrival": {
                "station": {
                  "id": "8508450",
                  "name": "Luzern, Bahnhof",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.050749,
                    "y": 8.310247
                  },
                  "distance": null
                },
                "arrival": "2024-01-23T18:46:00+0100",
                "arrivalTimestamp": 1706031960,
                "departure": null,
                "departureTimestamp": null,
                "delay": null,
                "platform": null,
                "prognosis": {
                  "platform": null,
                  "arrival": null,
                  "departure": null,
                  "capacity1st": null,
                  "capacity2nd": null
                },
                "realtimeAvailability": null,
                "location": {
                  "id": "8508450",
                  "name": "Luzern, Bahnhof",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.050749,
                    "y": 8.310247
                  },
                  "distance": null
                }
              }
            },
            {
              "journey": {
                "name": "019476",
                "category": "B",
                "subcategory": null,
                "categoryCode": null,
                "number": "19",
                "operator": "VBL",
                "to": "Luzern, Friedental",
                "passList": [
                  {
                    "station": {
                      "id": "8508450",
                      "name": "Luzern, Bahnhof",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.050749,
                        "y": 8.310247
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T18:46:00+0100",
                    "arrivalTimestamp": 1706031960,
                    "departure": "2024-01-23T18:48:00+0100",
                    "departureTimestamp": 1706032080,
                    "delay": null,
                    "platform": "R",
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": null,
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8508450",
                      "name": "Luzern, Bahnhof",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.050749,
                        "y": 8.310247
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "8573054",
                      "name": "Luzern, Schwanenplatz",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.053251,
                        "y": 8.308893
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T18:50:00+0100",
                    "arrivalTimestamp": 1706032200,
                    "departure": "2024-01-23T18:51:00+0100",
                    "departureTimestamp": 1706032260,
                    "delay": null,
                    "platform": null,
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": null,
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8573054",
                      "name": "Luzern, Schwanenplatz",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.053251,
                        "y": 8.308893
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "8573055",
                      "name": "Luzern, Luzernerhof",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.054719,
                        "y": 8.312233
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T18:52:00+0100",
                    "arrivalTimestamp": 1706032320,
                    "departure": "2024-01-23T18:52:00+0100",
                    "departureTimestamp": 1706032320,
                    "delay": null,
                    "platform": null,
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": null,
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8573055",
                      "name": "Luzern, Luzernerhof",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.054719,
                        "y": 8.312233
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "8577149",
                      "name": "Luzern, Löwenplatz",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.056629,
                        "y": 8.310659
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T18:53:00+0100",
                    "arrivalTimestamp": 1706032380,
                    "departure": "2024-01-23T18:54:00+0100",
                    "departureTimestamp": 1706032440,
                    "delay": null,
                    "platform": null,
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": null,
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8577149",
                      "name": "Luzern, Löwenplatz",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.056629,
                        "y": 8.310659
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "8589848",
                      "name": "Luzern, Wesemlinrain",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.058816,
                        "y": 8.309417
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T18:54:00+0100",
                    "arrivalTimestamp": 1706032440,
                    "departure": "2024-01-23T18:55:00+0100",
                    "departureTimestamp": 1706032500,
                    "delay": null,
                    "platform": null,
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": null,
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8589848",
                      "name": "Luzern, Wesemlinrain",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.058816,
                        "y": 8.309417
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "8589831",
                      "name": "Luzern, Schlossberg",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.06159,
                        "y": 8.308883
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T18:55:00+0100",
                    "arrivalTimestamp": 1706032500,
                    "departure": "2024-01-23T18:56:00+0100",
                    "departureTimestamp": 1706032560,
                    "delay": null,
                    "platform": null,
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": null,
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8589831",
                      "name": "Luzern, Schlossberg",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.06159,
                        "y": 8.308883
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "8589828",
                      "name": "Luzern, Rosenberg",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.060541,
                        "y": 8.304957
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T18:56:00+0100",
                    "arrivalTimestamp": 1706032560,
                    "departure": null,
                    "departureTimestamp": null,
                    "delay": null,
                    "platform": null,
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": null,
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8589828",
                      "name": "Luzern, Rosenberg",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.060541,
                        "y": 8.304957
                      },
                      "distance": null
                    }
                  }
                ],
                "capacity1st": null,
                "capacity2nd": null
              },
              "walk": null,
              "departure": {
                "station": {
                  "id": "8508450",
                  "name": "Luzern, Bahnhof",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.050749,
                    "y": 8.310247
                  },
                  "distance": null
                },
                "arrival": "2024-01-23T18:46:00+0100",
                "arrivalTimestamp": 1706031960,
                "departure": "2024-01-23T18:48:00+0100",
                "departureTimestamp": 1706032080,
                "delay": null,
                "platform": "R",
                "prognosis": {
                  "platform": null,
                  "arrival": null,
                  "departure": null,
                  "capacity1st": null,
                  "capacity2nd": null
                },
                "realtimeAvailability": null,
                "location": {
                  "id": "8508450",
                  "name": "Luzern, Bahnhof",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.050749,
                    "y": 8.310247
                  },
                  "distance": null
                }
              },
              "arrival": {
                "station": {
                  "id": "8589828",
                  "name": "Luzern, Rosenberg",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.060541,
                    "y": 8.304957
                  },
                  "distance": null
                },
                "arrival": "2024-01-23T18:56:00+0100",
                "arrivalTimestamp": 1706032560,
                "departure": null,
                "departureTimestamp": null,
                "delay": null,
                "platform": null,
                "prognosis": {
                  "platform": null,
                  "arrival": null,
                  "departure": null,
                  "capacity1st": null,
                  "capacity2nd": null
                },
                "realtimeAvailability": null,
                "location": {
                  "id": "8589828",
                  "name": "Luzern, Rosenberg",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.060541,
                    "y": 8.304957
                  },
                  "distance": null
                }
              }
            },
            {
              "journey": null,
              "walk": {
                "duration": 0
              },
              "departure": {
                "station": {
                  "id": "8589828",
                  "name": "Luzern, Rosenberg",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.060541,
                    "y": 8.304957
                  },
                  "distance": null
                },
                "arrival": "2024-01-23T18:56:00+0100",
                "arrivalTimestamp": 1706032560,
                "departure": "2024-01-23T18:56:00+0100",
                "departureTimestamp": 1706032560,
                "delay": null,
                "platform": null,
                "prognosis": {
                  "platform": null,
                  "arrival": null,
                  "departure": null,
                  "capacity1st": null,
                  "capacity2nd": null
                },
                "realtimeAvailability": null,
                "location": {
                  "id": "8589828",
                  "name": "Luzern, Rosenberg",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.060541,
                    "y": 8.304957
                  },
                  "distance": null
                }
              },
              "arrival": {
                "station": {
                  "id": null,
                  "name": "Viva Luzern Rosenberg, Luzern, Rosenbergstr. 2-4",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": null,
                    "y": null
                  },
                  "distance": null
                },
                "arrival": "2024-01-23T19:00:00+0100",
                "arrivalTimestamp": 1706032800,
                "departure": null,
                "departureTimestamp": null,
                "delay": null,
                "platform": null,
                "prognosis": {
                  "platform": null,
                  "arrival": null,
                  "departure": null,
                  "capacity1st": null,
                  "capacity2nd": null
                },
                "realtimeAvailability": null,
                "location": {
                  "name": "Viva Luzern Rosenberg, Luzern, Rosenbergstr. 2-4",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": null,
                    "y": null
                  },
                  "distance": null
                }
              }
            }
          ]
        },
        {
          "from": {
            "station": {
              "id": "8505300",
              "name": "Lugano",
              "score": null,
              "coordinate": {
                "type": "WGS84",
                "x": 46.005494,
                "y": 8.946993
              },
              "distance": null
            },
            "arrival": null,
            "arrivalTimestamp": null,
            "departure": "2024-01-23T16:30:00+0100",
            "departureTimestamp": 1706023800,
            "delay": 1,
            "platform": "3",
            "prognosis": {
              "platform": null,
              "arrival": null,
              "departure": "2024-01-23T16:31:00+0100",
              "capacity1st": null,
              "capacity2nd": null
            },
            "realtimeAvailability": null,
            "location": {
              "id": "8505300",
              "name": "Lugano",
              "score": null,
              "coordinate": {
                "type": "WGS84",
                "x": 46.005494,
                "y": 8.946993
              },
              "distance": null
            }
          },
          "to": {
            "station": {
              "id": null,
              "name": "Viva Luzern Rosenberg, Luzern, Rosenbergstr. 2-4",
              "score": null,
              "coordinate": {
                "type": "WGS84",
                "x": null,
                "y": null
              },
              "distance": null
            },
            "arrival": "2024-01-23T19:44:00+0100",
            "arrivalTimestamp": 1706035440,
            "departure": null,
            "departureTimestamp": null,
            "delay": null,
            "platform": null,
            "prognosis": {
              "platform": null,
              "arrival": null,
              "departure": null,
              "capacity1st": null,
              "capacity2nd": null
            },
            "realtimeAvailability": null,
            "location": {
              "name": "Viva Luzern Rosenberg, Luzern, Rosenbergstr. 2-4",
              "score": null,
              "coordinate": {
                "type": "WGS84",
                "x": null,
                "y": null
              },
              "distance": null
            }
          },
          "duration": "00d03:13:00",
          "transfers": 2,
          "service": null,
          "products": [
            "EC",
            "IR VAE",
            "19"
          ],
          "capacity1st": null,
          "capacity2nd": null,
          "sections": [
            {
              "journey": {
                "name": "000320",
                "category": "EC",
                "subcategory": null,
                "categoryCode": null,
                "number": "000320",
                "operator": "SBB",
                "to": "Zürich HB",
                "passList": [
                  {
                    "station": {
                      "id": "8505300",
                      "name": "Lugano",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 46.005494,
                        "y": 8.946993
                      },
                      "distance": null
                    },
                    "arrival": null,
                    "arrivalTimestamp": null,
                    "departure": "2024-01-23T16:30:00+0100",
                    "departureTimestamp": 1706023800,
                    "delay": 1,
                    "platform": "3",
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": "2024-01-23T16:31:00+0100",
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8505300",
                      "name": "Lugano",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 46.005494,
                        "y": 8.946993
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "8505213",
                      "name": "Bellinzona",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 46.195425,
                        "y": 9.029522
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T16:46:00+0100",
                    "arrivalTimestamp": 1706024760,
                    "departure": "2024-01-23T16:47:00+0100",
                    "departureTimestamp": 1706024820,
                    "delay": 1,
                    "platform": null,
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": "2024-01-23T16:48:00+0100",
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8505213",
                      "name": "Bellinzona",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 46.195425,
                        "y": 9.029522
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "0000140",
                      "name": "Gotthard-Panoramastrecke",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 46.604323,
                        "y": 8.594655
                      },
                      "distance": null
                    },
                    "arrival": null,
                    "arrivalTimestamp": null,
                    "departure": null,
                    "departureTimestamp": null,
                    "delay": null,
                    "platform": null,
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": "2024-01-23T15:43:52+0100",
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "0000140",
                      "name": "Gotthard-Panoramastrecke",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 46.604323,
                        "y": 8.594655
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "8505004",
                      "name": "Arth-Goldau",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.049035,
                        "y": 8.549449
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T18:42:00+0100",
                    "arrivalTimestamp": 1706031720,
                    "departure": null,
                    "departureTimestamp": null,
                    "delay": 0,
                    "platform": "3",
                    "prognosis": {
                      "platform": null,
                      "arrival": "2024-01-23T18:42:00+0100",
                      "departure": null,
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8505004",
                      "name": "Arth-Goldau",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.049035,
                        "y": 8.549449
                      },
                      "distance": null
                    }
                  }
                ],
                "capacity1st": null,
                "capacity2nd": null
              },
              "walk": null,
              "departure": {
                "station": {
                  "id": "8505300",
                  "name": "Lugano",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 46.005494,
                    "y": 8.946993
                  },
                  "distance": null
                },
                "arrival": null,
                "arrivalTimestamp": null,
                "departure": "2024-01-23T16:30:00+0100",
                "departureTimestamp": 1706023800,
                "delay": 1,
                "platform": "3",
                "prognosis": {
                  "platform": null,
                  "arrival": null,
                  "departure": "2024-01-23T16:31:00+0100",
                  "capacity1st": null,
                  "capacity2nd": null
                },
                "realtimeAvailability": null,
                "location": {
                  "id": "8505300",
                  "name": "Lugano",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 46.005494,
                    "y": 8.946993
                  },
                  "distance": null
                }
              },
              "arrival": {
                "station": {
                  "id": "8505004",
                  "name": "Arth-Goldau",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.049035,
                    "y": 8.549449
                  },
                  "distance": null
                },
                "arrival": "2024-01-23T18:42:00+0100",
                "arrivalTimestamp": 1706031720,
                "departure": null,
                "departureTimestamp": null,
                "delay": 0,
                "platform": "3",
                "prognosis": {
                  "platform": null,
                  "arrival": "2024-01-23T18:42:00+0100",
                  "departure": null,
                  "capacity1st": null,
                  "capacity2nd": null
                },
                "realtimeAvailability": null,
                "location": {
                  "id": "8505004",
                  "name": "Arth-Goldau",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.049035,
                    "y": 8.549449
                  },
                  "distance": null
                }
              }
            },
            {
              "journey": {
                "name": "002030",
                "category": "IR",
                "subcategory": null,
                "categoryCode": null,
                "number": "VAE",
                "operator": "SOB-sob",
                "to": "Luzern",
                "passList": [
                  {
                    "station": {
                      "id": "8505004",
                      "name": "Arth-Goldau",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.049035,
                        "y": 8.549449
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T18:42:00+0100",
                    "arrivalTimestamp": 1706031720,
                    "departure": "2024-01-23T18:49:00+0100",
                    "departureTimestamp": 1706032140,
                    "delay": 0,
                    "platform": "6",
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": "2024-01-23T18:49:00+0100",
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8505004",
                      "name": "Arth-Goldau",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.049035,
                        "y": 8.549449
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "8505002",
                      "name": "Küssnacht am Rigi",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.083589,
                        "y": 8.433521
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T19:00:00+0100",
                    "arrivalTimestamp": 1706032800,
                    "departure": "2024-01-23T19:01:00+0100",
                    "departureTimestamp": 1706032860,
                    "delay": 0,
                    "platform": null,
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": "2024-01-23T19:01:00+0100",
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8505002",
                      "name": "Küssnacht am Rigi",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.083589,
                        "y": 8.433521
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "8505018",
                      "name": "Meggen Zentrum",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.045189,
                        "y": 8.374391
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T19:07:00+0100",
                    "arrivalTimestamp": 1706033220,
                    "departure": "2024-01-23T19:07:00+0100",
                    "departureTimestamp": 1706033220,
                    "delay": 1,
                    "platform": null,
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": "2024-01-23T19:08:00+0100",
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8505018",
                      "name": "Meggen Zentrum",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.045189,
                        "y": 8.374391
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "8517336",
                      "name": "Luzern Verkehrshaus",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.053923,
                        "y": 8.337294
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T19:11:00+0100",
                    "arrivalTimestamp": 1706033460,
                    "departure": "2024-01-23T19:13:00+0100",
                    "departureTimestamp": 1706033580,
                    "delay": 0,
                    "platform": null,
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": "2024-01-23T19:13:00+0100",
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8517336",
                      "name": "Luzern Verkehrshaus",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.053923,
                        "y": 8.337294
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "8505000",
                      "name": "Luzern",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.050174,
                        "y": 8.310185
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T19:21:00+0100",
                    "arrivalTimestamp": 1706034060,
                    "departure": null,
                    "departureTimestamp": null,
                    "delay": 0,
                    "platform": "3",
                    "prognosis": {
                      "platform": null,
                      "arrival": "2024-01-23T19:21:00+0100",
                      "departure": null,
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8505000",
                      "name": "Luzern",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.050174,
                        "y": 8.310185
                      },
                      "distance": null
                    }
                  }
                ],
                "capacity1st": null,
                "capacity2nd": null
              },
              "walk": null,
              "departure": {
                "station": {
                  "id": "8505004",
                  "name": "Arth-Goldau",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.049035,
                    "y": 8.549449
                  },
                  "distance": null
                },
                "arrival": "2024-01-23T18:42:00+0100",
                "arrivalTimestamp": 1706031720,
                "departure": "2024-01-23T18:49:00+0100",
                "departureTimestamp": 1706032140,
                "delay": 0,
                "platform": "6",
                "prognosis": {
                  "platform": null,
                  "arrival": null,
                  "departure": "2024-01-23T18:49:00+0100",
                  "capacity1st": null,
                  "capacity2nd": null
                },
                "realtimeAvailability": null,
                "location": {
                  "id": "8505004",
                  "name": "Arth-Goldau",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.049035,
                    "y": 8.549449
                  },
                  "distance": null
                }
              },
              "arrival": {
                "station": {
                  "id": "8505000",
                  "name": "Luzern",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.050174,
                    "y": 8.310185
                  },
                  "distance": null
                },
                "arrival": "2024-01-23T19:21:00+0100",
                "arrivalTimestamp": 1706034060,
                "departure": null,
                "departureTimestamp": null,
                "delay": 0,
                "platform": "3",
                "prognosis": {
                  "platform": null,
                  "arrival": "2024-01-23T19:21:00+0100",
                  "departure": null,
                  "capacity1st": null,
                  "capacity2nd": null
                },
                "realtimeAvailability": null,
                "location": {
                  "id": "8505000",
                  "name": "Luzern",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.050174,
                    "y": 8.310185
                  },
                  "distance": null
                }
              }
            },
            {
              "journey": null,
              "walk": {
                "duration": 300
              },
              "departure": {
                "station": {
                  "id": "8505000",
                  "name": "Luzern",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.050174,
                    "y": 8.310185
                  },
                  "distance": null
                },
                "arrival": "2024-01-23T19:21:00+0100",
                "arrivalTimestamp": 1706034060,
                "departure": "2024-01-23T19:21:00+0100",
                "departureTimestamp": 1706034060,
                "delay": null,
                "platform": null,
                "prognosis": {
                  "platform": null,
                  "arrival": null,
                  "departure": null,
                  "capacity1st": null,
                  "capacity2nd": null
                },
                "realtimeAvailability": null,
                "location": {
                  "id": "8505000",
                  "name": "Luzern",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.050174,
                    "y": 8.310185
                  },
                  "distance": null
                }
              },
              "arrival": {
                "station": {
                  "id": "8508450",
                  "name": "Luzern, Bahnhof",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.050749,
                    "y": 8.310247
                  },
                  "distance": null
                },
                "arrival": "2024-01-23T19:26:00+0100",
                "arrivalTimestamp": 1706034360,
                "departure": null,
                "departureTimestamp": null,
                "delay": null,
                "platform": null,
                "prognosis": {
                  "platform": null,
                  "arrival": null,
                  "departure": null,
                  "capacity1st": null,
                  "capacity2nd": null
                },
                "realtimeAvailability": null,
                "location": {
                  "id": "8508450",
                  "name": "Luzern, Bahnhof",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.050749,
                    "y": 8.310247
                  },
                  "distance": null
                }
              }
            },
            {
              "journey": {
                "name": "019502",
                "category": "B",
                "subcategory": null,
                "categoryCode": null,
                "number": "19",
                "operator": "VBL",
                "to": "Luzern, Friedental",
                "passList": [
                  {
                    "station": {
                      "id": "8508450",
                      "name": "Luzern, Bahnhof",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.050749,
                        "y": 8.310247
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T19:26:00+0100",
                    "arrivalTimestamp": 1706034360,
                    "departure": "2024-01-23T19:33:00+0100",
                    "departureTimestamp": 1706034780,
                    "delay": null,
                    "platform": "R",
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": null,
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8508450",
                      "name": "Luzern, Bahnhof",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.050749,
                        "y": 8.310247
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "8573054",
                      "name": "Luzern, Schwanenplatz",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.053251,
                        "y": 8.308893
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T19:34:00+0100",
                    "arrivalTimestamp": 1706034840,
                    "departure": "2024-01-23T19:35:00+0100",
                    "departureTimestamp": 1706034900,
                    "delay": null,
                    "platform": null,
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": null,
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8573054",
                      "name": "Luzern, Schwanenplatz",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.053251,
                        "y": 8.308893
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "8573055",
                      "name": "Luzern, Luzernerhof",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.054719,
                        "y": 8.312233
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T19:36:00+0100",
                    "arrivalTimestamp": 1706034960,
                    "departure": "2024-01-23T19:36:00+0100",
                    "departureTimestamp": 1706034960,
                    "delay": null,
                    "platform": null,
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": null,
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8573055",
                      "name": "Luzern, Luzernerhof",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.054719,
                        "y": 8.312233
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "8577149",
                      "name": "Luzern, Löwenplatz",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.056629,
                        "y": 8.310659
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T19:37:00+0100",
                    "arrivalTimestamp": 1706035020,
                    "departure": "2024-01-23T19:37:00+0100",
                    "departureTimestamp": 1706035020,
                    "delay": null,
                    "platform": null,
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": null,
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8577149",
                      "name": "Luzern, Löwenplatz",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.056629,
                        "y": 8.310659
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "8589848",
                      "name": "Luzern, Wesemlinrain",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.058816,
                        "y": 8.309417
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T19:38:00+0100",
                    "arrivalTimestamp": 1706035080,
                    "departure": "2024-01-23T19:38:00+0100",
                    "departureTimestamp": 1706035080,
                    "delay": null,
                    "platform": null,
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": null,
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8589848",
                      "name": "Luzern, Wesemlinrain",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.058816,
                        "y": 8.309417
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "8589831",
                      "name": "Luzern, Schlossberg",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.06159,
                        "y": 8.308883
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T19:39:00+0100",
                    "arrivalTimestamp": 1706035140,
                    "departure": "2024-01-23T19:39:00+0100",
                    "departureTimestamp": 1706035140,
                    "delay": null,
                    "platform": null,
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": null,
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8589831",
                      "name": "Luzern, Schlossberg",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.06159,
                        "y": 8.308883
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "8589828",
                      "name": "Luzern, Rosenberg",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.060541,
                        "y": 8.304957
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T19:40:00+0100",
                    "arrivalTimestamp": 1706035200,
                    "departure": null,
                    "departureTimestamp": null,
                    "delay": null,
                    "platform": null,
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": null,
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8589828",
                      "name": "Luzern, Rosenberg",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.060541,
                        "y": 8.304957
                      },
                      "distance": null
                    }
                  }
                ],
                "capacity1st": null,
                "capacity2nd": null
              },
              "walk": null,
              "departure": {
                "station": {
                  "id": "8508450",
                  "name": "Luzern, Bahnhof",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.050749,
                    "y": 8.310247
                  },
                  "distance": null
                },
                "arrival": "2024-01-23T19:26:00+0100",
                "arrivalTimestamp": 1706034360,
                "departure": "2024-01-23T19:33:00+0100",
                "departureTimestamp": 1706034780,
                "delay": null,
                "platform": "R",
                "prognosis": {
                  "platform": null,
                  "arrival": null,
                  "departure": null,
                  "capacity1st": null,
                  "capacity2nd": null
                },
                "realtimeAvailability": null,
                "location": {
                  "id": "8508450",
                  "name": "Luzern, Bahnhof",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.050749,
                    "y": 8.310247
                  },
                  "distance": null
                }
              },
              "arrival": {
                "station": {
                  "id": "8589828",
                  "name": "Luzern, Rosenberg",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.060541,
                    "y": 8.304957
                  },
                  "distance": null
                },
                "arrival": "2024-01-23T19:40:00+0100",
                "arrivalTimestamp": 1706035200,
                "departure": null,
                "departureTimestamp": null,
                "delay": null,
                "platform": null,
                "prognosis": {
                  "platform": null,
                  "arrival": null,
                  "departure": null,
                  "capacity1st": null,
                  "capacity2nd": null
                },
                "realtimeAvailability": null,
                "location": {
                  "id": "8589828",
                  "name": "Luzern, Rosenberg",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.060541,
                    "y": 8.304957
                  },
                  "distance": null
                }
              }
            },
            {
              "journey": null,
              "walk": {
                "duration": 0
              },
              "departure": {
                "station": {
                  "id": "8589828",
                  "name": "Luzern, Rosenberg",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.060541,
                    "y": 8.304957
                  },
                  "distance": null
                },
                "arrival": "2024-01-23T19:40:00+0100",
                "arrivalTimestamp": 1706035200,
                "departure": "2024-01-23T19:40:00+0100",
                "departureTimestamp": 1706035200,
                "delay": null,
                "platform": null,
                "prognosis": {
                  "platform": null,
                  "arrival": null,
                  "departure": null,
                  "capacity1st": null,
                  "capacity2nd": null
                },
                "realtimeAvailability": null,
                "location": {
                  "id": "8589828",
                  "name": "Luzern, Rosenberg",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.060541,
                    "y": 8.304957
                  },
                  "distance": null
                }
              },
              "arrival": {
                "station": {
                  "id": null,
                  "name": "Viva Luzern Rosenberg, Luzern, Rosenbergstr. 2-4",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": null,
                    "y": null
                  },
                  "distance": null
                },
                "arrival": "2024-01-23T19:44:00+0100",
                "arrivalTimestamp": 1706035440,
                "departure": null,
                "departureTimestamp": null,
                "delay": null,
                "platform": null,
                "prognosis": {
                  "platform": null,
                  "arrival": null,
                  "departure": null,
                  "capacity1st": null,
                  "capacity2nd": null
                },
                "realtimeAvailability": null,
                "location": {
                  "name": "Viva Luzern Rosenberg, Luzern, Rosenbergstr. 2-4",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": null,
                    "y": null
                  },
                  "distance": null
                }
              }
            }
          ]
        },
        {
          "from": {
            "station": {
              "id": "8505300",
              "name": "Lugano",
              "score": null,
              "coordinate": {
                "type": "WGS84",
                "x": 46.005494,
                "y": 8.946993
              },
              "distance": null
            },
            "arrival": null,
            "arrivalTimestamp": null,
            "departure": "2024-01-23T17:02:00+0100",
            "departureTimestamp": 1706025720,
            "delay": 0,
            "platform": "3",
            "prognosis": {
              "platform": null,
              "arrival": null,
              "departure": "2024-01-23T17:02:00+0100",
              "capacity1st": null,
              "capacity2nd": null
            },
            "realtimeAvailability": null,
            "location": {
              "id": "8505300",
              "name": "Lugano",
              "score": null,
              "coordinate": {
                "type": "WGS84",
                "x": 46.005494,
                "y": 8.946993
              },
              "distance": null
            }
          },
          "to": {
            "station": {
              "id": null,
              "name": "Viva Luzern Rosenberg, Luzern, Rosenbergstr. 2-4",
              "score": null,
              "coordinate": {
                "type": "WGS84",
                "x": null,
                "y": null
              },
              "distance": null
            },
            "arrival": "2024-01-23T19:58:00+0100",
            "arrivalTimestamp": 1706036280,
            "departure": null,
            "departureTimestamp": null,
            "delay": null,
            "platform": null,
            "prognosis": {
              "platform": null,
              "arrival": null,
              "departure": null,
              "capacity1st": null,
              "capacity2nd": null
            },
            "realtimeAvailability": null,
            "location": {
              "name": "Viva Luzern Rosenberg, Luzern, Rosenbergstr. 2-4",
              "score": null,
              "coordinate": {
                "type": "WGS84",
                "x": null,
                "y": null
              },
              "distance": null
            }
          },
          "duration": "00d02:56:00",
          "transfers": 1,
          "service": null,
          "products": [
            "IC 21",
            "19"
          ],
          "capacity1st": null,
          "capacity2nd": null,
          "sections": [
            {
              "journey": {
                "name": "000688",
                "category": "IC",
                "subcategory": null,
                "categoryCode": null,
                "number": "21",
                "operator": "SBB",
                "to": "Basel SBB",
                "passList": [
                  {
                    "station": {
                      "id": "8505300",
                      "name": "Lugano",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 46.005494,
                        "y": 8.946993
                      },
                      "distance": null
                    },
                    "arrival": null,
                    "arrivalTimestamp": null,
                    "departure": "2024-01-23T17:02:00+0100",
                    "departureTimestamp": 1706025720,
                    "delay": 0,
                    "platform": "3",
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": "2024-01-23T17:02:00+0100",
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8505300",
                      "name": "Lugano",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 46.005494,
                        "y": 8.946993
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "8505213",
                      "name": "Bellinzona",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 46.195425,
                        "y": 9.029522
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T17:16:00+0100",
                    "arrivalTimestamp": 1706026560,
                    "departure": "2024-01-23T17:17:00+0100",
                    "departureTimestamp": 1706026620,
                    "delay": 1,
                    "platform": null,
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": "2024-01-23T17:18:00+0100",
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8505213",
                      "name": "Bellinzona",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 46.195425,
                        "y": 9.029522
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "0000140",
                      "name": "Gotthard-Panoramastrecke",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 46.604323,
                        "y": 8.594655
                      },
                      "distance": null
                    },
                    "arrival": null,
                    "arrivalTimestamp": null,
                    "departure": null,
                    "departureTimestamp": null,
                    "delay": null,
                    "platform": null,
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": "2024-01-23T15:43:52+0100",
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "0000140",
                      "name": "Gotthard-Panoramastrecke",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 46.604323,
                        "y": 8.594655
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "8505113",
                      "name": "Altdorf UR",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 46.875736,
                        "y": 8.631579
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T18:50:00+0100",
                    "arrivalTimestamp": 1706032200,
                    "departure": "2024-01-23T18:50:00+0100",
                    "departureTimestamp": 1706032200,
                    "delay": 2,
                    "platform": null,
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": "2024-01-23T18:52:00+0100",
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8505113",
                      "name": "Altdorf UR",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 46.875736,
                        "y": 8.631579
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "8505004",
                      "name": "Arth-Goldau",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.049035,
                        "y": 8.549449
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T19:11:00+0100",
                    "arrivalTimestamp": 1706033460,
                    "departure": "2024-01-23T19:15:00+0100",
                    "departureTimestamp": 1706033700,
                    "delay": 0,
                    "platform": null,
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": "2024-01-23T19:15:00+0100",
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8505004",
                      "name": "Arth-Goldau",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.049035,
                        "y": 8.549449
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "0000137",
                      "name": "Rotsee",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.074525,
                        "y": 8.320799
                      },
                      "distance": null
                    },
                    "arrival": null,
                    "arrivalTimestamp": null,
                    "departure": null,
                    "departureTimestamp": null,
                    "delay": null,
                    "platform": null,
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": "2024-01-23T15:42:52+0100",
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "0000137",
                      "name": "Rotsee",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.074525,
                        "y": 8.320799
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "8505000",
                      "name": "Luzern",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.050174,
                        "y": 8.310185
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T19:41:00+0100",
                    "arrivalTimestamp": 1706035260,
                    "departure": null,
                    "departureTimestamp": null,
                    "delay": 0,
                    "platform": "7",
                    "prognosis": {
                      "platform": null,
                      "arrival": "2024-01-23T19:41:00+0100",
                      "departure": null,
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8505000",
                      "name": "Luzern",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.050174,
                        "y": 8.310185
                      },
                      "distance": null
                    }
                  }
                ],
                "capacity1st": null,
                "capacity2nd": null
              },
              "walk": null,
              "departure": {
                "station": {
                  "id": "8505300",
                  "name": "Lugano",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 46.005494,
                    "y": 8.946993
                  },
                  "distance": null
                },
                "arrival": null,
                "arrivalTimestamp": null,
                "departure": "2024-01-23T17:02:00+0100",
                "departureTimestamp": 1706025720,
                "delay": 0,
                "platform": "3",
                "prognosis": {
                  "platform": null,
                  "arrival": null,
                  "departure": "2024-01-23T17:02:00+0100",
                  "capacity1st": null,
                  "capacity2nd": null
                },
                "realtimeAvailability": null,
                "location": {
                  "id": "8505300",
                  "name": "Lugano",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 46.005494,
                    "y": 8.946993
                  },
                  "distance": null
                }
              },
              "arrival": {
                "station": {
                  "id": "8505000",
                  "name": "Luzern",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.050174,
                    "y": 8.310185
                  },
                  "distance": null
                },
                "arrival": "2024-01-23T19:41:00+0100",
                "arrivalTimestamp": 1706035260,
                "departure": null,
                "departureTimestamp": null,
                "delay": 0,
                "platform": "7",
                "prognosis": {
                  "platform": null,
                  "arrival": "2024-01-23T19:41:00+0100",
                  "departure": null,
                  "capacity1st": null,
                  "capacity2nd": null
                },
                "realtimeAvailability": null,
                "location": {
                  "id": "8505000",
                  "name": "Luzern",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.050174,
                    "y": 8.310185
                  },
                  "distance": null
                }
              }
            },
            {
              "journey": null,
              "walk": {
                "duration": 300
              },
              "departure": {
                "station": {
                  "id": "8505000",
                  "name": "Luzern",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.050174,
                    "y": 8.310185
                  },
                  "distance": null
                },
                "arrival": "2024-01-23T19:41:00+0100",
                "arrivalTimestamp": 1706035260,
                "departure": "2024-01-23T19:41:00+0100",
                "departureTimestamp": 1706035260,
                "delay": null,
                "platform": null,
                "prognosis": {
                  "platform": null,
                  "arrival": null,
                  "departure": null,
                  "capacity1st": null,
                  "capacity2nd": null
                },
                "realtimeAvailability": null,
                "location": {
                  "id": "8505000",
                  "name": "Luzern",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.050174,
                    "y": 8.310185
                  },
                  "distance": null
                }
              },
              "arrival": {
                "station": {
                  "id": "8508450",
                  "name": "Luzern, Bahnhof",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.050749,
                    "y": 8.310247
                  },
                  "distance": null
                },
                "arrival": "2024-01-23T19:46:00+0100",
                "arrivalTimestamp": 1706035560,
                "departure": null,
                "departureTimestamp": null,
                "delay": null,
                "platform": null,
                "prognosis": {
                  "platform": null,
                  "arrival": null,
                  "departure": null,
                  "capacity1st": null,
                  "capacity2nd": null
                },
                "realtimeAvailability": null,
                "location": {
                  "id": "8508450",
                  "name": "Luzern, Bahnhof",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.050749,
                    "y": 8.310247
                  },
                  "distance": null
                }
              }
            },
            {
              "journey": {
                "name": "019514",
                "category": "B",
                "subcategory": null,
                "categoryCode": null,
                "number": "19",
                "operator": "VBL",
                "to": "Luzern, Friedental",
                "passList": [
                  {
                    "station": {
                      "id": "8508450",
                      "name": "Luzern, Bahnhof",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.050749,
                        "y": 8.310247
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T19:46:00+0100",
                    "arrivalTimestamp": 1706035560,
                    "departure": "2024-01-23T19:47:00+0100",
                    "departureTimestamp": 1706035620,
                    "delay": null,
                    "platform": "R",
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": null,
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8508450",
                      "name": "Luzern, Bahnhof",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.050749,
                        "y": 8.310247
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "8573054",
                      "name": "Luzern, Schwanenplatz",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.053251,
                        "y": 8.308893
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T19:48:00+0100",
                    "arrivalTimestamp": 1706035680,
                    "departure": "2024-01-23T19:49:00+0100",
                    "departureTimestamp": 1706035740,
                    "delay": null,
                    "platform": null,
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": null,
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8573054",
                      "name": "Luzern, Schwanenplatz",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.053251,
                        "y": 8.308893
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "8573055",
                      "name": "Luzern, Luzernerhof",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.054719,
                        "y": 8.312233
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T19:50:00+0100",
                    "arrivalTimestamp": 1706035800,
                    "departure": "2024-01-23T19:50:00+0100",
                    "departureTimestamp": 1706035800,
                    "delay": null,
                    "platform": null,
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": null,
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8573055",
                      "name": "Luzern, Luzernerhof",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.054719,
                        "y": 8.312233
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "8577149",
                      "name": "Luzern, Löwenplatz",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.056629,
                        "y": 8.310659
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T19:51:00+0100",
                    "arrivalTimestamp": 1706035860,
                    "departure": "2024-01-23T19:51:00+0100",
                    "departureTimestamp": 1706035860,
                    "delay": null,
                    "platform": null,
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": null,
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8577149",
                      "name": "Luzern, Löwenplatz",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.056629,
                        "y": 8.310659
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "8589848",
                      "name": "Luzern, Wesemlinrain",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.058816,
                        "y": 8.309417
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T19:52:00+0100",
                    "arrivalTimestamp": 1706035920,
                    "departure": "2024-01-23T19:52:00+0100",
                    "departureTimestamp": 1706035920,
                    "delay": null,
                    "platform": null,
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": null,
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8589848",
                      "name": "Luzern, Wesemlinrain",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.058816,
                        "y": 8.309417
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "8589831",
                      "name": "Luzern, Schlossberg",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.06159,
                        "y": 8.308883
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T19:53:00+0100",
                    "arrivalTimestamp": 1706035980,
                    "departure": "2024-01-23T19:53:00+0100",
                    "departureTimestamp": 1706035980,
                    "delay": null,
                    "platform": null,
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": null,
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8589831",
                      "name": "Luzern, Schlossberg",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.06159,
                        "y": 8.308883
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "8589828",
                      "name": "Luzern, Rosenberg",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.060541,
                        "y": 8.304957
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T19:54:00+0100",
                    "arrivalTimestamp": 1706036040,
                    "departure": null,
                    "departureTimestamp": null,
                    "delay": null,
                    "platform": null,
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": null,
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8589828",
                      "name": "Luzern, Rosenberg",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.060541,
                        "y": 8.304957
                      },
                      "distance": null
                    }
                  }
                ],
                "capacity1st": null,
                "capacity2nd": null
              },
              "walk": null,
              "departure": {
                "station": {
                  "id": "8508450",
                  "name": "Luzern, Bahnhof",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.050749,
                    "y": 8.310247
                  },
                  "distance": null
                },
                "arrival": "2024-01-23T19:46:00+0100",
                "arrivalTimestamp": 1706035560,
                "departure": "2024-01-23T19:47:00+0100",
                "departureTimestamp": 1706035620,
                "delay": null,
                "platform": "R",
                "prognosis": {
                  "platform": null,
                  "arrival": null,
                  "departure": null,
                  "capacity1st": null,
                  "capacity2nd": null
                },
                "realtimeAvailability": null,
                "location": {
                  "id": "8508450",
                  "name": "Luzern, Bahnhof",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.050749,
                    "y": 8.310247
                  },
                  "distance": null
                }
              },
              "arrival": {
                "station": {
                  "id": "8589828",
                  "name": "Luzern, Rosenberg",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.060541,
                    "y": 8.304957
                  },
                  "distance": null
                },
                "arrival": "2024-01-23T19:54:00+0100",
                "arrivalTimestamp": 1706036040,
                "departure": null,
                "departureTimestamp": null,
                "delay": null,
                "platform": null,
                "prognosis": {
                  "platform": null,
                  "arrival": null,
                  "departure": null,
                  "capacity1st": null,
                  "capacity2nd": null
                },
                "realtimeAvailability": null,
                "location": {
                  "id": "8589828",
                  "name": "Luzern, Rosenberg",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.060541,
                    "y": 8.304957
                  },
                  "distance": null
                }
              }
            },
            {
              "journey": null,
              "walk": {
                "duration": 0
              },
              "departure": {
                "station": {
                  "id": "8589828",
                  "name": "Luzern, Rosenberg",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.060541,
                    "y": 8.304957
                  },
                  "distance": null
                },
                "arrival": "2024-01-23T19:54:00+0100",
                "arrivalTimestamp": 1706036040,
                "departure": "2024-01-23T19:54:00+0100",
                "departureTimestamp": 1706036040,
                "delay": null,
                "platform": null,
                "prognosis": {
                  "platform": null,
                  "arrival": null,
                  "departure": null,
                  "capacity1st": null,
                  "capacity2nd": null
                },
                "realtimeAvailability": null,
                "location": {
                  "id": "8589828",
                  "name": "Luzern, Rosenberg",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.060541,
                    "y": 8.304957
                  },
                  "distance": null
                }
              },
              "arrival": {
                "station": {
                  "id": null,
                  "name": "Viva Luzern Rosenberg, Luzern, Rosenbergstr. 2-4",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": null,
                    "y": null
                  },
                  "distance": null
                },
                "arrival": "2024-01-23T19:58:00+0100",
                "arrivalTimestamp": 1706036280,
                "departure": null,
                "departureTimestamp": null,
                "delay": null,
                "platform": null,
                "prognosis": {
                  "platform": null,
                  "arrival": null,
                  "departure": null,
                  "capacity1st": null,
                  "capacity2nd": null
                },
                "realtimeAvailability": null,
                "location": {
                  "name": "Viva Luzern Rosenberg, Luzern, Rosenbergstr. 2-4",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": null,
                    "y": null
                  },
                  "distance": null
                }
              }
            }
          ]
        },
        {
          "from": {
            "station": {
              "id": "8505300",
              "name": "Lugano",
              "score": null,
              "coordinate": {
                "type": "WGS84",
                "x": 46.005494,
                "y": 8.946993
              },
              "distance": null
            },
            "arrival": null,
            "arrivalTimestamp": null,
            "departure": "2024-01-23T17:30:00+0100",
            "departureTimestamp": 1706027400,
            "delay": 2,
            "platform": "3",
            "prognosis": {
              "platform": null,
              "arrival": null,
              "departure": "2024-01-23T17:32:00+0100",
              "capacity1st": null,
              "capacity2nd": null
            },
            "realtimeAvailability": null,
            "location": {
              "id": "8505300",
              "name": "Lugano",
              "score": null,
              "coordinate": {
                "type": "WGS84",
                "x": 46.005494,
                "y": 8.946993
              },
              "distance": null
            }
          },
          "to": {
            "station": {
              "id": null,
              "name": "Viva Luzern Rosenberg, Luzern, Rosenbergstr. 2-4",
              "score": null,
              "coordinate": {
                "type": "WGS84",
                "x": null,
                "y": null
              },
              "distance": null
            },
            "arrival": "2024-01-23T20:35:00+0100",
            "arrivalTimestamp": 1706038500,
            "departure": null,
            "departureTimestamp": null,
            "delay": null,
            "platform": null,
            "prognosis": {
              "platform": null,
              "arrival": null,
              "departure": null,
              "capacity1st": null,
              "capacity2nd": null
            },
            "realtimeAvailability": null,
            "location": {
              "name": "Viva Luzern Rosenberg, Luzern, Rosenbergstr. 2-4",
              "score": null,
              "coordinate": {
                "type": "WGS84",
                "x": null,
                "y": null
              },
              "distance": null
            }
          },
          "duration": "00d03:03:00",
          "transfers": 3,
          "service": null,
          "products": [
            "EC",
            "IR VAE",
            "6",
            "19"
          ],
          "capacity1st": null,
          "capacity2nd": null,
          "sections": [
            {
              "journey": {
                "name": "000328",
                "category": "EC",
                "subcategory": null,
                "categoryCode": null,
                "number": "000328",
                "operator": "SBB",
                "to": "Zürich HB",
                "passList": [
                  {
                    "station": {
                      "id": "8505300",
                      "name": "Lugano",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 46.005494,
                        "y": 8.946993
                      },
                      "distance": null
                    },
                    "arrival": null,
                    "arrivalTimestamp": null,
                    "departure": "2024-01-23T17:30:00+0100",
                    "departureTimestamp": 1706027400,
                    "delay": 2,
                    "platform": "3",
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": "2024-01-23T17:32:00+0100",
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8505300",
                      "name": "Lugano",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 46.005494,
                        "y": 8.946993
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "8505213",
                      "name": "Bellinzona",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 46.195425,
                        "y": 9.029522
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T17:46:00+0100",
                    "arrivalTimestamp": 1706028360,
                    "departure": "2024-01-23T17:47:00+0100",
                    "departureTimestamp": 1706028420,
                    "delay": 0,
                    "platform": null,
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": "2024-01-23T17:47:00+0100",
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8505213",
                      "name": "Bellinzona",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 46.195425,
                        "y": 9.029522
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "0000140",
                      "name": "Gotthard-Panoramastrecke",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 46.604323,
                        "y": 8.594655
                      },
                      "distance": null
                    },
                    "arrival": null,
                    "arrivalTimestamp": null,
                    "departure": null,
                    "departureTimestamp": null,
                    "delay": null,
                    "platform": null,
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": "2024-01-23T15:42:52+0100",
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "0000140",
                      "name": "Gotthard-Panoramastrecke",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 46.604323,
                        "y": 8.594655
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "8505004",
                      "name": "Arth-Goldau",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.049035,
                        "y": 8.549449
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T19:42:00+0100",
                    "arrivalTimestamp": 1706035320,
                    "departure": null,
                    "departureTimestamp": null,
                    "delay": 0,
                    "platform": "3",
                    "prognosis": {
                      "platform": null,
                      "arrival": "2024-01-23T19:42:00+0100",
                      "departure": null,
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8505004",
                      "name": "Arth-Goldau",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.049035,
                        "y": 8.549449
                      },
                      "distance": null
                    }
                  }
                ],
                "capacity1st": null,
                "capacity2nd": null
              },
              "walk": null,
              "departure": {
                "station": {
                  "id": "8505300",
                  "name": "Lugano",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 46.005494,
                    "y": 8.946993
                  },
                  "distance": null
                },
                "arrival": null,
                "arrivalTimestamp": null,
                "departure": "2024-01-23T17:30:00+0100",
                "departureTimestamp": 1706027400,
                "delay": 2,
                "platform": "3",
                "prognosis": {
                  "platform": null,
                  "arrival": null,
                  "departure": "2024-01-23T17:32:00+0100",
                  "capacity1st": null,
                  "capacity2nd": null
                },
                "realtimeAvailability": null,
                "location": {
                  "id": "8505300",
                  "name": "Lugano",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 46.005494,
                    "y": 8.946993
                  },
                  "distance": null
                }
              },
              "arrival": {
                "station": {
                  "id": "8505004",
                  "name": "Arth-Goldau",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.049035,
                    "y": 8.549449
                  },
                  "distance": null
                },
                "arrival": "2024-01-23T19:42:00+0100",
                "arrivalTimestamp": 1706035320,
                "departure": null,
                "departureTimestamp": null,
                "delay": 0,
                "platform": "3",
                "prognosis": {
                  "platform": null,
                  "arrival": "2024-01-23T19:42:00+0100",
                  "departure": null,
                  "capacity1st": null,
                  "capacity2nd": null
                },
                "realtimeAvailability": null,
                "location": {
                  "id": "8505004",
                  "name": "Arth-Goldau",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.049035,
                    "y": 8.549449
                  },
                  "distance": null
                }
              }
            },
            {
              "journey": {
                "name": "002032",
                "category": "IR",
                "subcategory": null,
                "categoryCode": null,
                "number": "VAE",
                "operator": "SOB-sob",
                "to": "Luzern",
                "passList": [
                  {
                    "station": {
                      "id": "8505004",
                      "name": "Arth-Goldau",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.049035,
                        "y": 8.549449
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T19:42:00+0100",
                    "arrivalTimestamp": 1706035320,
                    "departure": "2024-01-23T19:49:00+0100",
                    "departureTimestamp": 1706035740,
                    "delay": null,
                    "platform": "6",
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": null,
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8505004",
                      "name": "Arth-Goldau",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.049035,
                        "y": 8.549449
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "8505002",
                      "name": "Küssnacht am Rigi",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.083589,
                        "y": 8.433521
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T20:00:00+0100",
                    "arrivalTimestamp": 1706036400,
                    "departure": "2024-01-23T20:01:00+0100",
                    "departureTimestamp": 1706036460,
                    "delay": null,
                    "platform": null,
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": null,
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8505002",
                      "name": "Küssnacht am Rigi",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.083589,
                        "y": 8.433521
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "8505018",
                      "name": "Meggen Zentrum",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.045189,
                        "y": 8.374391
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T20:07:00+0100",
                    "arrivalTimestamp": 1706036820,
                    "departure": "2024-01-23T20:07:00+0100",
                    "departureTimestamp": 1706036820,
                    "delay": null,
                    "platform": null,
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": null,
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8505018",
                      "name": "Meggen Zentrum",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.045189,
                        "y": 8.374391
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "8517336",
                      "name": "Luzern Verkehrshaus",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.053923,
                        "y": 8.337294
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T20:11:00+0100",
                    "arrivalTimestamp": 1706037060,
                    "departure": null,
                    "departureTimestamp": null,
                    "delay": null,
                    "platform": "2",
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": null,
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8517336",
                      "name": "Luzern Verkehrshaus",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.053923,
                        "y": 8.337294
                      },
                      "distance": null
                    }
                  }
                ],
                "capacity1st": null,
                "capacity2nd": null
              },
              "walk": null,
              "departure": {
                "station": {
                  "id": "8505004",
                  "name": "Arth-Goldau",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.049035,
                    "y": 8.549449
                  },
                  "distance": null
                },
                "arrival": "2024-01-23T19:42:00+0100",
                "arrivalTimestamp": 1706035320,
                "departure": "2024-01-23T19:49:00+0100",
                "departureTimestamp": 1706035740,
                "delay": null,
                "platform": "6",
                "prognosis": {
                  "platform": null,
                  "arrival": null,
                  "departure": null,
                  "capacity1st": null,
                  "capacity2nd": null
                },
                "realtimeAvailability": null,
                "location": {
                  "id": "8505004",
                  "name": "Arth-Goldau",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.049035,
                    "y": 8.549449
                  },
                  "distance": null
                }
              },
              "arrival": {
                "station": {
                  "id": "8517336",
                  "name": "Luzern Verkehrshaus",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.053923,
                    "y": 8.337294
                  },
                  "distance": null
                },
                "arrival": "2024-01-23T20:11:00+0100",
                "arrivalTimestamp": 1706037060,
                "departure": null,
                "departureTimestamp": null,
                "delay": null,
                "platform": "2",
                "prognosis": {
                  "platform": null,
                  "arrival": null,
                  "departure": null,
                  "capacity1st": null,
                  "capacity2nd": null
                },
                "realtimeAvailability": null,
                "location": {
                  "id": "8517336",
                  "name": "Luzern Verkehrshaus",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.053923,
                    "y": 8.337294
                  },
                  "distance": null
                }
              }
            },
            {
              "journey": null,
              "walk": {
                "duration": 240
              },
              "departure": {
                "station": {
                  "id": "8517336",
                  "name": "Luzern Verkehrshaus",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.053923,
                    "y": 8.337294
                  },
                  "distance": null
                },
                "arrival": "2024-01-23T20:11:00+0100",
                "arrivalTimestamp": 1706037060,
                "departure": "2024-01-23T20:11:00+0100",
                "departureTimestamp": 1706037060,
                "delay": null,
                "platform": null,
                "prognosis": {
                  "platform": null,
                  "arrival": null,
                  "departure": null,
                  "capacity1st": null,
                  "capacity2nd": null
                },
                "realtimeAvailability": null,
                "location": {
                  "id": "8517336",
                  "name": "Luzern Verkehrshaus",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.053923,
                    "y": 8.337294
                  },
                  "distance": null
                }
              },
              "arrival": {
                "station": {
                  "id": "8577185",
                  "name": "Luzern, Verkehrshaus/Lido",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.054066,
                    "y": 8.335164
                  },
                  "distance": null
                },
                "arrival": "2024-01-23T20:15:00+0100",
                "arrivalTimestamp": 1706037300,
                "departure": null,
                "departureTimestamp": null,
                "delay": null,
                "platform": null,
                "prognosis": {
                  "platform": null,
                  "arrival": null,
                  "departure": null,
                  "capacity1st": null,
                  "capacity2nd": null
                },
                "realtimeAvailability": null,
                "location": {
                  "id": "8577185",
                  "name": "Luzern, Verkehrshaus/Lido",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.054066,
                    "y": 8.335164
                  },
                  "distance": null
                }
              }
            },
            {
              "journey": {
                "name": "006525",
                "category": "B",
                "subcategory": null,
                "categoryCode": null,
                "number": "6",
                "operator": "VBL",
                "to": "Luzern, Werkhofstrasse",
                "passList": [
                  {
                    "station": {
                      "id": "8577185",
                      "name": "Luzern, Verkehrshaus/Lido",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.054066,
                        "y": 8.335164
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T20:15:00+0100",
                    "arrivalTimestamp": 1706037300,
                    "departure": "2024-01-23T20:18:00+0100",
                    "departureTimestamp": 1706037480,
                    "delay": null,
                    "platform": null,
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": null,
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8577185",
                      "name": "Luzern, Verkehrshaus/Lido",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.054066,
                        "y": 8.335164
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "8577184",
                      "name": "Luzern, Dietschiberg",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.055389,
                        "y": 8.326907
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T20:19:00+0100",
                    "arrivalTimestamp": 1706037540,
                    "departure": "2024-01-23T20:19:00+0100",
                    "departureTimestamp": 1706037540,
                    "delay": null,
                    "platform": null,
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": null,
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8577184",
                      "name": "Luzern, Dietschiberg",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.055389,
                        "y": 8.326907
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "8589781",
                      "name": "Luzern, Europe",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.05542,
                        "y": 8.324052
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T20:20:00+0100",
                    "arrivalTimestamp": 1706037600,
                    "departure": "2024-01-23T20:20:00+0100",
                    "departureTimestamp": 1706037600,
                    "delay": null,
                    "platform": null,
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": null,
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8589781",
                      "name": "Luzern, Europe",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.05542,
                        "y": 8.324052
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "8577183",
                      "name": "Luzern, Casino-Palace",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.055266,
                        "y": 8.318442
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T20:21:00+0100",
                    "arrivalTimestamp": 1706037660,
                    "departure": "2024-01-23T20:21:00+0100",
                    "departureTimestamp": 1706037660,
                    "delay": null,
                    "platform": null,
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": null,
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8577183",
                      "name": "Luzern, Casino-Palace",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.055266,
                        "y": 8.318442
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "8589241",
                      "name": "Luzern, Haldensteig",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.055043,
                        "y": 8.315753
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T20:21:00+0100",
                    "arrivalTimestamp": 1706037660,
                    "departure": "2024-01-23T20:22:00+0100",
                    "departureTimestamp": 1706037720,
                    "delay": null,
                    "platform": null,
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": null,
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8589241",
                      "name": "Luzern, Haldensteig",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.055043,
                        "y": 8.315753
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "8573055",
                      "name": "Luzern, Luzernerhof",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.054719,
                        "y": 8.312233
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T20:23:00+0100",
                    "arrivalTimestamp": 1706037780,
                    "departure": null,
                    "departureTimestamp": null,
                    "delay": null,
                    "platform": "C",
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": null,
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8573055",
                      "name": "Luzern, Luzernerhof",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.054719,
                        "y": 8.312233
                      },
                      "distance": null
                    }
                  }
                ],
                "capacity1st": null,
                "capacity2nd": null
              },
              "walk": null,
              "departure": {
                "station": {
                  "id": "8577185",
                  "name": "Luzern, Verkehrshaus/Lido",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.054066,
                    "y": 8.335164
                  },
                  "distance": null
                },
                "arrival": "2024-01-23T20:15:00+0100",
                "arrivalTimestamp": 1706037300,
                "departure": "2024-01-23T20:18:00+0100",
                "departureTimestamp": 1706037480,
                "delay": null,
                "platform": null,
                "prognosis": {
                  "platform": null,
                  "arrival": null,
                  "departure": null,
                  "capacity1st": null,
                  "capacity2nd": null
                },
                "realtimeAvailability": null,
                "location": {
                  "id": "8577185",
                  "name": "Luzern, Verkehrshaus/Lido",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.054066,
                    "y": 8.335164
                  },
                  "distance": null
                }
              },
              "arrival": {
                "station": {
                  "id": "8573055",
                  "name": "Luzern, Luzernerhof",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.054719,
                    "y": 8.312233
                  },
                  "distance": null
                },
                "arrival": "2024-01-23T20:23:00+0100",
                "arrivalTimestamp": 1706037780,
                "departure": null,
                "departureTimestamp": null,
                "delay": null,
                "platform": "C",
                "prognosis": {
                  "platform": null,
                  "arrival": null,
                  "departure": null,
                  "capacity1st": null,
                  "capacity2nd": null
                },
                "realtimeAvailability": null,
                "location": {
                  "id": "8573055",
                  "name": "Luzern, Luzernerhof",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.054719,
                    "y": 8.312233
                  },
                  "distance": null
                }
              }
            },
            {
              "journey": {
                "name": "019526",
                "category": "B",
                "subcategory": null,
                "categoryCode": null,
                "number": "19",
                "operator": "VBL",
                "to": "Luzern, Friedental",
                "passList": [
                  {
                    "station": {
                      "id": "8573055",
                      "name": "Luzern, Luzernerhof",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.054719,
                        "y": 8.312233
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T20:23:00+0100",
                    "arrivalTimestamp": 1706037780,
                    "departure": "2024-01-23T20:28:00+0100",
                    "departureTimestamp": 1706038080,
                    "delay": null,
                    "platform": "E",
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": null,
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8573055",
                      "name": "Luzern, Luzernerhof",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.054719,
                        "y": 8.312233
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "8577149",
                      "name": "Luzern, Löwenplatz",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.056629,
                        "y": 8.310659
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T20:28:00+0100",
                    "arrivalTimestamp": 1706038080,
                    "departure": "2024-01-23T20:29:00+0100",
                    "departureTimestamp": 1706038140,
                    "delay": null,
                    "platform": null,
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": null,
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8577149",
                      "name": "Luzern, Löwenplatz",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.056629,
                        "y": 8.310659
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "8589848",
                      "name": "Luzern, Wesemlinrain",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.058816,
                        "y": 8.309417
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T20:29:00+0100",
                    "arrivalTimestamp": 1706038140,
                    "departure": "2024-01-23T20:30:00+0100",
                    "departureTimestamp": 1706038200,
                    "delay": null,
                    "platform": null,
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": null,
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8589848",
                      "name": "Luzern, Wesemlinrain",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.058816,
                        "y": 8.309417
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "8589831",
                      "name": "Luzern, Schlossberg",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.06159,
                        "y": 8.308883
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T20:30:00+0100",
                    "arrivalTimestamp": 1706038200,
                    "departure": "2024-01-23T20:31:00+0100",
                    "departureTimestamp": 1706038260,
                    "delay": null,
                    "platform": null,
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": null,
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8589831",
                      "name": "Luzern, Schlossberg",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.06159,
                        "y": 8.308883
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "8589828",
                      "name": "Luzern, Rosenberg",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.060541,
                        "y": 8.304957
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T20:31:00+0100",
                    "arrivalTimestamp": 1706038260,
                    "departure": null,
                    "departureTimestamp": null,
                    "delay": null,
                    "platform": null,
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": null,
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8589828",
                      "name": "Luzern, Rosenberg",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.060541,
                        "y": 8.304957
                      },
                      "distance": null
                    }
                  }
                ],
                "capacity1st": null,
                "capacity2nd": null
              },
              "walk": null,
              "departure": {
                "station": {
                  "id": "8573055",
                  "name": "Luzern, Luzernerhof",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.054719,
                    "y": 8.312233
                  },
                  "distance": null
                },
                "arrival": "2024-01-23T20:23:00+0100",
                "arrivalTimestamp": 1706037780,
                "departure": "2024-01-23T20:28:00+0100",
                "departureTimestamp": 1706038080,
                "delay": null,
                "platform": "E",
                "prognosis": {
                  "platform": null,
                  "arrival": null,
                  "departure": null,
                  "capacity1st": null,
                  "capacity2nd": null
                },
                "realtimeAvailability": null,
                "location": {
                  "id": "8573055",
                  "name": "Luzern, Luzernerhof",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.054719,
                    "y": 8.312233
                  },
                  "distance": null
                }
              },
              "arrival": {
                "station": {
                  "id": "8589828",
                  "name": "Luzern, Rosenberg",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.060541,
                    "y": 8.304957
                  },
                  "distance": null
                },
                "arrival": "2024-01-23T20:31:00+0100",
                "arrivalTimestamp": 1706038260,
                "departure": null,
                "departureTimestamp": null,
                "delay": null,
                "platform": null,
                "prognosis": {
                  "platform": null,
                  "arrival": null,
                  "departure": null,
                  "capacity1st": null,
                  "capacity2nd": null
                },
                "realtimeAvailability": null,
                "location": {
                  "id": "8589828",
                  "name": "Luzern, Rosenberg",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.060541,
                    "y": 8.304957
                  },
                  "distance": null
                }
              }
            },
            {
              "journey": null,
              "walk": {
                "duration": 0
              },
              "departure": {
                "station": {
                  "id": "8589828",
                  "name": "Luzern, Rosenberg",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.060541,
                    "y": 8.304957
                  },
                  "distance": null
                },
                "arrival": "2024-01-23T20:31:00+0100",
                "arrivalTimestamp": 1706038260,
                "departure": "2024-01-23T20:31:00+0100",
                "departureTimestamp": 1706038260,
                "delay": null,
                "platform": null,
                "prognosis": {
                  "platform": null,
                  "arrival": null,
                  "departure": null,
                  "capacity1st": null,
                  "capacity2nd": null
                },
                "realtimeAvailability": null,
                "location": {
                  "id": "8589828",
                  "name": "Luzern, Rosenberg",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.060541,
                    "y": 8.304957
                  },
                  "distance": null
                }
              },
              "arrival": {
                "station": {
                  "id": null,
                  "name": "Viva Luzern Rosenberg, Luzern, Rosenbergstr. 2-4",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": null,
                    "y": null
                  },
                  "distance": null
                },
                "arrival": "2024-01-23T20:35:00+0100",
                "arrivalTimestamp": 1706038500,
                "departure": null,
                "departureTimestamp": null,
                "delay": null,
                "platform": null,
                "prognosis": {
                  "platform": null,
                  "arrival": null,
                  "departure": null,
                  "capacity1st": null,
                  "capacity2nd": null
                },
                "realtimeAvailability": null,
                "location": {
                  "name": "Viva Luzern Rosenberg, Luzern, Rosenbergstr. 2-4",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": null,
                    "y": null
                  },
                  "distance": null
                }
              }
            }
          ]
        },
        {
          "from": {
            "station": {
              "id": "8505300",
              "name": "Lugano",
              "score": null,
              "coordinate": {
                "type": "WGS84",
                "x": 46.005494,
                "y": 8.946993
              },
              "distance": null
            },
            "arrival": null,
            "arrivalTimestamp": null,
            "departure": "2024-01-23T17:30:00+0100",
            "departureTimestamp": 1706027400,
            "delay": 2,
            "platform": "3",
            "prognosis": {
              "platform": null,
              "arrival": null,
              "departure": "2024-01-23T17:32:00+0100",
              "capacity1st": null,
              "capacity2nd": null
            },
            "realtimeAvailability": null,
            "location": {
              "id": "8505300",
              "name": "Lugano",
              "score": null,
              "coordinate": {
                "type": "WGS84",
                "x": 46.005494,
                "y": 8.946993
              },
              "distance": null
            }
          },
          "to": {
            "station": {
              "id": null,
              "name": "Viva Luzern Rosenberg, Luzern, Rosenbergstr. 2-4",
              "score": null,
              "coordinate": {
                "type": "WGS84",
                "x": null,
                "y": null
              },
              "distance": null
            },
            "arrival": "2024-01-23T20:50:00+0100",
            "arrivalTimestamp": 1706039400,
            "departure": null,
            "departureTimestamp": null,
            "delay": null,
            "platform": null,
            "prognosis": {
              "platform": null,
              "arrival": null,
              "departure": null,
              "capacity1st": null,
              "capacity2nd": null
            },
            "realtimeAvailability": null,
            "location": {
              "name": "Viva Luzern Rosenberg, Luzern, Rosenbergstr. 2-4",
              "score": null,
              "coordinate": {
                "type": "WGS84",
                "x": null,
                "y": null
              },
              "distance": null
            }
          },
          "duration": "00d03:18:00",
          "transfers": 2,
          "service": null,
          "products": [
            "EC",
            "IR VAE",
            "19"
          ],
          "capacity1st": null,
          "capacity2nd": null,
          "sections": [
            {
              "journey": {
                "name": "000328",
                "category": "EC",
                "subcategory": null,
                "categoryCode": null,
                "number": "000328",
                "operator": "SBB",
                "to": "Zürich HB",
                "passList": [
                  {
                    "station": {
                      "id": "8505300",
                      "name": "Lugano",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 46.005494,
                        "y": 8.946993
                      },
                      "distance": null
                    },
                    "arrival": null,
                    "arrivalTimestamp": null,
                    "departure": "2024-01-23T17:30:00+0100",
                    "departureTimestamp": 1706027400,
                    "delay": 2,
                    "platform": "3",
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": "2024-01-23T17:32:00+0100",
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8505300",
                      "name": "Lugano",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 46.005494,
                        "y": 8.946993
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "8505213",
                      "name": "Bellinzona",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 46.195425,
                        "y": 9.029522
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T17:46:00+0100",
                    "arrivalTimestamp": 1706028360,
                    "departure": "2024-01-23T17:47:00+0100",
                    "departureTimestamp": 1706028420,
                    "delay": 0,
                    "platform": null,
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": "2024-01-23T17:47:00+0100",
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8505213",
                      "name": "Bellinzona",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 46.195425,
                        "y": 9.029522
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "0000140",
                      "name": "Gotthard-Panoramastrecke",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 46.604323,
                        "y": 8.594655
                      },
                      "distance": null
                    },
                    "arrival": null,
                    "arrivalTimestamp": null,
                    "departure": null,
                    "departureTimestamp": null,
                    "delay": null,
                    "platform": null,
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": "2024-01-23T15:42:52+0100",
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "0000140",
                      "name": "Gotthard-Panoramastrecke",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 46.604323,
                        "y": 8.594655
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "8505004",
                      "name": "Arth-Goldau",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.049035,
                        "y": 8.549449
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T19:42:00+0100",
                    "arrivalTimestamp": 1706035320,
                    "departure": null,
                    "departureTimestamp": null,
                    "delay": 0,
                    "platform": "3",
                    "prognosis": {
                      "platform": null,
                      "arrival": "2024-01-23T19:42:00+0100",
                      "departure": null,
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8505004",
                      "name": "Arth-Goldau",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.049035,
                        "y": 8.549449
                      },
                      "distance": null
                    }
                  }
                ],
                "capacity1st": null,
                "capacity2nd": null
              },
              "walk": null,
              "departure": {
                "station": {
                  "id": "8505300",
                  "name": "Lugano",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 46.005494,
                    "y": 8.946993
                  },
                  "distance": null
                },
                "arrival": null,
                "arrivalTimestamp": null,
                "departure": "2024-01-23T17:30:00+0100",
                "departureTimestamp": 1706027400,
                "delay": 2,
                "platform": "3",
                "prognosis": {
                  "platform": null,
                  "arrival": null,
                  "departure": "2024-01-23T17:32:00+0100",
                  "capacity1st": null,
                  "capacity2nd": null
                },
                "realtimeAvailability": null,
                "location": {
                  "id": "8505300",
                  "name": "Lugano",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 46.005494,
                    "y": 8.946993
                  },
                  "distance": null
                }
              },
              "arrival": {
                "station": {
                  "id": "8505004",
                  "name": "Arth-Goldau",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.049035,
                    "y": 8.549449
                  },
                  "distance": null
                },
                "arrival": "2024-01-23T19:42:00+0100",
                "arrivalTimestamp": 1706035320,
                "departure": null,
                "departureTimestamp": null,
                "delay": 0,
                "platform": "3",
                "prognosis": {
                  "platform": null,
                  "arrival": "2024-01-23T19:42:00+0100",
                  "departure": null,
                  "capacity1st": null,
                  "capacity2nd": null
                },
                "realtimeAvailability": null,
                "location": {
                  "id": "8505004",
                  "name": "Arth-Goldau",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.049035,
                    "y": 8.549449
                  },
                  "distance": null
                }
              }
            },
            {
              "journey": {
                "name": "002032",
                "category": "IR",
                "subcategory": null,
                "categoryCode": null,
                "number": "VAE",
                "operator": "SOB-sob",
                "to": "Luzern",
                "passList": [
                  {
                    "station": {
                      "id": "8505004",
                      "name": "Arth-Goldau",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.049035,
                        "y": 8.549449
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T19:42:00+0100",
                    "arrivalTimestamp": 1706035320,
                    "departure": "2024-01-23T19:49:00+0100",
                    "departureTimestamp": 1706035740,
                    "delay": null,
                    "platform": "6",
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": null,
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8505004",
                      "name": "Arth-Goldau",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.049035,
                        "y": 8.549449
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "8505002",
                      "name": "Küssnacht am Rigi",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.083589,
                        "y": 8.433521
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T20:00:00+0100",
                    "arrivalTimestamp": 1706036400,
                    "departure": "2024-01-23T20:01:00+0100",
                    "departureTimestamp": 1706036460,
                    "delay": null,
                    "platform": null,
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": null,
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8505002",
                      "name": "Küssnacht am Rigi",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.083589,
                        "y": 8.433521
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "8505018",
                      "name": "Meggen Zentrum",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.045189,
                        "y": 8.374391
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T20:07:00+0100",
                    "arrivalTimestamp": 1706036820,
                    "departure": "2024-01-23T20:07:00+0100",
                    "departureTimestamp": 1706036820,
                    "delay": null,
                    "platform": null,
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": null,
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8505018",
                      "name": "Meggen Zentrum",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.045189,
                        "y": 8.374391
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "8517336",
                      "name": "Luzern Verkehrshaus",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.053923,
                        "y": 8.337294
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T20:11:00+0100",
                    "arrivalTimestamp": 1706037060,
                    "departure": "2024-01-23T20:13:00+0100",
                    "departureTimestamp": 1706037180,
                    "delay": null,
                    "platform": null,
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": null,
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8517336",
                      "name": "Luzern Verkehrshaus",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.053923,
                        "y": 8.337294
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "8505000",
                      "name": "Luzern",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.050174,
                        "y": 8.310185
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T20:21:00+0100",
                    "arrivalTimestamp": 1706037660,
                    "departure": null,
                    "departureTimestamp": null,
                    "delay": null,
                    "platform": "3",
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": null,
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8505000",
                      "name": "Luzern",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.050174,
                        "y": 8.310185
                      },
                      "distance": null
                    }
                  }
                ],
                "capacity1st": null,
                "capacity2nd": null
              },
              "walk": null,
              "departure": {
                "station": {
                  "id": "8505004",
                  "name": "Arth-Goldau",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.049035,
                    "y": 8.549449
                  },
                  "distance": null
                },
                "arrival": "2024-01-23T19:42:00+0100",
                "arrivalTimestamp": 1706035320,
                "departure": "2024-01-23T19:49:00+0100",
                "departureTimestamp": 1706035740,
                "delay": null,
                "platform": "6",
                "prognosis": {
                  "platform": null,
                  "arrival": null,
                  "departure": null,
                  "capacity1st": null,
                  "capacity2nd": null
                },
                "realtimeAvailability": null,
                "location": {
                  "id": "8505004",
                  "name": "Arth-Goldau",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.049035,
                    "y": 8.549449
                  },
                  "distance": null
                }
              },
              "arrival": {
                "station": {
                  "id": "8505000",
                  "name": "Luzern",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.050174,
                    "y": 8.310185
                  },
                  "distance": null
                },
                "arrival": "2024-01-23T20:21:00+0100",
                "arrivalTimestamp": 1706037660,
                "departure": null,
                "departureTimestamp": null,
                "delay": null,
                "platform": "3",
                "prognosis": {
                  "platform": null,
                  "arrival": null,
                  "departure": null,
                  "capacity1st": null,
                  "capacity2nd": null
                },
                "realtimeAvailability": null,
                "location": {
                  "id": "8505000",
                  "name": "Luzern",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.050174,
                    "y": 8.310185
                  },
                  "distance": null
                }
              }
            },
            {
              "journey": null,
              "walk": {
                "duration": 300
              },
              "departure": {
                "station": {
                  "id": "8505000",
                  "name": "Luzern",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.050174,
                    "y": 8.310185
                  },
                  "distance": null
                },
                "arrival": "2024-01-23T20:21:00+0100",
                "arrivalTimestamp": 1706037660,
                "departure": "2024-01-23T20:21:00+0100",
                "departureTimestamp": 1706037660,
                "delay": null,
                "platform": null,
                "prognosis": {
                  "platform": null,
                  "arrival": null,
                  "departure": null,
                  "capacity1st": null,
                  "capacity2nd": null
                },
                "realtimeAvailability": null,
                "location": {
                  "id": "8505000",
                  "name": "Luzern",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.050174,
                    "y": 8.310185
                  },
                  "distance": null
                }
              },
              "arrival": {
                "station": {
                  "id": "8508450",
                  "name": "Luzern, Bahnhof",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.050749,
                    "y": 8.310247
                  },
                  "distance": null
                },
                "arrival": "2024-01-23T20:26:00+0100",
                "arrivalTimestamp": 1706037960,
                "departure": null,
                "departureTimestamp": null,
                "delay": null,
                "platform": null,
                "prognosis": {
                  "platform": null,
                  "arrival": null,
                  "departure": null,
                  "capacity1st": null,
                  "capacity2nd": null
                },
                "realtimeAvailability": null,
                "location": {
                  "id": "8508450",
                  "name": "Luzern, Bahnhof",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.050749,
                    "y": 8.310247
                  },
                  "distance": null
                }
              }
            },
            {
              "journey": {
                "name": "019530",
                "category": "B",
                "subcategory": null,
                "categoryCode": null,
                "number": "19",
                "operator": "VBL",
                "to": "Luzern, Friedental",
                "passList": [
                  {
                    "station": {
                      "id": "8508450",
                      "name": "Luzern, Bahnhof",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.050749,
                        "y": 8.310247
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T20:26:00+0100",
                    "arrivalTimestamp": 1706037960,
                    "departure": "2024-01-23T20:40:00+0100",
                    "departureTimestamp": 1706038800,
                    "delay": null,
                    "platform": "R",
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": null,
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8508450",
                      "name": "Luzern, Bahnhof",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.050749,
                        "y": 8.310247
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "8573054",
                      "name": "Luzern, Schwanenplatz",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.053251,
                        "y": 8.308893
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T20:41:00+0100",
                    "arrivalTimestamp": 1706038860,
                    "departure": "2024-01-23T20:42:00+0100",
                    "departureTimestamp": 1706038920,
                    "delay": null,
                    "platform": null,
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": null,
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8573054",
                      "name": "Luzern, Schwanenplatz",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.053251,
                        "y": 8.308893
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "8573055",
                      "name": "Luzern, Luzernerhof",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.054719,
                        "y": 8.312233
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T20:43:00+0100",
                    "arrivalTimestamp": 1706038980,
                    "departure": "2024-01-23T20:43:00+0100",
                    "departureTimestamp": 1706038980,
                    "delay": null,
                    "platform": null,
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": null,
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8573055",
                      "name": "Luzern, Luzernerhof",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.054719,
                        "y": 8.312233
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "8577149",
                      "name": "Luzern, Löwenplatz",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.056629,
                        "y": 8.310659
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T20:43:00+0100",
                    "arrivalTimestamp": 1706038980,
                    "departure": "2024-01-23T20:44:00+0100",
                    "departureTimestamp": 1706039040,
                    "delay": null,
                    "platform": null,
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": null,
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8577149",
                      "name": "Luzern, Löwenplatz",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.056629,
                        "y": 8.310659
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "8589848",
                      "name": "Luzern, Wesemlinrain",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.058816,
                        "y": 8.309417
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T20:44:00+0100",
                    "arrivalTimestamp": 1706039040,
                    "departure": "2024-01-23T20:45:00+0100",
                    "departureTimestamp": 1706039100,
                    "delay": null,
                    "platform": null,
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": null,
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8589848",
                      "name": "Luzern, Wesemlinrain",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.058816,
                        "y": 8.309417
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "8589831",
                      "name": "Luzern, Schlossberg",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.06159,
                        "y": 8.308883
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T20:45:00+0100",
                    "arrivalTimestamp": 1706039100,
                    "departure": "2024-01-23T20:46:00+0100",
                    "departureTimestamp": 1706039160,
                    "delay": null,
                    "platform": null,
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": null,
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8589831",
                      "name": "Luzern, Schlossberg",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.06159,
                        "y": 8.308883
                      },
                      "distance": null
                    }
                  },
                  {
                    "station": {
                      "id": "8589828",
                      "name": "Luzern, Rosenberg",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.060541,
                        "y": 8.304957
                      },
                      "distance": null
                    },
                    "arrival": "2024-01-23T20:46:00+0100",
                    "arrivalTimestamp": 1706039160,
                    "departure": null,
                    "departureTimestamp": null,
                    "delay": null,
                    "platform": null,
                    "prognosis": {
                      "platform": null,
                      "arrival": null,
                      "departure": null,
                      "capacity1st": null,
                      "capacity2nd": null
                    },
                    "realtimeAvailability": null,
                    "location": {
                      "id": "8589828",
                      "name": "Luzern, Rosenberg",
                      "score": null,
                      "coordinate": {
                        "type": "WGS84",
                        "x": 47.060541,
                        "y": 8.304957
                      },
                      "distance": null
                    }
                  }
                ],
                "capacity1st": null,
                "capacity2nd": null
              },
              "walk": null,
              "departure": {
                "station": {
                  "id": "8508450",
                  "name": "Luzern, Bahnhof",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.050749,
                    "y": 8.310247
                  },
                  "distance": null
                },
                "arrival": "2024-01-23T20:26:00+0100",
                "arrivalTimestamp": 1706037960,
                "departure": "2024-01-23T20:40:00+0100",
                "departureTimestamp": 1706038800,
                "delay": null,
                "platform": "R",
                "prognosis": {
                  "platform": null,
                  "arrival": null,
                  "departure": null,
                  "capacity1st": null,
                  "capacity2nd": null
                },
                "realtimeAvailability": null,
                "location": {
                  "id": "8508450",
                  "name": "Luzern, Bahnhof",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.050749,
                    "y": 8.310247
                  },
                  "distance": null
                }
              },
              "arrival": {
                "station": {
                  "id": "8589828",
                  "name": "Luzern, Rosenberg",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.060541,
                    "y": 8.304957
                  },
                  "distance": null
                },
                "arrival": "2024-01-23T20:46:00+0100",
                "arrivalTimestamp": 1706039160,
                "departure": null,
                "departureTimestamp": null,
                "delay": null,
                "platform": null,
                "prognosis": {
                  "platform": null,
                  "arrival": null,
                  "departure": null,
                  "capacity1st": null,
                  "capacity2nd": null
                },
                "realtimeAvailability": null,
                "location": {
                  "id": "8589828",
                  "name": "Luzern, Rosenberg",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.060541,
                    "y": 8.304957
                  },
                  "distance": null
                }
              }
            },
            {
              "journey": null,
              "walk": {
                "duration": 0
              },
              "departure": {
                "station": {
                  "id": "8589828",
                  "name": "Luzern, Rosenberg",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.060541,
                    "y": 8.304957
                  },
                  "distance": null
                },
                "arrival": "2024-01-23T20:46:00+0100",
                "arrivalTimestamp": 1706039160,
                "departure": "2024-01-23T20:46:00+0100",
                "departureTimestamp": 1706039160,
                "delay": null,
                "platform": null,
                "prognosis": {
                  "platform": null,
                  "arrival": null,
                  "departure": null,
                  "capacity1st": null,
                  "capacity2nd": null
                },
                "realtimeAvailability": null,
                "location": {
                  "id": "8589828",
                  "name": "Luzern, Rosenberg",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": 47.060541,
                    "y": 8.304957
                  },
                  "distance": null
                }
              },
              "arrival": {
                "station": {
                  "id": null,
                  "name": "Viva Luzern Rosenberg, Luzern, Rosenbergstr. 2-4",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": null,
                    "y": null
                  },
                  "distance": null
                },
                "arrival": "2024-01-23T20:50:00+0100",
                "arrivalTimestamp": 1706039400,
                "departure": null,
                "departureTimestamp": null,
                "delay": null,
                "platform": null,
                "prognosis": {
                  "platform": null,
                  "arrival": null,
                  "departure": null,
                  "capacity1st": null,
                  "capacity2nd": null
                },
                "realtimeAvailability": null,
                "location": {
                  "name": "Viva Luzern Rosenberg, Luzern, Rosenbergstr. 2-4",
                  "score": null,
                  "coordinate": {
                    "type": "WGS84",
                    "x": null,
                    "y": null
                  },
                  "distance": null
                }
              }
            }
          ]
        }
      ],
      "from": {
        "id": "8505300",
        "name": "Lugano",
        "score": null,
        "coordinate": {
          "type": "WGS84",
          "x": 46.005494,
          "y": 8.946993
        },
        "distance": null
      },
      "to": {
        "id": null,
        "name": "Luzern, Rosenbergstr. 2",
        "score": null,
        "coordinate": {
          "type": "WGS84",
          "x": 47.061242,
          "y": 8.304994
        },
        "distance": null
      },
      "stations": {
        "from": [
          {
            "id": "8505300",
            "name": "Lugano",
            "score": null,
            "coordinate": {
              "type": "WGS84",
              "x": 46.005494,
              "y": 8.946993
            },
            "distance": null
          }
        ],
        "to": [
          {
            "id": null,
            "name": "Luzern, Rosenbergstr. 2",
            "score": null,
            "coordinate": {
              "type": "WGS84",
              "x": 47.061242,
              "y": 8.304994
            },
            "distance": null
          }
        ]
      }
    }

  from:string = this.data.from.name;
  to:string = this.data.to.name;

  returnString(date:Date) {
    let hours, mins;
    if (date.getHours().toString().length === 1) {
      hours = "0" + date.getHours().toString();
    } else {
      hours = date.getHours().toString();
    }
    if (date.getMinutes().toString().length === 1) {
      mins = "0" + date.getMinutes().toString();
    } else {
      mins = date.getMinutes().toString();
    }

    return hours + ":" + mins;
  }

  toDate(durationString:string) {
    return new Date(durationString);
  }

  toDateFromDuration(durationString: string): Date {
    const regex = /^(\d{2}d)?(\d{2}):(\d{2}):(\d{2})$/;
    const match = durationString.match(regex);

    if (!match) {
      throw new Error('Formato della stringa non valido.');
    }

    const [, daysStr, hoursStr, minutesStr, secondsStr] = match;
    const days = daysStr ? parseInt(daysStr, 10) : 0;
    const hours = parseInt(hoursStr, 10);
    const minutes = parseInt(minutesStr, 10);
    const seconds = parseInt(secondsStr, 10);

    const epoch = new Date(0);
    epoch.setDate(epoch.getUTCDate() + days);
    epoch.setHours(hours);
    epoch.setMinutes(minutes);
    epoch.setSeconds(seconds);

    return epoch;
  }
}
