const fs = require('fs');

  
 var aaa = [
   {
    "date": "0:00",
    "storageOutputList": 0.3,
    "powerGridList": 75.86,
    "socList": 0.98,
    "netLoadList": 15.11,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "0:01",
    "storageOutputList": 83.8,
    "powerGridList": 163.04,
    "socList": 1,
    "netLoadList": 15.85,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "0:02",
    "storageOutputList": 84.3,
    "powerGridList": 162.8,
    "socList": 1.08,
    "netLoadList": 15.7,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "0:03",
    "storageOutputList": 84.3,
    "powerGridList": 167.32,
    "socList": 1.16,
    "netLoadList": 16.6,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "0:04",
    "storageOutputList": 84.4,
    "powerGridList": 168.08,
    "socList": 1.16,
    "netLoadList": 16.74,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "0:05",
    "storageOutputList": 84.4,
    "powerGridList": 165.32,
    "socList": 1.24,
    "netLoadList": 16.18,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "0:06",
    "storageOutputList": 84.5,
    "powerGridList": 159.02,
    "socList": 1.32,
    "netLoadList": 14.9,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "0:07",
    "storageOutputList": 84.5,
    "powerGridList": 160.52,
    "socList": 1.4,
    "netLoadList": 15.2,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "0:08",
    "storageOutputList": 84.5,
    "powerGridList": 158.5,
    "socList": 1.48,
    "netLoadList": 14.8,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "0:09",
    "storageOutputList": 84.6,
    "powerGridList": 162.8,
    "socList": 1.56,
    "netLoadList": 15.64,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "0:10",
    "storageOutputList": 84.6,
    "powerGridList": 163.04,
    "socList": 1.56,
    "netLoadList": 15.69,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "0:11",
    "storageOutputList": 84.5,
    "powerGridList": 156.5,
    "socList": 1.64,
    "netLoadList": 14.4,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "0:12",
    "storageOutputList": 84.5,
    "powerGridList": 162.04,
    "socList": 1.7,
    "netLoadList": 15.51,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "0:13",
    "storageOutputList": 84.4,
    "powerGridList": 158,
    "socList": 1.76,
    "netLoadList": 14.72,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "0:14",
    "storageOutputList": 84.5,
    "powerGridList": 155.74,
    "socList": 1.84,
    "netLoadList": 14.25,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "0:15",
    "storageOutputList": 84.5,
    "powerGridList": 158.26,
    "socList": 1.84,
    "netLoadList": 14.75,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "0:16",
    "storageOutputList": 84.5,
    "powerGridList": 150.7,
    "socList": 1.92,
    "netLoadList": 13.24,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "0:17",
    "storageOutputList": 84.6,
    "powerGridList": 153.46,
    "socList": 2,
    "netLoadList": 13.77,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "0:18",
    "storageOutputList": 81.6,
    "powerGridList": 154.22,
    "socList": 2.08,
    "netLoadList": 14.52,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "0:19",
    "storageOutputList": 81.8,
    "powerGridList": 147.92,
    "socList": 2.16,
    "netLoadList": 13.22,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "0:20",
    "storageOutputList": 81.6,
    "powerGridList": 153.98,
    "socList": 2.16,
    "netLoadList": 14.48,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "0:21",
    "storageOutputList": 81.6,
    "powerGridList": 151.2,
    "socList": 2.24,
    "netLoadList": 13.92,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "0:22",
    "storageOutputList": 81.6,
    "powerGridList": 161.02,
    "socList": 2.32,
    "netLoadList": 15.88,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "0:23",
    "storageOutputList": 81.6,
    "powerGridList": 163.8,
    "socList": 2.4,
    "netLoadList": 16.44,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "0:24",
    "storageOutputList": 81.6,
    "powerGridList": 163.04,
    "socList": 2.48,
    "netLoadList": 16.29,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "0:25",
    "storageOutputList": 81.7,
    "powerGridList": 161.28,
    "socList": 2.48,
    "netLoadList": 15.92,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "0:26",
    "storageOutputList": 81.6,
    "powerGridList": 153.22,
    "socList": 2.56,
    "netLoadList": 14.32,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "0:27",
    "storageOutputList": 81.7,
    "powerGridList": 159.76,
    "socList": 2.62,
    "netLoadList": 15.61,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "0:28",
    "storageOutputList": 81.7,
    "powerGridList": 155.74,
    "socList": 2.7,
    "netLoadList": 14.81,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "0:29",
    "storageOutputList": 81.6,
    "powerGridList": 158,
    "socList": 2.78,
    "netLoadList": 15.28,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "0:30",
    "storageOutputList": 81.6,
    "powerGridList": 150.94,
    "socList": 2.78,
    "netLoadList": 13.87,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "0:31",
    "storageOutputList": 81.6,
    "powerGridList": 148.18,
    "socList": 2.86,
    "netLoadList": 13.32,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "0:32",
    "storageOutputList": 81.6,
    "powerGridList": 159.26,
    "socList": 2.94,
    "netLoadList": 15.53,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "0:33",
    "storageOutputList": 81.6,
    "powerGridList": 168.84,
    "socList": 3.02,
    "netLoadList": 17.45,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "0:34",
    "storageOutputList": 81.6,
    "powerGridList": 167.84,
    "socList": 3.1,
    "netLoadList": 17.25,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "0:35",
    "storageOutputList": 81.6,
    "powerGridList": 168.84,
    "socList": 3.18,
    "netLoadList": 17.45,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "0:36",
    "storageOutputList": 81.6,
    "powerGridList": 163.04,
    "socList": 3.18,
    "netLoadList": 16.29,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "0:37",
    "storageOutputList": 81.6,
    "powerGridList": 152.46,
    "socList": 3.26,
    "netLoadList": 14.17,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "0:38",
    "storageOutputList": 81.7,
    "powerGridList": 163.54,
    "socList": 3.34,
    "netLoadList": 16.37,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "0:39",
    "storageOutputList": 81.6,
    "powerGridList": 155.98,
    "socList": 3.42,
    "netLoadList": 14.88,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "0:40",
    "storageOutputList": 81.6,
    "powerGridList": 166.82,
    "socList": 3.48,
    "netLoadList": 17.04,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "0:41",
    "storageOutputList": 81.6,
    "powerGridList": 161.02,
    "socList": 3.48,
    "netLoadList": 15.88,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "0:42",
    "storageOutputList": 81.6,
    "powerGridList": 161.02,
    "socList": 3.56,
    "netLoadList": 15.88,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "0:43",
    "storageOutputList": 81.7,
    "powerGridList": 159.26,
    "socList": 3.66,
    "netLoadList": 15.51,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "0:44",
    "storageOutputList": 81.6,
    "powerGridList": 155.98,
    "socList": 3.74,
    "netLoadList": 14.88,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "0:45",
    "storageOutputList": 81.6,
    "powerGridList": 162.04,
    "socList": 3.74,
    "netLoadList": 16.09,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "0:46",
    "storageOutputList": 81.7,
    "powerGridList": 217.48,
    "socList": 3.82,
    "netLoadList": 27.16,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "0:47",
    "storageOutputList": 81.6,
    "powerGridList": 209.42,
    "socList": 3.9,
    "netLoadList": 25.56,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "0:48",
    "storageOutputList": 81.6,
    "powerGridList": 212.44,
    "socList": 3.98,
    "netLoadList": 26.17,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "0:49",
    "storageOutputList": 81.6,
    "powerGridList": 211.18,
    "socList": 4.06,
    "netLoadList": 25.92,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "0:50",
    "storageOutputList": 81.7,
    "powerGridList": 215.2,
    "socList": 4.06,
    "netLoadList": 26.7,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "0:51",
    "storageOutputList": 81.7,
    "powerGridList": 217.72,
    "socList": 4.12,
    "netLoadList": 27.2,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "0:52",
    "storageOutputList": 81.6,
    "powerGridList": 216.46,
    "socList": 4.2,
    "netLoadList": 26.97,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "0:53",
    "storageOutputList": 81.6,
    "powerGridList": 216.46,
    "socList": 4.28,
    "netLoadList": 26.97,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "0:54",
    "storageOutputList": 81.7,
    "powerGridList": 211.68,
    "socList": 4.36,
    "netLoadList": 26,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "0:55",
    "storageOutputList": 81.7,
    "powerGridList": 208.4,
    "socList": 4.36,
    "netLoadList": 25.34,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "0:56",
    "storageOutputList": 81.6,
    "powerGridList": 190.52,
    "socList": 4.44,
    "netLoadList": 21.78,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "0:57",
    "storageOutputList": 81.6,
    "powerGridList": 193.04,
    "socList": 4.52,
    "netLoadList": 22.29,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "0:58",
    "storageOutputList": 81.6,
    "powerGridList": 189.76,
    "socList": 4.6,
    "netLoadList": 21.63,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "0:59",
    "storageOutputList": 81.8,
    "powerGridList": 211.94,
    "socList": 4.68,
    "netLoadList": 26.03,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "1:00",
    "storageOutputList": 84.6,
    "powerGridList": 205.38,
    "socList": 4.68,
    "netLoadList": 24.16,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "1:01",
    "storageOutputList": 84.7,
    "powerGridList": 203.86,
    "socList": 4.76,
    "netLoadList": 23.83,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "1:02",
    "storageOutputList": 84.5,
    "powerGridList": 208.4,
    "socList": 4.84,
    "netLoadList": 24.78,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "1:03",
    "storageOutputList": 84.6,
    "powerGridList": 206.9,
    "socList": 4.9,
    "netLoadList": 24.46,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "1:04",
    "storageOutputList": 84.5,
    "powerGridList": 208.4,
    "socList": 4.98,
    "netLoadList": 24.78,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "1:05",
    "storageOutputList": 84.5,
    "powerGridList": 206.9,
    "socList": 4.98,
    "netLoadList": 24.48,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "1:06",
    "storageOutputList": 84.6,
    "powerGridList": 203.86,
    "socList": 5.06,
    "netLoadList": 23.85,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "1:07",
    "storageOutputList": 84.6,
    "powerGridList": 206.64,
    "socList": 5.14,
    "netLoadList": 24.41,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "1:08",
    "storageOutputList": 84.6,
    "powerGridList": 199.08,
    "socList": 5.2,
    "netLoadList": 22.9,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "1:09",
    "storageOutputList": 84.6,
    "powerGridList": 199.34,
    "socList": 5.28,
    "netLoadList": 22.95,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "1:10",
    "storageOutputList": 84.6,
    "powerGridList": 205.88,
    "socList": 5.28,
    "netLoadList": 24.26,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "1:11",
    "storageOutputList": 84.5,
    "powerGridList": 209.42,
    "socList": 5.36,
    "netLoadList": 24.98,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "1:12",
    "storageOutputList": 81.8,
    "powerGridList": 210.42,
    "socList": 5.44,
    "netLoadList": 25.72,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "1:13",
    "storageOutputList": 81.6,
    "powerGridList": 217.98,
    "socList": 5.52,
    "netLoadList": 27.28,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "1:14",
    "storageOutputList": 81.8,
    "powerGridList": 208.9,
    "socList": 5.6,
    "netLoadList": 25.42,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "1:15",
    "storageOutputList": 81.8,
    "powerGridList": 212.68,
    "socList": 5.6,
    "netLoadList": 26.18,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "1:16",
    "storageOutputList": 81.7,
    "powerGridList": 207.14,
    "socList": 5.68,
    "netLoadList": 25.09,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "1:17",
    "storageOutputList": 81.6,
    "powerGridList": 213.2,
    "socList": 5.76,
    "netLoadList": 26.32,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "1:18",
    "storageOutputList": 81.6,
    "powerGridList": 208.16,
    "socList": 5.84,
    "netLoadList": 25.31,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "1:19",
    "storageOutputList": 81.6,
    "powerGridList": 211.94,
    "socList": 5.92,
    "netLoadList": 26.07,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "1:20",
    "storageOutputList": 81.6,
    "powerGridList": 210.16,
    "socList": 5.92,
    "netLoadList": 25.71,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "1:21",
    "storageOutputList": 81.7,
    "powerGridList": 206.14,
    "socList": 6,
    "netLoadList": 24.89,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "1:22",
    "storageOutputList": 81.6,
    "powerGridList": 206.38,
    "socList": 6.06,
    "netLoadList": 24.96,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "1:23",
    "storageOutputList": 81.7,
    "powerGridList": 203.86,
    "socList": 6.14,
    "netLoadList": 24.43,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "1:24",
    "storageOutputList": 81.7,
    "powerGridList": 210.92,
    "socList": 6.22,
    "netLoadList": 25.84,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "1:25",
    "storageOutputList": 81.6,
    "powerGridList": 201.1,
    "socList": 6.22,
    "netLoadList": 23.9,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "1:26",
    "storageOutputList": 81.6,
    "powerGridList": 212.94,
    "socList": 6.3,
    "netLoadList": 26.27,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "1:27",
    "storageOutputList": 81.7,
    "powerGridList": 205.88,
    "socList": 6.38,
    "netLoadList": 24.84,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "1:28",
    "storageOutputList": 81.6,
    "powerGridList": 210.16,
    "socList": 6.46,
    "netLoadList": 25.71,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "1:29",
    "storageOutputList": 81.7,
    "powerGridList": 209.92,
    "socList": 6.54,
    "netLoadList": 25.64,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "1:30",
    "storageOutputList": 81.6,
    "powerGridList": 263.6,
    "socList": 6.54,
    "netLoadList": 36.4,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "1:31",
    "storageOutputList": 81.7,
    "powerGridList": 263.84,
    "socList": 6.62,
    "netLoadList": 36.43,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "1:32",
    "storageOutputList": 81.6,
    "powerGridList": 240.66,
    "socList": 6.7,
    "netLoadList": 31.81,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "1:33",
    "storageOutputList": 81.7,
    "powerGridList": 241.42,
    "socList": 6.78,
    "netLoadList": 31.94,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "1:34",
    "storageOutputList": 81.6,
    "powerGridList": 224.02,
    "socList": 6.86,
    "netLoadList": 28.48,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "1:35",
    "storageOutputList": 81.6,
    "powerGridList": 201.34,
    "socList": 6.86,
    "netLoadList": 23.95,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "1:36",
    "storageOutputList": 81.6,
    "powerGridList": 196.82,
    "socList": 6.94,
    "netLoadList": 23.04,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "1:37",
    "storageOutputList": 81.8,
    "powerGridList": 205.64,
    "socList": 7.02,
    "netLoadList": 24.77,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "1:38",
    "storageOutputList": 81.7,
    "powerGridList": 205.88,
    "socList": 7.1,
    "netLoadList": 24.84,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "1:39",
    "storageOutputList": 81.7,
    "powerGridList": 207.9,
    "socList": 7.18,
    "netLoadList": 25.24,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "1:40",
    "storageOutputList": 81.6,
    "powerGridList": 203.62,
    "socList": 7.18,
    "netLoadList": 24.4,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "1:41",
    "storageOutputList": 81.7,
    "powerGridList": 208.16,
    "socList": 7.26,
    "netLoadList": 25.29,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "1:42",
    "storageOutputList": 81.6,
    "powerGridList": 208.16,
    "socList": 7.34,
    "netLoadList": 25.31,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "1:43",
    "storageOutputList": 84.6,
    "powerGridList": 210.16,
    "socList": 7.42,
    "netLoadList": 25.11,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "1:44",
    "storageOutputList": 84.6,
    "powerGridList": 213.2,
    "socList": 7.48,
    "netLoadList": 25.72,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "1:45",
    "storageOutputList": 84.6,
    "powerGridList": 204.38,
    "socList": 7.48,
    "netLoadList": 23.96,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "1:46",
    "storageOutputList": 84.5,
    "powerGridList": 209.92,
    "socList": 7.56,
    "netLoadList": 25.08,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "1:47",
    "storageOutputList": 84.5,
    "powerGridList": 212.68,
    "socList": 7.64,
    "netLoadList": 25.64,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "1:48",
    "storageOutputList": 84.5,
    "powerGridList": 302.66,
    "socList": 7.72,
    "netLoadList": 43.63,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "1:49",
    "storageOutputList": 84.5,
    "powerGridList": 299.62,
    "socList": 7.72,
    "netLoadList": 43.02,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "1:50",
    "storageOutputList": 84.6,
    "powerGridList": 289.3,
    "socList": 7.78,
    "netLoadList": 40.94,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "1:51",
    "storageOutputList": 84.5,
    "powerGridList": 201.86,
    "socList": 7.86,
    "netLoadList": 23.47,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "1:52",
    "storageOutputList": 84.5,
    "powerGridList": 210.16,
    "socList": 7.94,
    "netLoadList": 25.13,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "1:53",
    "storageOutputList": 84.5,
    "powerGridList": 208.66,
    "socList": 8.02,
    "netLoadList": 24.83,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "1:54",
    "storageOutputList": 84.7,
    "powerGridList": 212.44,
    "socList": 8.02,
    "netLoadList": 25.55,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "1:55",
    "storageOutputList": 84.5,
    "powerGridList": 213.2,
    "socList": 8.1,
    "netLoadList": 25.74,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "1:56",
    "storageOutputList": 81.7,
    "powerGridList": 210.92,
    "socList": 8.18,
    "netLoadList": 25.84,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "1:57",
    "storageOutputList": 81.7,
    "powerGridList": 244.18,
    "socList": 8.26,
    "netLoadList": 32.5,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "1:58",
    "storageOutputList": 81.7,
    "powerGridList": 252.5,
    "socList": 8.34,
    "netLoadList": 34.16,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "1:59",
    "storageOutputList": 81.6,
    "powerGridList": 246.2,
    "socList": 8.34,
    "netLoadList": 32.92,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "2:00",
    "storageOutputList": 81.7,
    "powerGridList": 260.56,
    "socList": 8.42,
    "netLoadList": 35.77,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "2:01",
    "storageOutputList": 81.6,
    "powerGridList": 264.1,
    "socList": 8.5,
    "netLoadList": 36.5,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "2:02",
    "storageOutputList": 81.6,
    "powerGridList": 262.08,
    "socList": 8.58,
    "netLoadList": 36.1,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "2:03",
    "storageOutputList": 81.7,
    "powerGridList": 277.46,
    "socList": 8.64,
    "netLoadList": 39.15,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "2:04",
    "storageOutputList": 81.6,
    "powerGridList": 265.6,
    "socList": 8.64,
    "netLoadList": 36.8,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "2:05",
    "storageOutputList": 81.4,
    "powerGridList": 249.22,
    "socList": 8.72,
    "netLoadList": 33.56,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "2:06",
    "storageOutputList": 81.4,
    "powerGridList": 253,
    "socList": 8.8,
    "netLoadList": 34.32,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "2:07",
    "storageOutputList": 81.4,
    "powerGridList": 259.82,
    "socList": 8.88,
    "netLoadList": 35.68,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "2:08",
    "storageOutputList": 81.6,
    "powerGridList": 241.42,
    "socList": 8.98,
    "netLoadList": 31.96,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "2:09",
    "storageOutputList": 81.5,
    "powerGridList": 263.6,
    "socList": 8.98,
    "netLoadList": 36.42,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "2:10",
    "storageOutputList": 81.4,
    "powerGridList": 249.48,
    "socList": 9.06,
    "netLoadList": 33.62,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "2:11",
    "storageOutputList": 81.5,
    "powerGridList": 257.04,
    "socList": 9.12,
    "netLoadList": 35.11,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "2:12",
    "storageOutputList": 81.5,
    "powerGridList": 260.56,
    "socList": 9.2,
    "netLoadList": 35.81,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "2:13",
    "storageOutputList": 81.5,
    "powerGridList": 259.82,
    "socList": 9.28,
    "netLoadList": 35.66,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "2:14",
    "storageOutputList": 81.4,
    "powerGridList": 264.1,
    "socList": 9.28,
    "netLoadList": 36.54,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "2:15",
    "storageOutputList": 81.5,
    "powerGridList": 261.08,
    "socList": 9.36,
    "netLoadList": 35.92,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "2:16",
    "storageOutputList": 81.4,
    "powerGridList": 257.54,
    "socList": 9.44,
    "netLoadList": 35.23,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "2:17",
    "storageOutputList": 81.5,
    "powerGridList": 261.32,
    "socList": 9.52,
    "netLoadList": 35.96,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "2:18",
    "storageOutputList": 81.5,
    "powerGridList": 267.62,
    "socList": 9.52,
    "netLoadList": 37.22,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "2:19",
    "storageOutputList": 81.5,
    "powerGridList": 275.68,
    "socList": 9.6,
    "netLoadList": 38.84,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "2:20",
    "storageOutputList": 85.3,
    "powerGridList": 285.26,
    "socList": 9.68,
    "netLoadList": 39.99,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "2:21",
    "storageOutputList": 84.3,
    "powerGridList": 306.68,
    "socList": 9.76,
    "netLoadList": 44.48,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "2:22",
    "storageOutputList": 84.3,
    "powerGridList": 299.38,
    "socList": 9.84,
    "netLoadList": 43.02,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "2:23",
    "storageOutputList": 84.4,
    "powerGridList": 300.64,
    "socList": 9.84,
    "netLoadList": 43.25,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "2:24",
    "storageOutputList": 84.3,
    "powerGridList": 299.12,
    "socList": 9.9,
    "netLoadList": 42.96,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "2:25",
    "storageOutputList": 84.3,
    "powerGridList": 298.12,
    "socList": 9.98,
    "netLoadList": 42.76,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "2:26",
    "storageOutputList": 84.4,
    "powerGridList": 299.62,
    "socList": 10.06,
    "netLoadList": 43.04,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "2:27",
    "storageOutputList": 84.4,
    "powerGridList": 294.08,
    "socList": 10.14,
    "netLoadList": 41.94,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "2:28",
    "storageOutputList": 84.4,
    "powerGridList": 292.58,
    "socList": 10.14,
    "netLoadList": 41.64,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "2:29",
    "storageOutputList": 84.4,
    "powerGridList": 324.58,
    "socList": 10.22,
    "netLoadList": 48.04,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "2:30",
    "storageOutputList": 84.4,
    "powerGridList": 320.3,
    "socList": 10.28,
    "netLoadList": 47.18,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "2:31",
    "storageOutputList": 84.4,
    "powerGridList": 309.7,
    "socList": 10.36,
    "netLoadList": 45.06,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "2:32",
    "storageOutputList": 84.3,
    "powerGridList": 318.52,
    "socList": 10.44,
    "netLoadList": 46.84,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "2:33",
    "storageOutputList": 84.3,
    "powerGridList": 319.54,
    "socList": 10.44,
    "netLoadList": 47.05,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "2:34",
    "storageOutputList": 81.6,
    "powerGridList": 319.78,
    "socList": 10.52,
    "netLoadList": 47.64,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "2:35",
    "storageOutputList": 81.4,
    "powerGridList": 309.2,
    "socList": 10.6,
    "netLoadList": 45.56,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "2:36",
    "storageOutputList": 81.5,
    "powerGridList": 308.44,
    "socList": 10.68,
    "netLoadList": 45.39,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "2:37",
    "storageOutputList": 81.4,
    "powerGridList": 314.74,
    "socList": 10.76,
    "netLoadList": 46.67,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "2:38",
    "storageOutputList": 81.5,
    "powerGridList": 318.52,
    "socList": 10.76,
    "netLoadList": 47.4,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "2:39",
    "storageOutputList": 81.5,
    "powerGridList": 319.54,
    "socList": 10.84,
    "netLoadList": 47.61,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "2:40",
    "storageOutputList": 81.5,
    "powerGridList": 324.32,
    "socList": 10.92,
    "netLoadList": 48.56,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "2:41",
    "storageOutputList": 81.5,
    "powerGridList": 324.08,
    "socList": 11,
    "netLoadList": 48.52,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "2:42",
    "storageOutputList": 81.4,
    "powerGridList": 328.86,
    "socList": 11.08,
    "netLoadList": 49.49,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "2:43",
    "storageOutputList": 81.4,
    "powerGridList": 323.82,
    "socList": 11.08,
    "netLoadList": 48.48,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "2:44",
    "storageOutputList": 81.4,
    "powerGridList": 321.04,
    "socList": 11.16,
    "netLoadList": 47.93,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "2:45",
    "storageOutputList": 81.4,
    "powerGridList": 324.82,
    "socList": 11.24,
    "netLoadList": 48.68,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "2:46",
    "storageOutputList": 81.5,
    "powerGridList": 320.04,
    "socList": 11.32,
    "netLoadList": 47.71,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "2:47",
    "storageOutputList": 81.5,
    "powerGridList": 322.06,
    "socList": 11.32,
    "netLoadList": 48.11,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "2:48",
    "storageOutputList": 81.5,
    "powerGridList": 320.3,
    "socList": 11.4,
    "netLoadList": 47.76,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "2:49",
    "storageOutputList": 81.5,
    "powerGridList": 325.84,
    "socList": 11.48,
    "netLoadList": 48.87,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "2:50",
    "storageOutputList": 81.4,
    "powerGridList": 341.2,
    "socList": 11.54,
    "netLoadList": 51.96,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "2:51",
    "storageOutputList": 81.5,
    "powerGridList": 344.48,
    "socList": 11.62,
    "netLoadList": 52.6,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "2:52",
    "storageOutputList": 81.5,
    "powerGridList": 324.82,
    "socList": 11.62,
    "netLoadList": 48.66,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "2:53",
    "storageOutputList": 81.5,
    "powerGridList": 320.3,
    "socList": 11.7,
    "netLoadList": 47.76,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "2:54",
    "storageOutputList": 81.4,
    "powerGridList": 341.2,
    "socList": 11.78,
    "netLoadList": 51.96,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "2:55",
    "storageOutputList": 81.5,
    "powerGridList": 326.6,
    "socList": 11.86,
    "netLoadList": 49.02,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "2:56",
    "storageOutputList": 84.9,
    "powerGridList": 335.92,
    "socList": 11.94,
    "netLoadList": 50.2,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "2:57",
    "storageOutputList": 84.4,
    "powerGridList": 335.92,
    "socList": 11.94,
    "netLoadList": 50.3,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "2:58",
    "storageOutputList": 84.3,
    "powerGridList": 317.02,
    "socList": 12.02,
    "netLoadList": 46.54,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "2:59",
    "storageOutputList": 84.3,
    "powerGridList": 319.78,
    "socList": 12.1,
    "netLoadList": 47.1,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "3:00",
    "storageOutputList": 84.4,
    "powerGridList": 325.08,
    "socList": 12.18,
    "netLoadList": 48.14,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "3:01",
    "storageOutputList": 84.3,
    "powerGridList": 339.2,
    "socList": 12.18,
    "netLoadList": 50.98,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "3:02",
    "storageOutputList": 84.4,
    "powerGridList": 328.86,
    "socList": 12.26,
    "netLoadList": 48.89,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "3:03",
    "storageOutputList": 84.3,
    "powerGridList": 344.98,
    "socList": 12.34,
    "netLoadList": 52.14,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "3:04",
    "storageOutputList": 84.4,
    "powerGridList": 344.24,
    "socList": 12.4,
    "netLoadList": 51.97,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "3:05",
    "storageOutputList": 84.5,
    "powerGridList": 373.96,
    "socList": 12.48,
    "netLoadList": 57.89,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "3:06",
    "storageOutputList": 84.4,
    "powerGridList": 370.94,
    "socList": 12.48,
    "netLoadList": 57.31,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "3:07",
    "storageOutputList": 84.4,
    "powerGridList": 365.14,
    "socList": 12.56,
    "netLoadList": 56.15,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "3:08",
    "storageOutputList": 84.3,
    "powerGridList": 367.42,
    "socList": 12.64,
    "netLoadList": 56.62,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "3:09",
    "storageOutputList": 84.4,
    "powerGridList": 366.16,
    "socList": 12.72,
    "netLoadList": 56.35,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "3:10",
    "storageOutputList": 81.5,
    "powerGridList": 378,
    "socList": 12.8,
    "netLoadList": 59.3,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "3:11",
    "storageOutputList": 81.5,
    "powerGridList": 356.08,
    "socList": 12.8,
    "netLoadList": 54.92,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "3:12",
    "storageOutputList": 81.5,
    "powerGridList": 358.34,
    "socList": 12.86,
    "netLoadList": 55.37,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "3:13",
    "storageOutputList": 81.5,
    "powerGridList": 351.04,
    "socList": 12.94,
    "netLoadList": 53.91,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "3:14",
    "storageOutputList": 81.5,
    "powerGridList": 352.8,
    "socList": 13.02,
    "netLoadList": 54.26,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "3:15",
    "storageOutputList": 81.4,
    "powerGridList": 353.3,
    "socList": 13.02,
    "netLoadList": 54.38,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "3:16",
    "storageOutputList": 81.4,
    "powerGridList": 356.58,
    "socList": 13.1,
    "netLoadList": 55.04,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "3:17",
    "storageOutputList": 81.5,
    "powerGridList": 363.14,
    "socList": 13.18,
    "netLoadList": 56.33,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "3:18",
    "storageOutputList": 81.5,
    "powerGridList": 362.62,
    "socList": 13.26,
    "netLoadList": 56.22,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "3:19",
    "storageOutputList": 81.4,
    "powerGridList": 357.08,
    "socList": 13.34,
    "netLoadList": 55.14,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "3:20",
    "storageOutputList": 81.4,
    "powerGridList": 350.02,
    "socList": 13.34,
    "netLoadList": 53.72,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "3:21",
    "storageOutputList": 81.4,
    "powerGridList": 362.62,
    "socList": 13.42,
    "netLoadList": 56.24,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "3:22",
    "storageOutputList": 81.5,
    "powerGridList": 330.88,
    "socList": 13.5,
    "netLoadList": 49.88,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "3:23",
    "storageOutputList": 81.4,
    "powerGridList": 359.6,
    "socList": 13.58,
    "netLoadList": 55.64,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "3:24",
    "storageOutputList": 81.5,
    "powerGridList": 331.88,
    "socList": 13.58,
    "netLoadList": 50.08,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "3:25",
    "storageOutputList": 81.4,
    "powerGridList": 351.04,
    "socList": 13.66,
    "netLoadList": 53.93,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "3:26",
    "storageOutputList": 81.5,
    "powerGridList": 353.3,
    "socList": 13.74,
    "netLoadList": 54.36,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "3:27",
    "storageOutputList": 81.5,
    "powerGridList": 373.96,
    "socList": 13.82,
    "netLoadList": 58.49,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "3:28",
    "storageOutputList": 81.4,
    "powerGridList": 350.02,
    "socList": 13.9,
    "netLoadList": 53.72,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "3:29",
    "storageOutputList": 81.5,
    "powerGridList": 274.68,
    "socList": 13.9,
    "netLoadList": 38.64,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "3:30",
    "storageOutputList": 81.4,
    "powerGridList": 288.28,
    "socList": 13.98,
    "netLoadList": 41.38,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "3:31",
    "storageOutputList": 81.3,
    "powerGridList": 262.34,
    "socList": 14.04,
    "netLoadList": 36.21,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "3:32",
    "storageOutputList": 81.5,
    "powerGridList": 266.36,
    "socList": 14.12,
    "netLoadList": 36.97,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "3:33",
    "storageOutputList": 81.5,
    "powerGridList": 262.34,
    "socList": 14.2,
    "netLoadList": 36.17,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "3:34",
    "storageOutputList": 81.5,
    "powerGridList": 239.14,
    "socList": 14.2,
    "netLoadList": 31.53,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "3:35",
    "storageOutputList": 81.5,
    "powerGridList": 242.18,
    "socList": 14.28,
    "netLoadList": 32.14,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "3:36",
    "storageOutputList": 81.4,
    "powerGridList": 233.1,
    "socList": 14.36,
    "netLoadList": 30.34,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "3:37",
    "storageOutputList": 84.7,
    "powerGridList": 246.2,
    "socList": 14.44,
    "netLoadList": 32.3,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "3:38",
    "storageOutputList": 84.4,
    "powerGridList": 249.74,
    "socList": 14.44,
    "netLoadList": 33.07,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "3:39",
    "storageOutputList": 84.4,
    "powerGridList": 230.84,
    "socList": 14.52,
    "netLoadList": 29.29,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "3:40",
    "storageOutputList": 84.4,
    "powerGridList": 234.1,
    "socList": 14.6,
    "netLoadList": 29.94,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "3:41",
    "storageOutputList": 84.4,
    "powerGridList": 228.32,
    "socList": 14.68,
    "netLoadList": 28.78,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "3:42",
    "storageOutputList": 84.4,
    "powerGridList": 233.86,
    "socList": 14.76,
    "netLoadList": 29.89,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "3:43",
    "storageOutputList": 84.3,
    "powerGridList": 238.64,
    "socList": 14.76,
    "netLoadList": 30.87,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "3:44",
    "storageOutputList": 84.3,
    "powerGridList": 230.58,
    "socList": 14.82,
    "netLoadList": 29.26,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "3:45",
    "storageOutputList": 84.4,
    "powerGridList": 241.66,
    "socList": 14.9,
    "netLoadList": 31.45,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "3:46",
    "storageOutputList": 84.3,
    "powerGridList": 334.66,
    "socList": 14.98,
    "netLoadList": 50.07,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "3:47",
    "storageOutputList": 84.4,
    "powerGridList": 311.72,
    "socList": 15.06,
    "netLoadList": 45.46,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "3:48",
    "storageOutputList": 84.4,
    "powerGridList": 239.14,
    "socList": 15.06,
    "netLoadList": 30.95,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "3:49",
    "storageOutputList": 81.6,
    "powerGridList": 230.32,
    "socList": 15.14,
    "netLoadList": 29.74,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "3:50",
    "storageOutputList": 81.5,
    "powerGridList": 244.94,
    "socList": 15.22,
    "netLoadList": 32.69,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "3:51",
    "storageOutputList": 81.5,
    "powerGridList": 316.26,
    "socList": 15.3,
    "netLoadList": 46.95,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "3:52",
    "storageOutputList": 81.4,
    "powerGridList": 323.32,
    "socList": 15.3,
    "netLoadList": 48.38,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "3:53",
    "storageOutputList": 81.5,
    "powerGridList": 326.34,
    "socList": 15.38,
    "netLoadList": 48.97,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "3:54",
    "storageOutputList": 81.4,
    "powerGridList": 302.4,
    "socList": 15.44,
    "netLoadList": 44.2,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "3:55",
    "storageOutputList": 81.5,
    "powerGridList": 355.32,
    "socList": 15.52,
    "netLoadList": 54.76,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "3:56",
    "storageOutputList": 81.5,
    "powerGridList": 370.7,
    "socList": 15.6,
    "netLoadList": 57.84,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "3:57",
    "storageOutputList": 81.5,
    "powerGridList": 352.8,
    "socList": 15.6,
    "netLoadList": 54.26,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "3:58",
    "storageOutputList": 81.4,
    "powerGridList": 329.86,
    "socList": 15.68,
    "netLoadList": 49.69,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "3:59",
    "storageOutputList": 81.5,
    "powerGridList": 333.64,
    "socList": 15.76,
    "netLoadList": 50.43,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "4:00",
    "storageOutputList": 81.4,
    "powerGridList": 341.2,
    "socList": 15.84,
    "netLoadList": 51.96,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "4:01",
    "storageOutputList": 81.5,
    "powerGridList": 321.56,
    "socList": 15.92,
    "netLoadList": 48.01,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "4:02",
    "storageOutputList": 81.5,
    "powerGridList": 319.54,
    "socList": 15.92,
    "netLoadList": 47.61,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "4:03",
    "storageOutputList": 81.5,
    "powerGridList": 327.86,
    "socList": 16,
    "netLoadList": 49.27,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "4:04",
    "storageOutputList": 81.5,
    "powerGridList": 324.58,
    "socList": 16.08,
    "netLoadList": 48.62,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "4:05",
    "storageOutputList": 81.4,
    "powerGridList": 344.24,
    "socList": 16.16,
    "netLoadList": 52.57,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "4:06",
    "storageOutputList": 81.5,
    "powerGridList": 351.28,
    "socList": 16.16,
    "netLoadList": 53.96,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "4:07",
    "storageOutputList": 81.4,
    "powerGridList": 344.48,
    "socList": 16.24,
    "netLoadList": 52.62,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "4:08",
    "storageOutputList": 81.4,
    "powerGridList": 341.72,
    "socList": 16.32,
    "netLoadList": 52.06,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "4:09",
    "storageOutputList": 81.5,
    "powerGridList": 355.32,
    "socList": 16.4,
    "netLoadList": 54.76,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "4:10",
    "storageOutputList": 81.5,
    "powerGridList": 345.5,
    "socList": 16.46,
    "netLoadList": 52.8,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "4:11",
    "storageOutputList": 81.4,
    "powerGridList": 344.98,
    "socList": 16.46,
    "netLoadList": 52.72,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "4:12",
    "storageOutputList": 81.4,
    "powerGridList": 341.2,
    "socList": 16.54,
    "netLoadList": 51.96,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "4:13",
    "storageOutputList": 81.3,
    "powerGridList": 343.22,
    "socList": 16.62,
    "netLoadList": 52.38,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "4:14",
    "storageOutputList": 81.4,
    "powerGridList": 346.5,
    "socList": 16.7,
    "netLoadList": 53.02,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "4:15",
    "storageOutputList": 81.5,
    "powerGridList": 347,
    "socList": 16.7,
    "netLoadList": 53.1,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "4:16",
    "storageOutputList": 81.4,
    "powerGridList": 340.7,
    "socList": 16.78,
    "netLoadList": 51.86,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "4:17",
    "storageOutputList": 81.5,
    "powerGridList": 346,
    "socList": 16.86,
    "netLoadList": 52.9,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "4:18",
    "storageOutputList": 81.5,
    "powerGridList": 332.38,
    "socList": 16.94,
    "netLoadList": 50.18,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "4:19",
    "storageOutputList": 81.4,
    "powerGridList": 335.66,
    "socList": 17.02,
    "netLoadList": 50.85,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "4:20",
    "storageOutputList": 81.4,
    "powerGridList": 298.36,
    "socList": 17.02,
    "netLoadList": 43.39,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "4:21",
    "storageOutputList": 81.5,
    "powerGridList": 304.16,
    "socList": 17.1,
    "netLoadList": 44.53,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "4:22",
    "storageOutputList": 84.5,
    "powerGridList": 303.66,
    "socList": 17.18,
    "netLoadList": 43.83,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "4:23",
    "storageOutputList": 84.5,
    "powerGridList": 310.22,
    "socList": 17.26,
    "netLoadList": 45.14,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "4:24",
    "storageOutputList": 84.4,
    "powerGridList": 311.48,
    "socList": 17.26,
    "netLoadList": 45.42,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "4:25",
    "storageOutputList": 84.3,
    "powerGridList": 306.18,
    "socList": 17.32,
    "netLoadList": 44.38,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "4:26",
    "storageOutputList": 84.4,
    "powerGridList": 307.7,
    "socList": 17.4,
    "netLoadList": 44.66,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "4:27",
    "storageOutputList": 84.4,
    "powerGridList": 312.98,
    "socList": 17.48,
    "netLoadList": 45.72,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "4:28",
    "storageOutputList": 84.4,
    "powerGridList": 314.5,
    "socList": 17.56,
    "netLoadList": 46.02,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "4:29",
    "storageOutputList": 84.3,
    "powerGridList": 321.3,
    "socList": 17.56,
    "netLoadList": 47.4,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "4:30",
    "storageOutputList": 84.3,
    "powerGridList": 315.5,
    "socList": 17.64,
    "netLoadList": 46.24,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "4:31",
    "storageOutputList": 84.3,
    "powerGridList": 319.78,
    "socList": 17.72,
    "netLoadList": 47.1,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "4:32",
    "storageOutputList": 84.3,
    "powerGridList": 308.44,
    "socList": 17.8,
    "netLoadList": 44.83,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "4:33",
    "storageOutputList": 81.5,
    "powerGridList": 370.94,
    "socList": 17.88,
    "netLoadList": 57.89,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "4:34",
    "storageOutputList": 81.5,
    "powerGridList": 369.68,
    "socList": 17.88,
    "netLoadList": 57.64,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "4:35",
    "storageOutputList": 81.5,
    "powerGridList": 348.26,
    "socList": 17.96,
    "netLoadList": 53.35,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "4:36",
    "storageOutputList": 81.4,
    "powerGridList": 335.16,
    "socList": 18.02,
    "netLoadList": 50.75,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "4:37",
    "storageOutputList": 81.5,
    "powerGridList": 322.56,
    "socList": 18.1,
    "netLoadList": 48.21,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "4:38",
    "storageOutputList": 81.4,
    "powerGridList": 333.64,
    "socList": 18.1,
    "netLoadList": 50.45,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "4:39",
    "storageOutputList": 81.5,
    "powerGridList": 348.26,
    "socList": 18.18,
    "netLoadList": 53.35,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "4:40",
    "storageOutputList": 81.4,
    "powerGridList": 341.72,
    "socList": 18.26,
    "netLoadList": 52.06,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "4:41",
    "storageOutputList": 81.5,
    "powerGridList": 319.54,
    "socList": 18.34,
    "netLoadList": 47.61,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "4:42",
    "storageOutputList": 81.4,
    "powerGridList": 333.9,
    "socList": 18.42,
    "netLoadList": 50.5,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "4:43",
    "storageOutputList": 81.4,
    "powerGridList": 335.16,
    "socList": 18.42,
    "netLoadList": 50.75,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "4:44",
    "storageOutputList": 81.5,
    "powerGridList": 334.9,
    "socList": 18.5,
    "netLoadList": 50.68,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "4:45",
    "storageOutputList": 81.4,
    "powerGridList": 330.88,
    "socList": 18.58,
    "netLoadList": 49.9,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "4:46",
    "storageOutputList": 81.5,
    "powerGridList": 340.7,
    "socList": 18.66,
    "netLoadList": 51.84,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "4:47",
    "storageOutputList": 81.4,
    "powerGridList": 326.6,
    "socList": 18.74,
    "netLoadList": 49.04,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "4:48",
    "storageOutputList": 81.4,
    "powerGridList": 350.78,
    "socList": 18.74,
    "netLoadList": 53.88,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "4:49",
    "storageOutputList": 81.5,
    "powerGridList": 351.04,
    "socList": 18.82,
    "netLoadList": 53.91,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "4:50",
    "storageOutputList": 81.5,
    "powerGridList": 354.06,
    "socList": 18.88,
    "netLoadList": 54.51,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "4:51",
    "storageOutputList": 81.4,
    "powerGridList": 356.58,
    "socList": 18.96,
    "netLoadList": 55.04,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "4:52",
    "storageOutputList": 81.3,
    "powerGridList": 341.2,
    "socList": 18.96,
    "netLoadList": 51.98,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "4:53",
    "storageOutputList": 81.5,
    "powerGridList": 337.42,
    "socList": 19.04,
    "netLoadList": 51.18,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "4:54",
    "storageOutputList": 81.5,
    "powerGridList": 323.82,
    "socList": 19.12,
    "netLoadList": 48.46,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "4:55",
    "storageOutputList": 81.3,
    "powerGridList": 302.9,
    "socList": 19.2,
    "netLoadList": 44.32,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "4:56",
    "storageOutputList": 81.5,
    "powerGridList": 342.46,
    "socList": 19.28,
    "netLoadList": 52.19,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "4:57",
    "storageOutputList": 73.2,
    "powerGridList": 340.7,
    "socList": 19.28,
    "netLoadList": 53.5,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "4:58",
    "storageOutputList": 65.2,
    "powerGridList": 311.48,
    "socList": 19.36,
    "netLoadList": 49.26,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "4:59",
    "storageOutputList": 65.2,
    "powerGridList": 327.1,
    "socList": 19.36,
    "netLoadList": 52.38,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "5:00",
    "storageOutputList": 57.3,
    "powerGridList": 320.8,
    "socList": 19.44,
    "netLoadList": 52.7,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "5:01",
    "storageOutputList": 49.3,
    "powerGridList": 312.74,
    "socList": 19.52,
    "netLoadList": 52.69,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "5:02",
    "storageOutputList": 49.3,
    "powerGridList": 294.08,
    "socList": 19.52,
    "netLoadList": 48.96,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "5:03",
    "storageOutputList": 49.3,
    "powerGridList": 299.62,
    "socList": 19.52,
    "netLoadList": 50.06,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "5:04",
    "storageOutputList": 4,
    "powerGridList": 247.96,
    "socList": 20,
    "netLoadList": 48.79,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "5:05",
    "storageOutputList": 3.9,
    "powerGridList": 242.92,
    "socList": 20,
    "netLoadList": 47.8,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "5:06",
    "storageOutputList": 3.8,
    "powerGridList": 270.14,
    "socList": 20,
    "netLoadList": 53.27,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "5:07",
    "storageOutputList": 3.1,
    "powerGridList": 224.78,
    "socList": 20,
    "netLoadList": 44.34,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "5:08",
    "storageOutputList": 0.4,
    "powerGridList": 242.92,
    "socList": 20,
    "netLoadList": 48.5,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "5:09",
    "storageOutputList": 0.4,
    "powerGridList": 249.22,
    "socList": 20,
    "netLoadList": 49.76,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "5:10",
    "storageOutputList": 0.3,
    "powerGridList": 244.94,
    "socList": 20,
    "netLoadList": 48.93,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "5:11",
    "storageOutputList": 0.3,
    "powerGridList": 262.58,
    "socList": 20,
    "netLoadList": 52.46,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "5:12",
    "storageOutputList": 0.3,
    "powerGridList": 257.8,
    "socList": 20,
    "netLoadList": 51.5,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "5:13",
    "storageOutputList": 0.3,
    "powerGridList": 263.08,
    "socList": 20,
    "netLoadList": 52.56,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "5:14",
    "storageOutputList": 0.3,
    "powerGridList": 247.96,
    "socList": 20,
    "netLoadList": 49.53,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "5:15",
    "storageOutputList": 0.9,
    "powerGridList": 247.72,
    "socList": 20,
    "netLoadList": 49.36,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "5:16",
    "storageOutputList": 0.8,
    "powerGridList": 234.1,
    "socList": 20,
    "netLoadList": 46.66,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "5:17",
    "storageOutputList": 0.8,
    "powerGridList": 251.5,
    "socList": 20,
    "netLoadList": 50.14,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "5:18",
    "storageOutputList": 0.8,
    "powerGridList": 231.34,
    "socList": 20,
    "netLoadList": 46.11,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "5:19",
    "storageOutputList": 0.8,
    "powerGridList": 259.56,
    "socList": 20,
    "netLoadList": 51.75,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "5:20",
    "storageOutputList": 0.8,
    "powerGridList": 265.6,
    "socList": 20,
    "netLoadList": 52.96,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "5:21",
    "storageOutputList": 0.8,
    "powerGridList": 266.86,
    "socList": 20,
    "netLoadList": 53.21,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "5:22",
    "storageOutputList": 0.8,
    "powerGridList": 262.08,
    "socList": 20,
    "netLoadList": 52.26,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "5:23",
    "storageOutputList": 0.8,
    "powerGridList": 262.34,
    "socList": 20,
    "netLoadList": 52.31,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "5:24",
    "storageOutputList": 0.8,
    "powerGridList": 254.02,
    "socList": 20,
    "netLoadList": 50.64,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "5:25",
    "storageOutputList": 0.8,
    "powerGridList": 251,
    "socList": 20,
    "netLoadList": 50.04,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "5:26",
    "storageOutputList": 0.8,
    "powerGridList": 245.44,
    "socList": 20,
    "netLoadList": 48.93,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "5:27",
    "storageOutputList": 0.3,
    "powerGridList": 260.32,
    "socList": 20,
    "netLoadList": 52,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "5:28",
    "storageOutputList": 0.3,
    "powerGridList": 271.4,
    "socList": 20,
    "netLoadList": 54.22,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "5:29",
    "storageOutputList": 0.3,
    "powerGridList": 268.88,
    "socList": 20,
    "netLoadList": 53.72,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "5:30",
    "storageOutputList": 0.3,
    "powerGridList": 249.98,
    "socList": 20,
    "netLoadList": 49.94,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "5:31",
    "storageOutputList": 0.3,
    "powerGridList": 247.46,
    "socList": 20,
    "netLoadList": 49.43,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "5:32",
    "storageOutputList": 0.3,
    "powerGridList": 268.64,
    "socList": 20,
    "netLoadList": 53.67,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "5:33",
    "storageOutputList": 0.3,
    "powerGridList": 264.34,
    "socList": 20,
    "netLoadList": 52.81,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "5:34",
    "storageOutputList": 0.3,
    "powerGridList": 233.86,
    "socList": 20,
    "netLoadList": 46.71,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "5:35",
    "storageOutputList": 0.3,
    "powerGridList": 263.6,
    "socList": 20,
    "netLoadList": 52.66,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "5:36",
    "storageOutputList": 0.3,
    "powerGridList": 281.24,
    "socList": 20,
    "netLoadList": 56.19,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "5:37",
    "storageOutputList": 0.3,
    "powerGridList": 252.5,
    "socList": 20,
    "netLoadList": 50.44,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "5:38",
    "storageOutputList": 0.3,
    "powerGridList": 254.78,
    "socList": 20,
    "netLoadList": 50.9,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "5:39",
    "storageOutputList": 0.3,
    "powerGridList": 257.3,
    "socList": 20,
    "netLoadList": 51.4,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "5:40",
    "storageOutputList": 0.3,
    "powerGridList": 247.22,
    "socList": 20,
    "netLoadList": 49.38,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "5:41",
    "storageOutputList": 0.3,
    "powerGridList": 241.92,
    "socList": 20,
    "netLoadList": 48.32,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "5:42",
    "storageOutputList": 0.3,
    "powerGridList": 253,
    "socList": 20,
    "netLoadList": 50.54,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "5:43",
    "storageOutputList": 0.3,
    "powerGridList": 253.52,
    "socList": 20,
    "netLoadList": 50.64,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "5:44",
    "storageOutputList": 0.3,
    "powerGridList": 257.04,
    "socList": 20,
    "netLoadList": 51.35,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "5:45",
    "storageOutputList": 0.3,
    "powerGridList": 260.56,
    "socList": 20,
    "netLoadList": 52.05,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "5:46",
    "storageOutputList": 0.3,
    "powerGridList": 261.08,
    "socList": 20,
    "netLoadList": 52.16,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "5:47",
    "storageOutputList": 0.3,
    "powerGridList": 256.04,
    "socList": 20,
    "netLoadList": 51.15,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "5:48",
    "storageOutputList": 0.3,
    "powerGridList": 266.12,
    "socList": 20,
    "netLoadList": 53.16,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "5:49",
    "storageOutputList": 0.3,
    "powerGridList": 252.26,
    "socList": 20,
    "netLoadList": 50.39,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "5:50",
    "storageOutputList": 0.3,
    "powerGridList": 265.36,
    "socList": 20,
    "netLoadList": 53.01,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "5:51",
    "storageOutputList": 0.3,
    "powerGridList": 260.56,
    "socList": 20,
    "netLoadList": 52.05,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "5:52",
    "storageOutputList": 0.3,
    "powerGridList": 262.84,
    "socList": 20,
    "netLoadList": 52.51,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "5:53",
    "storageOutputList": 0.3,
    "powerGridList": 253.52,
    "socList": 20,
    "netLoadList": 50.64,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "5:54",
    "storageOutputList": 0.3,
    "powerGridList": 261.08,
    "socList": 20,
    "netLoadList": 52.16,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "5:55",
    "storageOutputList": 0.3,
    "powerGridList": 257.04,
    "socList": 20,
    "netLoadList": 51.35,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "5:56",
    "storageOutputList": 0.3,
    "powerGridList": 262.08,
    "socList": 20,
    "netLoadList": 52.36,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "5:57",
    "storageOutputList": 0.3,
    "powerGridList": 249.98,
    "socList": 20,
    "netLoadList": 49.94,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "5:58",
    "storageOutputList": 0.3,
    "powerGridList": 261.32,
    "socList": 20,
    "netLoadList": 52.2,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "5:59",
    "storageOutputList": 0.3,
    "powerGridList": 266.36,
    "socList": 20,
    "netLoadList": 53.21,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "6:00",
    "storageOutputList": 0.3,
    "powerGridList": 265.86,
    "socList": 20,
    "netLoadList": 53.11,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "6:01",
    "storageOutputList": 0.3,
    "powerGridList": 249.74,
    "socList": 20,
    "netLoadList": 49.89,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "6:02",
    "storageOutputList": 0.3,
    "powerGridList": 228.06,
    "socList": 20,
    "netLoadList": 45.55,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "6:03",
    "storageOutputList": 0.3,
    "powerGridList": 259.06,
    "socList": 20,
    "netLoadList": 51.75,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "6:04",
    "storageOutputList": 0.3,
    "powerGridList": 245.2,
    "socList": 20,
    "netLoadList": 48.98,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "6:05",
    "storageOutputList": 0.3,
    "powerGridList": 257.54,
    "socList": 20,
    "netLoadList": 51.45,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "6:06",
    "storageOutputList": 0.3,
    "powerGridList": 262.58,
    "socList": 20,
    "netLoadList": 52.46,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "6:07",
    "storageOutputList": 0.3,
    "powerGridList": 261.08,
    "socList": 20,
    "netLoadList": 52.16,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "6:08",
    "storageOutputList": 0.3,
    "powerGridList": 261.82,
    "socList": 20,
    "netLoadList": 52.3,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "6:09",
    "storageOutputList": 0.3,
    "powerGridList": 259.56,
    "socList": 20,
    "netLoadList": 51.85,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "6:10",
    "storageOutputList": 0.3,
    "powerGridList": 248.48,
    "socList": 20,
    "netLoadList": 49.64,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "6:11",
    "storageOutputList": 0.3,
    "powerGridList": 264.34,
    "socList": 20,
    "netLoadList": 52.81,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "6:12",
    "storageOutputList": 0.3,
    "powerGridList": 252.76,
    "socList": 20,
    "netLoadList": 50.49,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "6:13",
    "storageOutputList": 0.3,
    "powerGridList": 224.78,
    "socList": 20,
    "netLoadList": 44.9,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "6:14",
    "storageOutputList": 0.3,
    "powerGridList": 219.5,
    "socList": 20,
    "netLoadList": 43.84,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "6:15",
    "storageOutputList": 0.3,
    "powerGridList": 230.84,
    "socList": 20,
    "netLoadList": 46.11,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "6:16",
    "storageOutputList": 0.3,
    "powerGridList": 222.76,
    "socList": 20,
    "netLoadList": 44.49,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "6:17",
    "storageOutputList": 0.3,
    "powerGridList": 229.82,
    "socList": 20,
    "netLoadList": 45.9,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "6:18",
    "storageOutputList": 0.3,
    "powerGridList": 235.62,
    "socList": 20,
    "netLoadList": 47.06,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "6:19",
    "storageOutputList": 0.3,
    "powerGridList": 234.36,
    "socList": 20,
    "netLoadList": 46.81,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "6:20",
    "storageOutputList": 0.3,
    "powerGridList": 239.9,
    "socList": 20,
    "netLoadList": 47.92,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "6:21",
    "storageOutputList": 0.3,
    "powerGridList": 232.84,
    "socList": 20,
    "netLoadList": 46.51,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "6:22",
    "storageOutputList": 0.3,
    "powerGridList": 226.04,
    "socList": 20,
    "netLoadList": 45.15,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "6:23",
    "storageOutputList": 0.3,
    "powerGridList": 231.08,
    "socList": 20,
    "netLoadList": 46.16,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "6:24",
    "storageOutputList": 0.3,
    "powerGridList": 215.72,
    "socList": 20,
    "netLoadList": 43.08,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "6:25",
    "storageOutputList": 0.3,
    "powerGridList": 209.92,
    "socList": 20,
    "netLoadList": 41.92,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "6:26",
    "storageOutputList": 0.3,
    "powerGridList": 214.2,
    "socList": 20,
    "netLoadList": 42.78,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "6:27",
    "storageOutputList": 0.3,
    "powerGridList": 215.96,
    "socList": 20,
    "netLoadList": 43.13,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "6:28",
    "storageOutputList": 0.3,
    "powerGridList": 224.02,
    "socList": 20,
    "netLoadList": 44.74,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "6:29",
    "storageOutputList": 0.3,
    "powerGridList": 223.02,
    "socList": 20,
    "netLoadList": 44.54,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "6:30",
    "storageOutputList": 0.3,
    "powerGridList": 220,
    "socList": 20,
    "netLoadList": 43.94,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "6:31",
    "storageOutputList": 0.3,
    "powerGridList": 218.24,
    "socList": 20,
    "netLoadList": 43.59,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "6:32",
    "storageOutputList": 0.3,
    "powerGridList": 209.66,
    "socList": 20,
    "netLoadList": 41.87,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "6:33",
    "storageOutputList": 0.3,
    "powerGridList": 216.46,
    "socList": 20,
    "netLoadList": 43.23,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "6:34",
    "storageOutputList": 0.3,
    "powerGridList": 220.5,
    "socList": 20,
    "netLoadList": 44.04,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "6:35",
    "storageOutputList": 0.3,
    "powerGridList": 226.8,
    "socList": 20,
    "netLoadList": 45.3,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "6:36",
    "storageOutputList": 0.3,
    "powerGridList": 226.3,
    "socList": 20,
    "netLoadList": 45.2,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "6:37",
    "storageOutputList": 0.3,
    "powerGridList": 224.54,
    "socList": 20,
    "netLoadList": 44.85,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "6:38",
    "storageOutputList": 0.3,
    "powerGridList": 227.8,
    "socList": 20,
    "netLoadList": 45.5,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "6:39",
    "storageOutputList": 0.3,
    "powerGridList": 228.56,
    "socList": 20,
    "netLoadList": 45.65,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "6:40",
    "storageOutputList": 0.3,
    "powerGridList": 228.56,
    "socList": 20,
    "netLoadList": 45.65,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "6:41",
    "storageOutputList": 0.3,
    "powerGridList": 221.26,
    "socList": 20,
    "netLoadList": 44.19,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "6:42",
    "storageOutputList": 0.3,
    "powerGridList": 211.68,
    "socList": 20,
    "netLoadList": 42.28,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "6:43",
    "storageOutputList": 0.3,
    "powerGridList": 216.22,
    "socList": 20,
    "netLoadList": 43.18,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "6:44",
    "storageOutputList": 0.3,
    "powerGridList": 225.54,
    "socList": 20,
    "netLoadList": 45.05,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "6:45",
    "storageOutputList": 0.3,
    "powerGridList": 223.78,
    "socList": 20,
    "netLoadList": 44.7,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "6:46",
    "storageOutputList": 0.3,
    "powerGridList": 223.78,
    "socList": 20,
    "netLoadList": 44.7,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "6:47",
    "storageOutputList": 0.3,
    "powerGridList": 218.48,
    "socList": 20,
    "netLoadList": 43.64,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "6:48",
    "storageOutputList": 0.3,
    "powerGridList": 229.06,
    "socList": 20,
    "netLoadList": 45.75,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "6:49",
    "storageOutputList": 0.3,
    "powerGridList": 217.22,
    "socList": 20,
    "netLoadList": 43.38,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "6:50",
    "storageOutputList": 0.3,
    "powerGridList": 201.1,
    "socList": 20,
    "netLoadList": 40.16,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "6:51",
    "storageOutputList": 0.3,
    "powerGridList": 201.6,
    "socList": 20,
    "netLoadList": 40.26,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "6:52",
    "storageOutputList": 0.3,
    "powerGridList": 197.06,
    "socList": 20,
    "netLoadList": 39.35,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "6:53",
    "storageOutputList": 0.3,
    "powerGridList": 201.86,
    "socList": 20,
    "netLoadList": 40.31,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "6:54",
    "storageOutputList": 0.3,
    "powerGridList": 202.86,
    "socList": 20,
    "netLoadList": 40.51,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "6:55",
    "storageOutputList": 0.3,
    "powerGridList": 194.8,
    "socList": 20,
    "netLoadList": 38.9,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "6:56",
    "storageOutputList": 0.3,
    "powerGridList": 191.02,
    "socList": 20,
    "netLoadList": 38.14,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "6:57",
    "storageOutputList": 0.3,
    "powerGridList": 184.96,
    "socList": 20,
    "netLoadList": 36.93,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "6:58",
    "storageOutputList": 0.3,
    "powerGridList": 192.52,
    "socList": 20,
    "netLoadList": 38.44,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "6:59",
    "storageOutputList": 0.3,
    "powerGridList": 194.3,
    "socList": 20,
    "netLoadList": 38.8,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "7:00",
    "storageOutputList": 0.3,
    "powerGridList": 181.7,
    "socList": 20,
    "netLoadList": 36.28,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "7:01",
    "storageOutputList": 0.3,
    "powerGridList": 177.16,
    "socList": 20,
    "netLoadList": 35.37,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "7:02",
    "storageOutputList": 0.3,
    "powerGridList": 174.64,
    "socList": 20,
    "netLoadList": 34.87,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "7:03",
    "storageOutputList": 0.3,
    "powerGridList": 184.72,
    "socList": 20,
    "netLoadList": 36.88,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "7:04",
    "storageOutputList": 0.3,
    "powerGridList": 165.82,
    "socList": 20,
    "netLoadList": 33.1,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "7:05",
    "storageOutputList": 0.3,
    "powerGridList": 171.86,
    "socList": 20,
    "netLoadList": 34.31,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "7:06",
    "storageOutputList": 0.3,
    "powerGridList": 139.1,
    "socList": 20,
    "netLoadList": 27.76,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "7:07",
    "storageOutputList": 0.3,
    "powerGridList": 139.36,
    "socList": 20,
    "netLoadList": 27.81,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "7:08",
    "storageOutputList": 0.3,
    "powerGridList": 138.86,
    "socList": 20,
    "netLoadList": 27.71,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "7:09",
    "storageOutputList": 0.3,
    "powerGridList": 145.66,
    "socList": 20,
    "netLoadList": 29.07,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "7:10",
    "storageOutputList": 0.3,
    "powerGridList": 139.36,
    "socList": 20,
    "netLoadList": 27.81,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "7:11",
    "storageOutputList": 0.3,
    "powerGridList": 138.1,
    "socList": 20,
    "netLoadList": 27.56,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "7:12",
    "storageOutputList": 0.3,
    "powerGridList": 130.04,
    "socList": 20,
    "netLoadList": 25.95,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "7:13",
    "storageOutputList": 0.3,
    "powerGridList": 140.36,
    "socList": 20,
    "netLoadList": 28.01,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "7:14",
    "storageOutputList": 0.3,
    "powerGridList": 117.44,
    "socList": 20,
    "netLoadList": 23.43,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "7:15",
    "storageOutputList": 0.3,
    "powerGridList": 118.94,
    "socList": 20,
    "netLoadList": 23.73,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "7:16",
    "storageOutputList": 0.3,
    "powerGridList": 115.42,
    "socList": 20,
    "netLoadList": 23.02,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "7:17",
    "storageOutputList": 0.3,
    "powerGridList": 129.52,
    "socList": 20,
    "netLoadList": 25.84,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "7:18",
    "storageOutputList": 0.3,
    "powerGridList": 129.02,
    "socList": 20,
    "netLoadList": 25.74,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "7:19",
    "storageOutputList": 0.3,
    "powerGridList": 123.22,
    "socList": 20,
    "netLoadList": 24.58,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "7:20",
    "storageOutputList": 0.3,
    "powerGridList": 116.68,
    "socList": 20,
    "netLoadList": 23.28,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "7:21",
    "storageOutputList": 0.3,
    "powerGridList": 112.9,
    "socList": 20,
    "netLoadList": 22.52,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "7:22",
    "storageOutputList": 0.3,
    "powerGridList": 108.1,
    "socList": 20,
    "netLoadList": 21.56,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "7:23",
    "storageOutputList": 0.3,
    "powerGridList": 107.86,
    "socList": 20,
    "netLoadList": 21.51,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "7:24",
    "storageOutputList": 0.3,
    "powerGridList": 110.12,
    "socList": 20,
    "netLoadList": 21.96,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "7:25",
    "storageOutputList": 0.3,
    "powerGridList": 107.36,
    "socList": 20,
    "netLoadList": 21.41,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "7:26",
    "storageOutputList": 0.3,
    "powerGridList": 110.38,
    "socList": 20,
    "netLoadList": 22.02,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "7:27",
    "storageOutputList": 0.3,
    "powerGridList": 113.14,
    "socList": 20,
    "netLoadList": 22.57,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "7:28",
    "storageOutputList": 0.3,
    "powerGridList": 111.38,
    "socList": 20,
    "netLoadList": 22.22,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "7:29",
    "storageOutputList": 0.3,
    "powerGridList": 113.14,
    "socList": 20,
    "netLoadList": 22.57,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "7:30",
    "storageOutputList": 0.3,
    "powerGridList": 114.16,
    "socList": 20,
    "netLoadList": 22.77,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "7:31",
    "storageOutputList": 0.3,
    "powerGridList": 115.92,
    "socList": 20,
    "netLoadList": 23.12,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "7:32",
    "storageOutputList": 0.3,
    "powerGridList": 110.62,
    "socList": 20,
    "netLoadList": 22.06,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "7:33",
    "storageOutputList": 0.3,
    "powerGridList": 110.38,
    "socList": 20,
    "netLoadList": 22.02,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "7:34",
    "storageOutputList": 0.3,
    "powerGridList": 110.12,
    "socList": 20,
    "netLoadList": 21.96,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "7:35",
    "storageOutputList": 0.3,
    "powerGridList": 109.12,
    "socList": 20,
    "netLoadList": 21.76,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "7:36",
    "storageOutputList": 0.3,
    "powerGridList": 110.38,
    "socList": 20,
    "netLoadList": 22.02,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "7:37",
    "storageOutputList": 0.3,
    "powerGridList": 110.88,
    "socList": 20,
    "netLoadList": 22.12,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "7:38",
    "storageOutputList": 0.3,
    "powerGridList": 115.92,
    "socList": 20,
    "netLoadList": 23.12,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "7:39",
    "storageOutputList": 0.3,
    "powerGridList": 112.9,
    "socList": 20,
    "netLoadList": 22.52,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "7:40",
    "storageOutputList": 0.3,
    "powerGridList": 111.14,
    "socList": 20,
    "netLoadList": 22.17,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "7:41",
    "storageOutputList": 0.3,
    "powerGridList": 107.86,
    "socList": 20,
    "netLoadList": 21.51,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "7:42",
    "storageOutputList": 0.3,
    "powerGridList": 108.86,
    "socList": 20,
    "netLoadList": 21.71,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "7:43",
    "storageOutputList": 0.3,
    "powerGridList": 109.36,
    "socList": 20,
    "netLoadList": 21.81,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "7:44",
    "storageOutputList": 0.3,
    "powerGridList": 109.12,
    "socList": 20,
    "netLoadList": 21.76,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "7:45",
    "storageOutputList": 0.3,
    "powerGridList": 110.12,
    "socList": 20,
    "netLoadList": 21.96,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "7:46",
    "storageOutputList": 0.3,
    "powerGridList": 107.1,
    "socList": 20,
    "netLoadList": 21.36,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "7:47",
    "storageOutputList": 0.3,
    "powerGridList": 105.84,
    "socList": 20,
    "netLoadList": 21.11,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "7:48",
    "storageOutputList": 0.3,
    "powerGridList": 110.62,
    "socList": 20,
    "netLoadList": 22.06,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "7:49",
    "storageOutputList": 0.3,
    "powerGridList": 102.82,
    "socList": 20,
    "netLoadList": 20.5,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "7:50",
    "storageOutputList": 0.3,
    "powerGridList": 120.96,
    "socList": 20,
    "netLoadList": 24.13,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "7:51",
    "storageOutputList": 0.3,
    "powerGridList": 123.22,
    "socList": 20,
    "netLoadList": 24.58,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "7:52",
    "storageOutputList": 0.3,
    "powerGridList": 129.52,
    "socList": 20,
    "netLoadList": 25.84,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "7:53",
    "storageOutputList": 0.3,
    "powerGridList": 199.58,
    "socList": 20,
    "netLoadList": 39.86,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "7:54",
    "storageOutputList": 0.3,
    "powerGridList": 164.56,
    "socList": 20,
    "netLoadList": 32.85,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "7:55",
    "storageOutputList": 0.3,
    "powerGridList": 152.2,
    "socList": 20,
    "netLoadList": 30.38,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "7:56",
    "storageOutputList": 0.3,
    "powerGridList": 126.76,
    "socList": 20,
    "netLoadList": 25.29,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "7:57",
    "storageOutputList": 0.3,
    "powerGridList": 118.7,
    "socList": 20,
    "netLoadList": 23.68,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "7:58",
    "storageOutputList": 0.3,
    "powerGridList": 123.22,
    "socList": 20,
    "netLoadList": 24.58,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "7:59",
    "storageOutputList": 0.3,
    "powerGridList": 139.36,
    "socList": 20,
    "netLoadList": 27.81,
    "runningLlanList": 80,
    "priceList": 0.33,
    "时段": "谷"
   },
   {
    "date": "8:00",
    "storageOutputList": 0.3,
    "powerGridList": 140.86,
    "socList": 20,
    "netLoadList": 28.11,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "8:01",
    "storageOutputList": 0.3,
    "powerGridList": 166.58,
    "socList": 20,
    "netLoadList": 33.26,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "8:02",
    "storageOutputList": 0.3,
    "powerGridList": 139.1,
    "socList": 20,
    "netLoadList": 27.76,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "8:03",
    "storageOutputList": 0.3,
    "powerGridList": 146.42,
    "socList": 20,
    "netLoadList": 29.22,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "8:04",
    "storageOutputList": 0.3,
    "powerGridList": 145.66,
    "socList": 20,
    "netLoadList": 29.07,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "8:05",
    "storageOutputList": 0.3,
    "powerGridList": 170.36,
    "socList": 20,
    "netLoadList": 34.01,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "8:06",
    "storageOutputList": 0.3,
    "powerGridList": 152.72,
    "socList": 20,
    "netLoadList": 30.48,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "8:07",
    "storageOutputList": 0.3,
    "powerGridList": 152.96,
    "socList": 20,
    "netLoadList": 30.53,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "8:08",
    "storageOutputList": 0.3,
    "powerGridList": 152.96,
    "socList": 20,
    "netLoadList": 30.53,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "8:09",
    "storageOutputList": 0.3,
    "powerGridList": 158.26,
    "socList": 20,
    "netLoadList": 31.59,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "8:10",
    "storageOutputList": 0.3,
    "powerGridList": 152.96,
    "socList": 20,
    "netLoadList": 30.53,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "8:11",
    "storageOutputList": 0.3,
    "powerGridList": 151.46,
    "socList": 20,
    "netLoadList": 30.23,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "8:12",
    "storageOutputList": 0.3,
    "powerGridList": 197.32,
    "socList": 20,
    "netLoadList": 39.4,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "8:13",
    "storageOutputList": 0.3,
    "powerGridList": 158.76,
    "socList": 20,
    "netLoadList": 31.69,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "8:14",
    "storageOutputList": 0.3,
    "powerGridList": 168.08,
    "socList": 20,
    "netLoadList": 33.56,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "8:15",
    "storageOutputList": 0.3,
    "powerGridList": 162.28,
    "socList": 20,
    "netLoadList": 32.4,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "8:16",
    "storageOutputList": 0.3,
    "powerGridList": 174.88,
    "socList": 20,
    "netLoadList": 34.92,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "8:17",
    "storageOutputList": 0.3,
    "powerGridList": 183.7,
    "socList": 20,
    "netLoadList": 36.68,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "8:18",
    "storageOutputList": 0.3,
    "powerGridList": 181.18,
    "socList": 20,
    "netLoadList": 36.18,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "8:19",
    "storageOutputList": 0.3,
    "powerGridList": 214.7,
    "socList": 20,
    "netLoadList": 42.88,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "8:20",
    "storageOutputList": 0.3,
    "powerGridList": 181.7,
    "socList": 20,
    "netLoadList": 36.28,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "8:21",
    "storageOutputList": 0.3,
    "powerGridList": 168.58,
    "socList": 20,
    "netLoadList": 33.66,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "8:22",
    "storageOutputList": 0.3,
    "powerGridList": 171.62,
    "socList": 20,
    "netLoadList": 34.26,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "8:23",
    "storageOutputList": 0.3,
    "powerGridList": 206.9,
    "socList": 20,
    "netLoadList": 41.32,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "8:24",
    "storageOutputList": 0.3,
    "powerGridList": 175.9,
    "socList": 20,
    "netLoadList": 35.12,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "8:25",
    "storageOutputList": 0.3,
    "powerGridList": 169.6,
    "socList": 20,
    "netLoadList": 33.86,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "8:26",
    "storageOutputList": 0.3,
    "powerGridList": 181.7,
    "socList": 20,
    "netLoadList": 36.28,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "8:27",
    "storageOutputList": 0.3,
    "powerGridList": 182.2,
    "socList": 20,
    "netLoadList": 36.38,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "8:28",
    "storageOutputList": 0.3,
    "powerGridList": 187.24,
    "socList": 20,
    "netLoadList": 37.39,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "8:29",
    "storageOutputList": 0.3,
    "powerGridList": 216.72,
    "socList": 20,
    "netLoadList": 43.28,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "8:30",
    "storageOutputList": 0.3,
    "powerGridList": 216.98,
    "socList": 20,
    "netLoadList": 43.34,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "8:31",
    "storageOutputList": 0.3,
    "powerGridList": 348.76,
    "socList": 20,
    "netLoadList": 69.69,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "8:32",
    "storageOutputList": 0.3,
    "powerGridList": 394.12,
    "socList": 20,
    "netLoadList": 78.76,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "8:33",
    "storageOutputList": 0.3,
    "powerGridList": 309.2,
    "socList": 20,
    "netLoadList": 61.78,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "8:34",
    "storageOutputList": 0.3,
    "powerGridList": 320.8,
    "socList": 20,
    "netLoadList": 64.1,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "8:35",
    "storageOutputList": 0.3,
    "powerGridList": 322.06,
    "socList": 20,
    "netLoadList": 64.35,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "8:36",
    "storageOutputList": 0.3,
    "powerGridList": 321.56,
    "socList": 20,
    "netLoadList": 64.25,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "8:37",
    "storageOutputList": 0.3,
    "powerGridList": 338.44,
    "socList": 20,
    "netLoadList": 67.63,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "8:38",
    "storageOutputList": 0.3,
    "powerGridList": 358.1,
    "socList": 20,
    "netLoadList": 71.56,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "8:39",
    "storageOutputList": 0.3,
    "powerGridList": 319.04,
    "socList": 20,
    "netLoadList": 63.75,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "8:40",
    "storageOutputList": 0.3,
    "powerGridList": 339.94,
    "socList": 20,
    "netLoadList": 67.93,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "8:41",
    "storageOutputList": 0.3,
    "powerGridList": 390.6,
    "socList": 20,
    "netLoadList": 78.06,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "8:42",
    "storageOutputList": 0.3,
    "powerGridList": 326.6,
    "socList": 20,
    "netLoadList": 65.26,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "8:43",
    "storageOutputList": 0.3,
    "powerGridList": 380.26,
    "socList": 20,
    "netLoadList": 75.99,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "8:44",
    "storageOutputList": 0.3,
    "powerGridList": 346,
    "socList": 20,
    "netLoadList": 69.14,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "8:45",
    "storageOutputList": 0.3,
    "powerGridList": 361.36,
    "socList": 20,
    "netLoadList": 72.21,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "8:46",
    "storageOutputList": 0.3,
    "powerGridList": 390.1,
    "socList": 20,
    "netLoadList": 77.96,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "8:47",
    "storageOutputList": 0.3,
    "powerGridList": 377,
    "socList": 20,
    "netLoadList": 75.34,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "8:48",
    "storageOutputList": 0.3,
    "powerGridList": 375.48,
    "socList": 20,
    "netLoadList": 75.04,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "8:49",
    "storageOutputList": 0.3,
    "powerGridList": 353.56,
    "socList": 20,
    "netLoadList": 70.65,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "8:50",
    "storageOutputList": 0.3,
    "powerGridList": 343.98,
    "socList": 20,
    "netLoadList": 68.74,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "8:51",
    "storageOutputList": 0.3,
    "powerGridList": 365.4,
    "socList": 20,
    "netLoadList": 73.02,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "8:52",
    "storageOutputList": 0.3,
    "powerGridList": 352.3,
    "socList": 20,
    "netLoadList": 70.4,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "8:53",
    "storageOutputList": 0.3,
    "powerGridList": 389.08,
    "socList": 20,
    "netLoadList": 77.76,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "8:54",
    "storageOutputList": 0.3,
    "powerGridList": 337.94,
    "socList": 20,
    "netLoadList": 67.53,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "8:55",
    "storageOutputList": 0.3,
    "powerGridList": 377,
    "socList": 20,
    "netLoadList": 75.34,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "8:56",
    "storageOutputList": 0.3,
    "powerGridList": 354.06,
    "socList": 20,
    "netLoadList": 70.75,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "8:57",
    "storageOutputList": 0.3,
    "powerGridList": 373.72,
    "socList": 20,
    "netLoadList": 74.68,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "8:58",
    "storageOutputList": 0.3,
    "powerGridList": 388.08,
    "socList": 20,
    "netLoadList": 77.56,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "8:59",
    "storageOutputList": 0.3,
    "powerGridList": 408.74,
    "socList": 20,
    "netLoadList": 81.69,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "9:00",
    "storageOutputList": 0.3,
    "powerGridList": 354.82,
    "socList": 20,
    "netLoadList": 70.9,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "9:01",
    "storageOutputList": 0.3,
    "powerGridList": 361.62,
    "socList": 20,
    "netLoadList": 72.26,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "9:02",
    "storageOutputList": 0.3,
    "powerGridList": 380.78,
    "socList": 20,
    "netLoadList": 76.1,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "9:03",
    "storageOutputList": 0.3,
    "powerGridList": 379.26,
    "socList": 20,
    "netLoadList": 75.79,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "9:04",
    "storageOutputList": 0.3,
    "powerGridList": 364.4,
    "socList": 20,
    "netLoadList": 72.82,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "9:05",
    "storageOutputList": 0.3,
    "powerGridList": 373.72,
    "socList": 20,
    "netLoadList": 74.68,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "9:06",
    "storageOutputList": 0.3,
    "powerGridList": 365.4,
    "socList": 20,
    "netLoadList": 73.02,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "9:07",
    "storageOutputList": 0.3,
    "powerGridList": 392.12,
    "socList": 20,
    "netLoadList": 78.36,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "9:08",
    "storageOutputList": 0.3,
    "powerGridList": 345.24,
    "socList": 20,
    "netLoadList": 68.99,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "9:09",
    "storageOutputList": 0.3,
    "powerGridList": 359.36,
    "socList": 20,
    "netLoadList": 71.81,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "9:10",
    "storageOutputList": 0.3,
    "powerGridList": 343.72,
    "socList": 20,
    "netLoadList": 68.68,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "9:11",
    "storageOutputList": 0.3,
    "powerGridList": 344.74,
    "socList": 20,
    "netLoadList": 68.89,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "9:12",
    "storageOutputList": 0.3,
    "powerGridList": 382.78,
    "socList": 20,
    "netLoadList": 76.5,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "9:13",
    "storageOutputList": 0.3,
    "powerGridList": 350.78,
    "socList": 20,
    "netLoadList": 70.1,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "9:14",
    "storageOutputList": 0.3,
    "powerGridList": 349.02,
    "socList": 20,
    "netLoadList": 69.74,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "9:15",
    "storageOutputList": 0.3,
    "powerGridList": 360.62,
    "socList": 20,
    "netLoadList": 72.06,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "9:16",
    "storageOutputList": 0.3,
    "powerGridList": 366.66,
    "socList": 20,
    "netLoadList": 73.27,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "9:17",
    "storageOutputList": 0.3,
    "powerGridList": 429.66,
    "socList": 20,
    "netLoadList": 85.87,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "9:18",
    "storageOutputList": 0.3,
    "powerGridList": 359.36,
    "socList": 20,
    "netLoadList": 71.81,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "9:19",
    "storageOutputList": 0.3,
    "powerGridList": 364.64,
    "socList": 20,
    "netLoadList": 72.87,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "9:20",
    "storageOutputList": 0.3,
    "powerGridList": 347.26,
    "socList": 20,
    "netLoadList": 69.39,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "9:21",
    "storageOutputList": 0.3,
    "powerGridList": 342.72,
    "socList": 20,
    "netLoadList": 68.48,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "9:22",
    "storageOutputList": 0.3,
    "powerGridList": 390.6,
    "socList": 20,
    "netLoadList": 78.06,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "9:23",
    "storageOutputList": 0.3,
    "powerGridList": 382.28,
    "socList": 20,
    "netLoadList": 76.4,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "9:24",
    "storageOutputList": 0.3,
    "powerGridList": 367.42,
    "socList": 20,
    "netLoadList": 73.42,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "9:25",
    "storageOutputList": 0.3,
    "powerGridList": 365.4,
    "socList": 20,
    "netLoadList": 73.02,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "9:26",
    "storageOutputList": 0.3,
    "powerGridList": 403.46,
    "socList": 20,
    "netLoadList": 80.63,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "9:27",
    "storageOutputList": 0.3,
    "powerGridList": 377,
    "socList": 20,
    "netLoadList": 75.34,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "9:28",
    "storageOutputList": 0.3,
    "powerGridList": 359.36,
    "socList": 20,
    "netLoadList": 71.81,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "9:29",
    "storageOutputList": 0.3,
    "powerGridList": 365.4,
    "socList": 20,
    "netLoadList": 73.02,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "9:30",
    "storageOutputList": 0.3,
    "powerGridList": 340.46,
    "socList": 20,
    "netLoadList": 68.03,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "9:31",
    "storageOutputList": 0.3,
    "powerGridList": 361.88,
    "socList": 20,
    "netLoadList": 72.32,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "9:32",
    "storageOutputList": 0.3,
    "powerGridList": 391.1,
    "socList": 20,
    "netLoadList": 78.16,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "9:33",
    "storageOutputList": 0.3,
    "powerGridList": 350.02,
    "socList": 20,
    "netLoadList": 69.94,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "9:34",
    "storageOutputList": 0.3,
    "powerGridList": 372.7,
    "socList": 20,
    "netLoadList": 74.48,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "9:35",
    "storageOutputList": 0.3,
    "powerGridList": 351.04,
    "socList": 20,
    "netLoadList": 70.15,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "9:36",
    "storageOutputList": 0.3,
    "powerGridList": 374.98,
    "socList": 20,
    "netLoadList": 74.94,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "9:37",
    "storageOutputList": 0.3,
    "powerGridList": 405.98,
    "socList": 20,
    "netLoadList": 81.14,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "9:38",
    "storageOutputList": 0.3,
    "powerGridList": 394.12,
    "socList": 20,
    "netLoadList": 78.76,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "9:39",
    "storageOutputList": 0.3,
    "powerGridList": 376.74,
    "socList": 20,
    "netLoadList": 75.29,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "9:40",
    "storageOutputList": 0.3,
    "powerGridList": 353.06,
    "socList": 20,
    "netLoadList": 70.55,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "9:41",
    "storageOutputList": 0.3,
    "powerGridList": 372.96,
    "socList": 20,
    "netLoadList": 74.53,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "9:42",
    "storageOutputList": 0.3,
    "powerGridList": 362.38,
    "socList": 20,
    "netLoadList": 72.42,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "9:43",
    "storageOutputList": 0.3,
    "powerGridList": 407.98,
    "socList": 20,
    "netLoadList": 81.54,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "9:44",
    "storageOutputList": 0.3,
    "powerGridList": 376.24,
    "socList": 20,
    "netLoadList": 75.19,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "9:45",
    "storageOutputList": 0.4,
    "powerGridList": 363.14,
    "socList": 20,
    "netLoadList": 72.55,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "9:46",
    "storageOutputList": 0.3,
    "powerGridList": 368.92,
    "socList": 20,
    "netLoadList": 73.72,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "9:47",
    "storageOutputList": 0.3,
    "powerGridList": 368.42,
    "socList": 20,
    "netLoadList": 73.62,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "9:48",
    "storageOutputList": 0.3,
    "powerGridList": 349.52,
    "socList": 20,
    "netLoadList": 69.84,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "9:49",
    "storageOutputList": 0.3,
    "powerGridList": 400.42,
    "socList": 20,
    "netLoadList": 80.02,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "9:50",
    "storageOutputList": 0.3,
    "powerGridList": 363.14,
    "socList": 20,
    "netLoadList": 72.57,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "9:51",
    "storageOutputList": 0.3,
    "powerGridList": 367.16,
    "socList": 20,
    "netLoadList": 73.37,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "9:52",
    "storageOutputList": 0.3,
    "powerGridList": 351.04,
    "socList": 20,
    "netLoadList": 70.15,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "9:53",
    "storageOutputList": 0.3,
    "powerGridList": 343.48,
    "socList": 20,
    "netLoadList": 68.64,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "9:54",
    "storageOutputList": 0.3,
    "powerGridList": 352.54,
    "socList": 20,
    "netLoadList": 70.45,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "9:55",
    "storageOutputList": 0.3,
    "powerGridList": 396.64,
    "socList": 20,
    "netLoadList": 79.27,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "9:56",
    "storageOutputList": 0.3,
    "powerGridList": 354.82,
    "socList": 20,
    "netLoadList": 70.9,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "9:57",
    "storageOutputList": 0.3,
    "powerGridList": 375.22,
    "socList": 20,
    "netLoadList": 74.98,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "9:58",
    "storageOutputList": 0.3,
    "powerGridList": 346.24,
    "socList": 20,
    "netLoadList": 69.19,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "9:59",
    "storageOutputList": 0.3,
    "powerGridList": 366.66,
    "socList": 20,
    "netLoadList": 73.27,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "10:00",
    "storageOutputList": 0.3,
    "powerGridList": 345.24,
    "socList": 19.98,
    "netLoadList": 68.99,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "10:01",
    "storageOutputList": -85.9,
    "powerGridList": 277.96,
    "socList": 19.98,
    "netLoadList": 72.77,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "10:02",
    "storageOutputList": -196,
    "powerGridList": 148.68,
    "socList": 19.84,
    "netLoadList": 68.94,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "10:03",
    "storageOutputList": -195.6,
    "powerGridList": 174.88,
    "socList": 19.66,
    "netLoadList": 74.1,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "10:04",
    "storageOutputList": -195.8,
    "powerGridList": 153.98,
    "socList": 19.5,
    "netLoadList": 69.96,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "10:05",
    "storageOutputList": -195.6,
    "powerGridList": 164.8,
    "socList": 19.34,
    "netLoadList": 72.08,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "10:06",
    "storageOutputList": -195.7,
    "powerGridList": 163.54,
    "socList": 19.2,
    "netLoadList": 71.85,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "10:07",
    "storageOutputList": -196,
    "powerGridList": 178.66,
    "socList": 19.04,
    "netLoadList": 74.93,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "10:08",
    "storageOutputList": -195.7,
    "powerGridList": 179.68,
    "socList": 18.8,
    "netLoadList": 75.08,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "10:09",
    "storageOutputList": -196,
    "powerGridList": 142.38,
    "socList": 18.64,
    "netLoadList": 67.68,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "10:10",
    "storageOutputList": -195.6,
    "powerGridList": 152.72,
    "socList": 18.48,
    "netLoadList": 69.66,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "10:11",
    "storageOutputList": -195.6,
    "powerGridList": 178.92,
    "socList": 18.34,
    "netLoadList": 74.9,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "10:12",
    "storageOutputList": -195.6,
    "powerGridList": 155.48,
    "socList": 18.18,
    "netLoadList": 70.22,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "10:13",
    "storageOutputList": -195.9,
    "powerGridList": 176.66,
    "socList": 18.02,
    "netLoadList": 74.51,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "10:14",
    "storageOutputList": -195.6,
    "powerGridList": 181.7,
    "socList": 17.86,
    "netLoadList": 75.46,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "10:15",
    "storageOutputList": -195.6,
    "powerGridList": 176.66,
    "socList": 17.62,
    "netLoadList": 74.45,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "10:16",
    "storageOutputList": -195.6,
    "powerGridList": 155.48,
    "socList": 17.46,
    "netLoadList": 70.22,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "10:17",
    "storageOutputList": -195.6,
    "powerGridList": 181.18,
    "socList": 17.3,
    "netLoadList": 75.36,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "10:18",
    "storageOutputList": -195.8,
    "powerGridList": 166.82,
    "socList": 17.14,
    "netLoadList": 72.52,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "10:19",
    "storageOutputList": -195.6,
    "powerGridList": 146.66,
    "socList": 16.98,
    "netLoadList": 68.45,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "10:20",
    "storageOutputList": -195.8,
    "powerGridList": 196.06,
    "socList": 16.82,
    "netLoadList": 78.37,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "10:21",
    "storageOutputList": -195.6,
    "powerGridList": 169.6,
    "socList": 16.68,
    "netLoadList": 73.04,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "10:22",
    "storageOutputList": -195.6,
    "powerGridList": 178.66,
    "socList": 16.44,
    "netLoadList": 74.85,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "10:23",
    "storageOutputList": -198.7,
    "powerGridList": 157.76,
    "socList": 16.28,
    "netLoadList": 71.29,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "10:24",
    "storageOutputList": -198.5,
    "powerGridList": 180.44,
    "socList": 16.12,
    "netLoadList": 75.79,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "10:25",
    "storageOutputList": -198.5,
    "powerGridList": 189,
    "socList": 15.96,
    "netLoadList": 77.5,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "10:26",
    "storageOutputList": -198.4,
    "powerGridList": 161.78,
    "socList": 15.8,
    "netLoadList": 72.04,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "10:27",
    "storageOutputList": -198.5,
    "powerGridList": 151.46,
    "socList": 15.64,
    "netLoadList": 69.99,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "10:28",
    "storageOutputList": -198.4,
    "powerGridList": 183.2,
    "socList": 15.48,
    "netLoadList": 76.32,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "10:29",
    "storageOutputList": -198.4,
    "powerGridList": 161.78,
    "socList": 15.32,
    "netLoadList": 72.04,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "10:30",
    "storageOutputList": -198.4,
    "powerGridList": 222.26,
    "socList": 15.1,
    "netLoadList": 84.13,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "10:31",
    "storageOutputList": -198.4,
    "powerGridList": 147.92,
    "socList": 14.94,
    "netLoadList": 69.26,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "10:32",
    "storageOutputList": -198.4,
    "powerGridList": 175.64,
    "socList": 14.78,
    "netLoadList": 74.81,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "10:33",
    "storageOutputList": -198.4,
    "powerGridList": 158,
    "socList": 14.62,
    "netLoadList": 71.28,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "10:34",
    "storageOutputList": -198.4,
    "powerGridList": 200.08,
    "socList": 14.46,
    "netLoadList": 79.7,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "10:35",
    "storageOutputList": -198.4,
    "powerGridList": 174.64,
    "socList": 14.3,
    "netLoadList": 74.61,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "10:36",
    "storageOutputList": -195.3,
    "powerGridList": 172.62,
    "socList": 14.14,
    "netLoadList": 73.58,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "10:37",
    "storageOutputList": -195.6,
    "powerGridList": 163.8,
    "socList": 13.9,
    "netLoadList": 71.88,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "10:38",
    "storageOutputList": -195.7,
    "powerGridList": 233.1,
    "socList": 13.74,
    "netLoadList": 85.76,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "10:39",
    "storageOutputList": -195.5,
    "powerGridList": 163.04,
    "socList": 13.6,
    "netLoadList": 71.71,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "10:40",
    "storageOutputList": -195.8,
    "powerGridList": 183.46,
    "socList": 13.44,
    "netLoadList": 75.85,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "10:41",
    "storageOutputList": -195.4,
    "powerGridList": 166.32,
    "socList": 13.28,
    "netLoadList": 72.34,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "10:42",
    "storageOutputList": -195.5,
    "powerGridList": 146.42,
    "socList": 13.12,
    "netLoadList": 68.38,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "10:43",
    "storageOutputList": -195.6,
    "powerGridList": 167.58,
    "socList": 12.96,
    "netLoadList": 72.64,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "10:44",
    "storageOutputList": -195.5,
    "powerGridList": 191.52,
    "socList": 12.72,
    "netLoadList": 77.4,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "10:45",
    "storageOutputList": -195.6,
    "powerGridList": 195.56,
    "socList": 12.56,
    "netLoadList": 78.23,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "10:46",
    "storageOutputList": -195.5,
    "powerGridList": 165.82,
    "socList": 12.4,
    "netLoadList": 72.26,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "10:47",
    "storageOutputList": -195.8,
    "powerGridList": 181.18,
    "socList": 12.24,
    "netLoadList": 75.4,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "10:48",
    "storageOutputList": -195.4,
    "powerGridList": 183.96,
    "socList": 12.08,
    "netLoadList": 75.87,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "10:49",
    "storageOutputList": -195.7,
    "powerGridList": 172.88,
    "socList": 11.94,
    "netLoadList": 73.72,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "10:50",
    "storageOutputList": -195.7,
    "powerGridList": 153.46,
    "socList": 11.7,
    "netLoadList": 69.83,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "10:51",
    "storageOutputList": -195.4,
    "powerGridList": 207.9,
    "socList": 11.54,
    "netLoadList": 80.66,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "10:52",
    "storageOutputList": -195.7,
    "powerGridList": 154.22,
    "socList": 11.38,
    "netLoadList": 69.98,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "10:53",
    "storageOutputList": -195.5,
    "powerGridList": 207.64,
    "socList": 11.22,
    "netLoadList": 80.63,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "10:54",
    "storageOutputList": -195.7,
    "powerGridList": 176.66,
    "socList": 11.06,
    "netLoadList": 74.47,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "10:55",
    "storageOutputList": -195.4,
    "powerGridList": 178.42,
    "socList": 10.9,
    "netLoadList": 74.76,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "10:56",
    "storageOutputList": -195.4,
    "powerGridList": 157.76,
    "socList": 10.74,
    "netLoadList": 70.63,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "10:57",
    "storageOutputList": -195.4,
    "powerGridList": 213.2,
    "socList": 10.52,
    "netLoadList": 81.72,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "10:58",
    "storageOutputList": -195.4,
    "powerGridList": 143.64,
    "socList": 10.36,
    "netLoadList": 67.81,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "10:59",
    "storageOutputList": -195.4,
    "powerGridList": 169.1,
    "socList": 10.2,
    "netLoadList": 72.9,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "11:00",
    "storageOutputList": -195.7,
    "powerGridList": 185.48,
    "socList": 10.04,
    "netLoadList": 76.24,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "11:01",
    "storageOutputList": -195.3,
    "powerGridList": 172.88,
    "socList": 9.88,
    "netLoadList": 73.64,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "11:02",
    "storageOutputList": -195.7,
    "powerGridList": 201.6,
    "socList": 9.64,
    "netLoadList": 79.46,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "11:03",
    "storageOutputList": -195.4,
    "powerGridList": 207.9,
    "socList": 9.48,
    "netLoadList": 80.66,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "11:04",
    "storageOutputList": -195.8,
    "powerGridList": 155.48,
    "socList": 9.32,
    "netLoadList": 70.26,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "11:05",
    "storageOutputList": -195.4,
    "powerGridList": 211.18,
    "socList": 9.16,
    "netLoadList": 81.32,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "11:06",
    "storageOutputList": -195.4,
    "powerGridList": 171.36,
    "socList": 9,
    "netLoadList": 73.35,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "11:07",
    "storageOutputList": -195.8,
    "powerGridList": 172.62,
    "socList": 8.84,
    "netLoadList": 73.68,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "11:08",
    "storageOutputList": -195.5,
    "powerGridList": 211.42,
    "socList": 8.6,
    "netLoadList": 81.38,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "11:09",
    "storageOutputList": -195.8,
    "powerGridList": 260.32,
    "socList": 8.44,
    "netLoadList": 91.22,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "11:10",
    "storageOutputList": -195.7,
    "powerGridList": 177.4,
    "socList": 8.28,
    "netLoadList": 74.62,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "11:11",
    "storageOutputList": -195.7,
    "powerGridList": 154.72,
    "socList": 8.12,
    "netLoadList": 70.08,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "11:12",
    "storageOutputList": -195.4,
    "powerGridList": 221,
    "socList": 7.98,
    "netLoadList": 83.28,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "11:13",
    "storageOutputList": -198.6,
    "powerGridList": 217.98,
    "socList": 7.82,
    "netLoadList": 83.32,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "11:14",
    "storageOutputList": -198.3,
    "powerGridList": 193.78,
    "socList": 7.66,
    "netLoadList": 78.42,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "11:15",
    "storageOutputList": -198.3,
    "powerGridList": 162.04,
    "socList": 7.42,
    "netLoadList": 72.07,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "11:16",
    "storageOutputList": -198.6,
    "powerGridList": 171.86,
    "socList": 7.26,
    "netLoadList": 74.09,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "11:17",
    "storageOutputList": -198.6,
    "powerGridList": 167.32,
    "socList": 7.1,
    "netLoadList": 73.18,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "11:18",
    "storageOutputList": -198.3,
    "powerGridList": 228.32,
    "socList": 6.96,
    "netLoadList": 85.32,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "11:19",
    "storageOutputList": -198.3,
    "powerGridList": 210.42,
    "socList": 6.8,
    "netLoadList": 81.74,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "11:20",
    "storageOutputList": -198.4,
    "powerGridList": 170.86,
    "socList": 6.56,
    "netLoadList": 73.85,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "11:21",
    "storageOutputList": -198.4,
    "powerGridList": 162.04,
    "socList": 6.4,
    "netLoadList": 72.09,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "11:22",
    "storageOutputList": -198.3,
    "powerGridList": 191.78,
    "socList": 6.24,
    "netLoadList": 78.02,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "11:23",
    "storageOutputList": -198.6,
    "powerGridList": 193.28,
    "socList": 6.08,
    "netLoadList": 78.38,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "11:24",
    "storageOutputList": -198.6,
    "powerGridList": 201.6,
    "socList": 5.92,
    "netLoadList": 80.04,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "11:25",
    "storageOutputList": -198.3,
    "powerGridList": 298.36,
    "socList": 5.78,
    "netLoadList": 99.33,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "11:26",
    "storageOutputList": -198.4,
    "powerGridList": 240.16,
    "socList": 5.54,
    "netLoadList": 87.71,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "11:27",
    "storageOutputList": -198.4,
    "powerGridList": 273.92,
    "socList": 5.38,
    "netLoadList": 94.46,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "11:28",
    "storageOutputList": -198.2,
    "powerGridList": 270.14,
    "socList": 5.22,
    "netLoadList": 93.67,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "11:29",
    "storageOutputList": -194.8,
    "powerGridList": 257.8,
    "socList": 5.06,
    "netLoadList": 90.52,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "11:30",
    "storageOutputList": -195.4,
    "powerGridList": 263.08,
    "socList": 4.9,
    "netLoadList": 91.7,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "11:31",
    "storageOutputList": -195.6,
    "powerGridList": 269.9,
    "socList": 4.66,
    "netLoadList": 93.1,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "11:32",
    "storageOutputList": -195.6,
    "powerGridList": 273.42,
    "socList": 4.5,
    "netLoadList": 93.8,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "11:33",
    "storageOutputList": -195.4,
    "powerGridList": 301.64,
    "socList": 4.34,
    "netLoadList": 99.41,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "11:34",
    "storageOutputList": -195.3,
    "powerGridList": 272.92,
    "socList": 4.2,
    "netLoadList": 93.64,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "11:35",
    "storageOutputList": -195.3,
    "powerGridList": 245.96,
    "socList": 4.04,
    "netLoadList": 88.25,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "11:36",
    "storageOutputList": -195.5,
    "powerGridList": 254.02,
    "socList": 3.8,
    "netLoadList": 89.9,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "11:37",
    "storageOutputList": -195.5,
    "powerGridList": 279.98,
    "socList": 3.64,
    "netLoadList": 95.1,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "11:38",
    "storageOutputList": -195.6,
    "powerGridList": 233.86,
    "socList": 3.48,
    "netLoadList": 85.89,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "11:39",
    "storageOutputList": -195.5,
    "powerGridList": 258.56,
    "socList": 3.32,
    "netLoadList": 90.81,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "11:40",
    "storageOutputList": -195.5,
    "powerGridList": 252.5,
    "socList": 3.16,
    "netLoadList": 89.6,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "11:41",
    "storageOutputList": -195.5,
    "powerGridList": 239.66,
    "socList": 2.92,
    "netLoadList": 87.03,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "11:42",
    "storageOutputList": -179.6,
    "powerGridList": 272.42,
    "socList": 2.76,
    "netLoadList": 90.4,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "11:43",
    "storageOutputList": -165.6,
    "powerGridList": 278.2,
    "socList": 2.62,
    "netLoadList": 88.76,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "11:44",
    "storageOutputList": -149.6,
    "powerGridList": 291.06,
    "socList": 2.54,
    "netLoadList": 88.13,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "11:45",
    "storageOutputList": -141.8,
    "powerGridList": 325.08,
    "socList": 2.38,
    "netLoadList": 93.38,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "11:46",
    "storageOutputList": -125.8,
    "powerGridList": 344.24,
    "socList": 2.3,
    "netLoadList": 94.01,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "11:47",
    "storageOutputList": -117.8,
    "powerGridList": 320.54,
    "socList": 2.14,
    "netLoadList": 87.67,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "11:48",
    "storageOutputList": -101.9,
    "powerGridList": 364.64,
    "socList": 2.06,
    "netLoadList": 93.31,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "11:49",
    "storageOutputList": -93.9,
    "powerGridList": 355.58,
    "socList": 1.98,
    "netLoadList": 89.9,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "11:50",
    "storageOutputList": -86,
    "powerGridList": 404.46,
    "socList": 1.9,
    "netLoadList": 98.09,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "11:51",
    "storageOutputList": -77.9,
    "powerGridList": 370.94,
    "socList": 1.82,
    "netLoadList": 89.77,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "11:52",
    "storageOutputList": -68,
    "powerGridList": 375.22,
    "socList": 1.72,
    "netLoadList": 88.64,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "11:53",
    "storageOutputList": -67.9,
    "powerGridList": 380.78,
    "socList": 1.64,
    "netLoadList": 89.74,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "11:54",
    "storageOutputList": -59.9,
    "powerGridList": 384.56,
    "socList": 1.64,
    "netLoadList": 88.89,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "11:55",
    "storageOutputList": -52.1,
    "powerGridList": 387.08,
    "socList": 1.56,
    "netLoadList": 87.84,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "11:56",
    "storageOutputList": -52,
    "powerGridList": 390.1,
    "socList": 1.48,
    "netLoadList": 88.42,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "11:57",
    "storageOutputList": -44,
    "powerGridList": 403.7,
    "socList": 1.48,
    "netLoadList": 89.54,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "11:58",
    "storageOutputList": -36,
    "powerGridList": 396.64,
    "socList": 1.4,
    "netLoadList": 86.53,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "11:59",
    "storageOutputList": -36.2,
    "powerGridList": 246.96,
    "socList": 1.4,
    "netLoadList": 56.63,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "12:00",
    "storageOutputList": 4.1,
    "powerGridList": 262.84,
    "socList": 1.4,
    "netLoadList": 51.75,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "12:01",
    "storageOutputList": 93.9,
    "powerGridList": 361.12,
    "socList": 1.34,
    "netLoadList": 53.44,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "12:02",
    "storageOutputList": 204.8,
    "powerGridList": 454.36,
    "socList": 1.5,
    "netLoadList": 49.91,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "12:03",
    "storageOutputList": 204.9,
    "powerGridList": 456.62,
    "socList": 1.66,
    "netLoadList": 50.34,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "12:04",
    "storageOutputList": 202.1,
    "powerGridList": 458.64,
    "socList": 1.74,
    "netLoadList": 51.31,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "12:05",
    "storageOutputList": 201.7,
    "powerGridList": 453.86,
    "socList": 1.98,
    "netLoadList": 50.43,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "12:06",
    "storageOutputList": 201.7,
    "powerGridList": 452.84,
    "socList": 2.14,
    "netLoadList": 50.23,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "12:07",
    "storageOutputList": 202,
    "powerGridList": 459.64,
    "socList": 2.22,
    "netLoadList": 51.53,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "12:08",
    "storageOutputList": 201.9,
    "powerGridList": 452.08,
    "socList": 2.38,
    "netLoadList": 50.04,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "12:09",
    "storageOutputList": 202,
    "powerGridList": 487.36,
    "socList": 2.62,
    "netLoadList": 57.07,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "12:10",
    "storageOutputList": 201.6,
    "powerGridList": 453.6,
    "socList": 2.7,
    "netLoadList": 50.4,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "12:11",
    "storageOutputList": 201.7,
    "powerGridList": 444.52,
    "socList": 2.84,
    "netLoadList": 48.56,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "12:12",
    "storageOutputList": 202,
    "powerGridList": 450.32,
    "socList": 3,
    "netLoadList": 49.66,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "12:13",
    "storageOutputList": 201.6,
    "powerGridList": 449.06,
    "socList": 3.16,
    "netLoadList": 49.49,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "12:14",
    "storageOutputList": 201.6,
    "powerGridList": 458.14,
    "socList": 3.32,
    "netLoadList": 51.31,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "12:15",
    "storageOutputList": 201.6,
    "powerGridList": 459.9,
    "socList": 3.48,
    "netLoadList": 51.66,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "12:16",
    "storageOutputList": 201.6,
    "powerGridList": 463.68,
    "socList": 3.64,
    "netLoadList": 52.42,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "12:17",
    "storageOutputList": 201.8,
    "powerGridList": 484.34,
    "socList": 3.78,
    "netLoadList": 56.51,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "12:18",
    "storageOutputList": 205.5,
    "powerGridList": 466.46,
    "socList": 3.94,
    "netLoadList": 52.19,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "12:19",
    "storageOutputList": 204.7,
    "powerGridList": 450.58,
    "socList": 4.1,
    "netLoadList": 49.18,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "12:20",
    "storageOutputList": 204.4,
    "powerGridList": 445.54,
    "socList": 4.26,
    "netLoadList": 48.23,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "12:21",
    "storageOutputList": 204.9,
    "powerGridList": 446.3,
    "socList": 4.42,
    "netLoadList": 48.28,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "12:22",
    "storageOutputList": 204.7,
    "powerGridList": 451.08,
    "socList": 4.56,
    "netLoadList": 49.28,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "12:23",
    "storageOutputList": 204.5,
    "powerGridList": 450.08,
    "socList": 4.72,
    "netLoadList": 49.12,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "12:24",
    "storageOutputList": 204.5,
    "powerGridList": 458.14,
    "socList": 4.88,
    "netLoadList": 50.73,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "12:25",
    "storageOutputList": 204.8,
    "powerGridList": 454.1,
    "socList": 5.04,
    "netLoadList": 49.86,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "12:26",
    "storageOutputList": 204.9,
    "powerGridList": 460.9,
    "socList": 5.2,
    "netLoadList": 51.2,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "12:27",
    "storageOutputList": 204.6,
    "powerGridList": 486.36,
    "socList": 5.36,
    "netLoadList": 56.35,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "12:28",
    "storageOutputList": 204.5,
    "powerGridList": 464.94,
    "socList": 5.5,
    "netLoadList": 52.09,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "12:29",
    "storageOutputList": 204.6,
    "powerGridList": 454.6,
    "socList": 5.66,
    "netLoadList": 50,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "12:30",
    "storageOutputList": 204.9,
    "powerGridList": 458.9,
    "socList": 5.82,
    "netLoadList": 50.8,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "12:31",
    "storageOutputList": 204.8,
    "powerGridList": 452.34,
    "socList": 5.9,
    "netLoadList": 49.51,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "12:32",
    "storageOutputList": 204.5,
    "powerGridList": 451.34,
    "socList": 6.06,
    "netLoadList": 49.37,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "12:33",
    "storageOutputList": 204.5,
    "powerGridList": 482.32,
    "socList": 6.22,
    "netLoadList": 55.56,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "12:34",
    "storageOutputList": 204.8,
    "powerGridList": 472.5,
    "socList": 6.36,
    "netLoadList": 53.54,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "12:35",
    "storageOutputList": 204.8,
    "powerGridList": 457.38,
    "socList": 6.52,
    "netLoadList": 50.52,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "12:36",
    "storageOutputList": 204.8,
    "powerGridList": 489.14,
    "socList": 6.68,
    "netLoadList": 56.87,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "12:37",
    "storageOutputList": 204.9,
    "powerGridList": 487.62,
    "socList": 6.84,
    "netLoadList": 56.54,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "12:38",
    "storageOutputList": 204.8,
    "powerGridList": 450.08,
    "socList": 7,
    "netLoadList": 49.06,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "12:39",
    "storageOutputList": 204.8,
    "powerGridList": 461.92,
    "socList": 7.16,
    "netLoadList": 51.42,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "12:40",
    "storageOutputList": 204.8,
    "powerGridList": 450.08,
    "socList": 7.3,
    "netLoadList": 49.06,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "12:41",
    "storageOutputList": 204.8,
    "powerGridList": 452.08,
    "socList": 7.46,
    "netLoadList": 49.46,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "12:42",
    "storageOutputList": 204.8,
    "powerGridList": 485.86,
    "socList": 7.62,
    "netLoadList": 56.21,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "12:43",
    "storageOutputList": 204.8,
    "powerGridList": 452.6,
    "socList": 7.78,
    "netLoadList": 49.56,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "12:44",
    "storageOutputList": 204.4,
    "powerGridList": 457.12,
    "socList": 7.94,
    "netLoadList": 50.54,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "12:45",
    "storageOutputList": 204.6,
    "powerGridList": 457.38,
    "socList": 8.08,
    "netLoadList": 50.56,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "12:46",
    "storageOutputList": 204.5,
    "powerGridList": 488.38,
    "socList": 8.24,
    "netLoadList": 56.78,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "12:47",
    "storageOutputList": 204.4,
    "powerGridList": 470.24,
    "socList": 8.4,
    "netLoadList": 53.17,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "12:48",
    "storageOutputList": 204.8,
    "powerGridList": 446.3,
    "socList": 8.48,
    "netLoadList": 48.3,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "12:49",
    "storageOutputList": 204.4,
    "powerGridList": 452.34,
    "socList": 8.72,
    "netLoadList": 49.59,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "12:50",
    "storageOutputList": 204.4,
    "powerGridList": 458.9,
    "socList": 8.88,
    "netLoadList": 50.9,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "12:51",
    "storageOutputList": 204.8,
    "powerGridList": 476.28,
    "socList": 8.94,
    "netLoadList": 54.3,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "12:52",
    "storageOutputList": 204.6,
    "powerGridList": 456.12,
    "socList": 9.1,
    "netLoadList": 50.3,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "12:53",
    "storageOutputList": 204.5,
    "powerGridList": 439.24,
    "socList": 9.26,
    "netLoadList": 46.95,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "12:54",
    "storageOutputList": 204.9,
    "powerGridList": 449.82,
    "socList": 9.42,
    "netLoadList": 48.98,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "12:55",
    "storageOutputList": 201.5,
    "powerGridList": 452.08,
    "socList": 9.58,
    "netLoadList": 50.12,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "12:56",
    "storageOutputList": 201.5,
    "powerGridList": 487.12,
    "socList": 9.74,
    "netLoadList": 57.12,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "12:57",
    "storageOutputList": 201.5,
    "powerGridList": 451.84,
    "socList": 9.88,
    "netLoadList": 50.07,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "12:58",
    "storageOutputList": 201.8,
    "powerGridList": 447.3,
    "socList": 10.04,
    "netLoadList": 49.1,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "12:59",
    "storageOutputList": 201.5,
    "powerGridList": 453.6,
    "socList": 10.2,
    "netLoadList": 50.42,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "13:00",
    "storageOutputList": 201.5,
    "powerGridList": 484.1,
    "socList": 10.36,
    "netLoadList": 56.52,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "13:01",
    "storageOutputList": 201.5,
    "powerGridList": 469.98,
    "socList": 10.52,
    "netLoadList": 53.7,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "13:02",
    "storageOutputList": 201.5,
    "powerGridList": 457.88,
    "socList": 10.68,
    "netLoadList": 51.28,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "13:03",
    "storageOutputList": 201.8,
    "powerGridList": 454.1,
    "socList": 10.84,
    "netLoadList": 50.46,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "13:04",
    "storageOutputList": 204.5,
    "powerGridList": 453.34,
    "socList": 11,
    "netLoadList": 49.77,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "13:05",
    "storageOutputList": 204.6,
    "powerGridList": 490.14,
    "socList": 11.14,
    "netLoadList": 57.11,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "13:06",
    "storageOutputList": 204.5,
    "powerGridList": 452.84,
    "socList": 11.22,
    "netLoadList": 49.67,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "13:07",
    "storageOutputList": 204.5,
    "powerGridList": 451.34,
    "socList": 11.38,
    "netLoadList": 49.37,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "13:08",
    "storageOutputList": 204.5,
    "powerGridList": 454.36,
    "socList": 11.54,
    "netLoadList": 49.97,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "13:09",
    "storageOutputList": 204.5,
    "powerGridList": 502.24,
    "socList": 11.7,
    "netLoadList": 59.55,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "13:10",
    "storageOutputList": 204.8,
    "powerGridList": 460.16,
    "socList": 11.84,
    "netLoadList": 51.07,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "13:11",
    "storageOutputList": 204.7,
    "powerGridList": 458.64,
    "socList": 12,
    "netLoadList": 50.79,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "13:12",
    "storageOutputList": 204.5,
    "powerGridList": 451.84,
    "socList": 12.16,
    "netLoadList": 49.47,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "13:13",
    "storageOutputList": 204.8,
    "powerGridList": 457.64,
    "socList": 12.32,
    "netLoadList": 50.57,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "13:14",
    "storageOutputList": 204.5,
    "powerGridList": 462.16,
    "socList": 12.48,
    "netLoadList": 51.53,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "13:15",
    "storageOutputList": 204.8,
    "powerGridList": 503.24,
    "socList": 12.64,
    "netLoadList": 59.69,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "13:16",
    "storageOutputList": 204.5,
    "powerGridList": 470.74,
    "socList": 12.78,
    "netLoadList": 53.25,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "13:17",
    "storageOutputList": 204.5,
    "powerGridList": 475.78,
    "socList": 12.94,
    "netLoadList": 54.26,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "13:18",
    "storageOutputList": 204.8,
    "powerGridList": 445.54,
    "socList": 13.1,
    "netLoadList": 48.15,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "13:19",
    "storageOutputList": 204.5,
    "powerGridList": 459.64,
    "socList": 13.26,
    "netLoadList": 51.03,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "13:20",
    "storageOutputList": 204.8,
    "powerGridList": 473,
    "socList": 13.42,
    "netLoadList": 53.64,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "13:21",
    "storageOutputList": 204.5,
    "powerGridList": 456.88,
    "socList": 13.5,
    "netLoadList": 50.48,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "13:22",
    "storageOutputList": 204.8,
    "powerGridList": 448.82,
    "socList": 13.64,
    "netLoadList": 48.8,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "13:23",
    "storageOutputList": 204.5,
    "powerGridList": 498.7,
    "socList": 13.8,
    "netLoadList": 58.84,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "13:24",
    "storageOutputList": 204.5,
    "powerGridList": 461.42,
    "socList": 13.96,
    "netLoadList": 51.38,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "13:25",
    "storageOutputList": 204.5,
    "powerGridList": 470.48,
    "socList": 14.1,
    "netLoadList": 53.2,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "13:26",
    "storageOutputList": 204.5,
    "powerGridList": 462.16,
    "socList": 14.26,
    "netLoadList": 51.53,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "13:27",
    "storageOutputList": 204.5,
    "powerGridList": 494.92,
    "socList": 14.42,
    "netLoadList": 58.08,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "13:28",
    "storageOutputList": 204.8,
    "powerGridList": 454.86,
    "socList": 14.58,
    "netLoadList": 50.01,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "13:29",
    "storageOutputList": 204.5,
    "powerGridList": 451.84,
    "socList": 14.74,
    "netLoadList": 49.47,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "13:30",
    "storageOutputList": 81.2,
    "powerGridList": 513.08,
    "socList": 14.9,
    "netLoadList": 86.38,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "13:31",
    "storageOutputList": 55.9,
    "powerGridList": 510.56,
    "socList": 14.9,
    "netLoadList": 90.93,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "13:32",
    "storageOutputList": 44.3,
    "powerGridList": 539.54,
    "socList": 14.96,
    "netLoadList": 99.05,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "13:33",
    "storageOutputList": 85.7,
    "powerGridList": 550.62,
    "socList": 14.96,
    "netLoadList": 92.98,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "13:34",
    "storageOutputList": 93.7,
    "powerGridList": 512.82,
    "socList": 15.04,
    "netLoadList": 83.82,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "13:35",
    "storageOutputList": 75.8,
    "powerGridList": 581.62,
    "socList": 15.12,
    "netLoadList": 101.16,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "13:36",
    "storageOutputList": 76,
    "powerGridList": 571.78,
    "socList": 15.2,
    "netLoadList": 99.16,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "13:37",
    "storageOutputList": 60.3,
    "powerGridList": 551.88,
    "socList": 15.2,
    "netLoadList": 98.32,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "13:38",
    "storageOutputList": 63.5,
    "powerGridList": 516.34,
    "socList": 15.28,
    "netLoadList": 90.57,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "13:39",
    "storageOutputList": 77.9,
    "powerGridList": 550.12,
    "socList": 15.36,
    "netLoadList": 94.44,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "13:40",
    "storageOutputList": 98,
    "powerGridList": 562.72,
    "socList": 15.36,
    "netLoadList": 92.94,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "13:41",
    "storageOutputList": 85.9,
    "powerGridList": 558.68,
    "socList": 15.44,
    "netLoadList": 94.56,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "13:42",
    "storageOutputList": 53.7,
    "powerGridList": 538.28,
    "socList": 15.52,
    "netLoadList": 96.92,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "13:43",
    "storageOutputList": 48.3,
    "powerGridList": 528.2,
    "socList": 15.52,
    "netLoadList": 95.98,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "13:44",
    "storageOutputList": 71.3,
    "powerGridList": 519.62,
    "socList": 15.6,
    "netLoadList": 89.66,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "13:45",
    "storageOutputList": 85.1,
    "powerGridList": 523.9,
    "socList": 15.68,
    "netLoadList": 87.76,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "13:46",
    "storageOutputList": 71.7,
    "powerGridList": 554.9,
    "socList": 15.76,
    "netLoadList": 96.64,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "13:47",
    "storageOutputList": 51.2,
    "powerGridList": 539.78,
    "socList": 15.76,
    "netLoadList": 97.72,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "13:48",
    "storageOutputList": 88.8,
    "powerGridList": 527.18,
    "socList": 15.82,
    "netLoadList": 87.68,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "13:49",
    "storageOutputList": 84.6,
    "powerGridList": 526.18,
    "socList": 15.82,
    "netLoadList": 88.32,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "13:50",
    "storageOutputList": 67.1,
    "powerGridList": 508.04,
    "socList": 15.9,
    "netLoadList": 88.19,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "13:51",
    "storageOutputList": 36.3,
    "powerGridList": 497.7,
    "socList": 15.98,
    "netLoadList": 92.28,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "13:52",
    "storageOutputList": 76.5,
    "powerGridList": 517.36,
    "socList": 15.98,
    "netLoadList": 88.17,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "13:53",
    "storageOutputList": 95,
    "powerGridList": 550.88,
    "socList": 16.06,
    "netLoadList": 91.18,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "13:54",
    "storageOutputList": 75,
    "powerGridList": 507.02,
    "socList": 16.14,
    "netLoadList": 86.4,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "13:55",
    "storageOutputList": 91.4,
    "powerGridList": 544.32,
    "socList": 16.22,
    "netLoadList": 90.58,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "13:56",
    "storageOutputList": 87.2,
    "powerGridList": 535,
    "socList": 16.22,
    "netLoadList": 89.56,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "13:57",
    "storageOutputList": 63.9,
    "powerGridList": 529.7,
    "socList": 16.3,
    "netLoadList": 93.16,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "13:58",
    "storageOutputList": 95,
    "powerGridList": 523.4,
    "socList": 16.38,
    "netLoadList": 85.68,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "13:59",
    "storageOutputList": 89.4,
    "powerGridList": 527.44,
    "socList": 16.38,
    "netLoadList": 87.61,
    "runningLlanList": 200,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "14:00",
    "storageOutputList": 1.1,
    "powerGridList": 450.08,
    "socList": 16.46,
    "netLoadList": 89.8,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "14:01",
    "storageOutputList": 0.9,
    "powerGridList": 493.16,
    "socList": 16.46,
    "netLoadList": 98.45,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "14:02",
    "storageOutputList": 0.9,
    "powerGridList": 473,
    "socList": 16.46,
    "netLoadList": 94.42,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "14:03",
    "storageOutputList": 0.9,
    "powerGridList": 460.9,
    "socList": 16.46,
    "netLoadList": 92,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "14:04",
    "storageOutputList": 0.9,
    "powerGridList": 442.76,
    "socList": 16.46,
    "netLoadList": 88.37,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "14:05",
    "storageOutputList": 0.9,
    "powerGridList": 510.56,
    "socList": 16.46,
    "netLoadList": 101.93,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "14:06",
    "storageOutputList": 0.8,
    "powerGridList": 461.42,
    "socList": 16.46,
    "netLoadList": 92.12,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "14:07",
    "storageOutputList": 0.8,
    "powerGridList": 470.74,
    "socList": 16.46,
    "netLoadList": 93.99,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "14:08",
    "storageOutputList": 0.8,
    "powerGridList": 481.32,
    "socList": 16.46,
    "netLoadList": 96.1,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "14:09",
    "storageOutputList": 0.8,
    "powerGridList": 478.8,
    "socList": 16.46,
    "netLoadList": 95.6,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "14:10",
    "storageOutputList": 3.8,
    "powerGridList": 452.84,
    "socList": 16.46,
    "netLoadList": 89.81,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "14:11",
    "storageOutputList": 3.8,
    "powerGridList": 481.06,
    "socList": 16.46,
    "netLoadList": 95.45,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "14:12",
    "storageOutputList": 3.7,
    "powerGridList": 462.42,
    "socList": 16.46,
    "netLoadList": 91.74,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "14:13",
    "storageOutputList": 3.7,
    "powerGridList": 466.7,
    "socList": 16.46,
    "netLoadList": 92.6,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "14:14",
    "storageOutputList": 0.3,
    "powerGridList": 452.08,
    "socList": 16.46,
    "netLoadList": 90.36,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "14:15",
    "storageOutputList": 0.3,
    "powerGridList": 477.04,
    "socList": 16.46,
    "netLoadList": 95.35,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "14:16",
    "storageOutputList": 0.3,
    "powerGridList": 461.42,
    "socList": 16.46,
    "netLoadList": 92.22,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "14:17",
    "storageOutputList": 0.3,
    "powerGridList": 462.92,
    "socList": 16.46,
    "netLoadList": 92.52,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "14:18",
    "storageOutputList": 0.3,
    "powerGridList": 463.94,
    "socList": 16.46,
    "netLoadList": 92.73,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "14:19",
    "storageOutputList": 0.8,
    "powerGridList": 451.58,
    "socList": 16.46,
    "netLoadList": 90.16,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "14:20",
    "storageOutputList": 0.8,
    "powerGridList": 505.26,
    "socList": 16.46,
    "netLoadList": 100.89,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "14:21",
    "storageOutputList": 0.8,
    "powerGridList": 458.9,
    "socList": 16.46,
    "netLoadList": 91.62,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "14:22",
    "storageOutputList": 0.8,
    "powerGridList": 446.8,
    "socList": 16.46,
    "netLoadList": 89.2,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "14:23",
    "storageOutputList": 0.8,
    "powerGridList": 469.22,
    "socList": 16.46,
    "netLoadList": 93.68,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "14:24",
    "storageOutputList": 0.8,
    "powerGridList": 472.5,
    "socList": 16.46,
    "netLoadList": 94.34,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "14:25",
    "storageOutputList": 0.8,
    "powerGridList": 475.52,
    "socList": 16.46,
    "netLoadList": 94.94,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "14:26",
    "storageOutputList": 0.8,
    "powerGridList": 473.76,
    "socList": 16.46,
    "netLoadList": 94.59,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "14:27",
    "storageOutputList": 0.8,
    "powerGridList": 447.8,
    "socList": 16.46,
    "netLoadList": 89.4,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "14:28",
    "storageOutputList": 0.8,
    "powerGridList": 481.82,
    "socList": 16.46,
    "netLoadList": 96.2,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "14:29",
    "storageOutputList": 0.8,
    "powerGridList": 495.18,
    "socList": 16.46,
    "netLoadList": 98.88,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "14:30",
    "storageOutputList": 0.8,
    "powerGridList": 446.3,
    "socList": 16.46,
    "netLoadList": 89.1,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "14:31",
    "storageOutputList": 0.8,
    "powerGridList": 446.3,
    "socList": 16.46,
    "netLoadList": 89.1,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "14:32",
    "storageOutputList": 3.7,
    "powerGridList": 443.78,
    "socList": 16.46,
    "netLoadList": 88.02,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "14:33",
    "storageOutputList": 3.7,
    "powerGridList": 478.8,
    "socList": 16.46,
    "netLoadList": 95.02,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "14:34",
    "storageOutputList": 3.7,
    "powerGridList": 469.22,
    "socList": 16.46,
    "netLoadList": 93.1,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "14:35",
    "storageOutputList": 3.7,
    "powerGridList": 462.68,
    "socList": 16.46,
    "netLoadList": 91.8,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "14:36",
    "storageOutputList": 0.3,
    "powerGridList": 440.5,
    "socList": 16.46,
    "netLoadList": 88.04,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "14:37",
    "storageOutputList": 0.3,
    "powerGridList": 471.74,
    "socList": 16.46,
    "netLoadList": 94.29,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "14:38",
    "storageOutputList": 0.3,
    "powerGridList": 446.54,
    "socList": 16.46,
    "netLoadList": 89.25,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "14:39",
    "storageOutputList": 0.3,
    "powerGridList": 446.04,
    "socList": 16.46,
    "netLoadList": 89.15,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "14:40",
    "storageOutputList": 0.3,
    "powerGridList": 454.6,
    "socList": 16.46,
    "netLoadList": 90.86,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "14:41",
    "storageOutputList": 0.8,
    "powerGridList": 467.2,
    "socList": 16.46,
    "netLoadList": 93.28,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "14:42",
    "storageOutputList": 0.8,
    "powerGridList": 438.98,
    "socList": 16.46,
    "netLoadList": 87.64,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "14:43",
    "storageOutputList": 0.8,
    "powerGridList": 427.9,
    "socList": 16.46,
    "netLoadList": 85.42,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "14:44",
    "storageOutputList": 0.8,
    "powerGridList": 432.94,
    "socList": 16.46,
    "netLoadList": 86.43,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "14:45",
    "storageOutputList": 0.8,
    "powerGridList": 459.14,
    "socList": 16.46,
    "netLoadList": 91.67,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "14:46",
    "storageOutputList": 0.8,
    "powerGridList": 455.36,
    "socList": 16.46,
    "netLoadList": 90.91,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "14:47",
    "storageOutputList": 0.8,
    "powerGridList": 425.62,
    "socList": 16.46,
    "netLoadList": 84.96,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "14:48",
    "storageOutputList": 0.8,
    "powerGridList": 430.92,
    "socList": 16.46,
    "netLoadList": 86.02,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "14:49",
    "storageOutputList": 0.8,
    "powerGridList": 455.62,
    "socList": 16.46,
    "netLoadList": 90.96,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "14:50",
    "storageOutputList": 0.8,
    "powerGridList": 475.52,
    "socList": 16.46,
    "netLoadList": 94.94,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "14:51",
    "storageOutputList": 0.8,
    "powerGridList": 472,
    "socList": 16.46,
    "netLoadList": 94.24,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "14:52",
    "storageOutputList": 0.8,
    "powerGridList": 432.18,
    "socList": 16.46,
    "netLoadList": 86.28,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "14:53",
    "storageOutputList": 0.8,
    "powerGridList": 434.2,
    "socList": 16.46,
    "netLoadList": 86.68,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "14:54",
    "storageOutputList": 0.8,
    "powerGridList": 455.86,
    "socList": 16.46,
    "netLoadList": 91.01,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "14:55",
    "storageOutputList": 0.8,
    "powerGridList": 431.68,
    "socList": 16.46,
    "netLoadList": 86.18,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "14:56",
    "storageOutputList": 0.8,
    "powerGridList": 478.8,
    "socList": 16.46,
    "netLoadList": 95.6,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "14:57",
    "storageOutputList": 0.8,
    "powerGridList": 430.92,
    "socList": 16.46,
    "netLoadList": 86.02,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "14:58",
    "storageOutputList": 0.8,
    "powerGridList": 429.16,
    "socList": 16.46,
    "netLoadList": 85.67,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "14:59",
    "storageOutputList": 0.8,
    "powerGridList": 431.68,
    "socList": 16.46,
    "netLoadList": 86.18,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "15:00",
    "storageOutputList": 0.8,
    "powerGridList": 471.24,
    "socList": 16.46,
    "netLoadList": 94.09,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "15:01",
    "storageOutputList": -89.6,
    "powerGridList": 354.06,
    "socList": 16.48,
    "netLoadList": 88.73,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "15:02",
    "storageOutputList": -198.7,
    "powerGridList": 240.66,
    "socList": 16.32,
    "netLoadList": 87.87,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "15:03",
    "storageOutputList": -198.5,
    "powerGridList": 248.22,
    "socList": 16.16,
    "netLoadList": 89.34,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "15:04",
    "storageOutputList": -195.5,
    "powerGridList": 242.18,
    "socList": 16.02,
    "netLoadList": 87.54,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "15:05",
    "storageOutputList": -195.6,
    "powerGridList": 305.18,
    "socList": 15.86,
    "netLoadList": 100.16,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "15:06",
    "storageOutputList": -195.6,
    "powerGridList": 254.26,
    "socList": 15.7,
    "netLoadList": 89.97,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "15:07",
    "storageOutputList": -195.7,
    "powerGridList": 256.78,
    "socList": 15.54,
    "netLoadList": 90.5,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "15:08",
    "storageOutputList": -195.2,
    "powerGridList": 249.48,
    "socList": 15.3,
    "netLoadList": 88.94,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "15:09",
    "storageOutputList": -195.7,
    "powerGridList": 275.68,
    "socList": 15.14,
    "netLoadList": 94.28,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "15:10",
    "storageOutputList": -195.5,
    "powerGridList": 287.78,
    "socList": 14.98,
    "netLoadList": 96.66,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "15:11",
    "storageOutputList": -195.6,
    "powerGridList": 288.04,
    "socList": 14.82,
    "netLoadList": 96.73,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "15:12",
    "storageOutputList": -195.5,
    "powerGridList": 252.76,
    "socList": 14.66,
    "netLoadList": 89.65,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "15:13",
    "storageOutputList": -195.7,
    "powerGridList": 240.66,
    "socList": 14.52,
    "netLoadList": 87.27,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "15:14",
    "storageOutputList": -195.6,
    "powerGridList": 291.06,
    "socList": 14.36,
    "netLoadList": 97.33,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "15:15",
    "storageOutputList": -195.4,
    "powerGridList": 281.24,
    "socList": 14.2,
    "netLoadList": 95.33,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "15:16",
    "storageOutputList": -195.6,
    "powerGridList": 239.9,
    "socList": 13.96,
    "netLoadList": 87.1,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "15:17",
    "storageOutputList": -195.6,
    "powerGridList": 239.4,
    "socList": 13.8,
    "netLoadList": 87,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "15:18",
    "storageOutputList": -195.6,
    "powerGridList": 248.22,
    "socList": 13.64,
    "netLoadList": 88.76,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "15:19",
    "storageOutputList": -195.6,
    "powerGridList": 274.18,
    "socList": 13.48,
    "netLoadList": 93.96,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "15:20",
    "storageOutputList": -195.5,
    "powerGridList": 276.7,
    "socList": 13.32,
    "netLoadList": 94.44,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "15:21",
    "storageOutputList": -198.6,
    "powerGridList": 275.68,
    "socList": 13.16,
    "netLoadList": 94.86,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "15:22",
    "storageOutputList": -198.5,
    "powerGridList": 239.66,
    "socList": 13.02,
    "netLoadList": 87.63,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "15:23",
    "storageOutputList": -198.7,
    "powerGridList": 252.76,
    "socList": 12.78,
    "netLoadList": 90.29,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "15:24",
    "storageOutputList": -198.5,
    "powerGridList": 296.36,
    "socList": 12.62,
    "netLoadList": 98.97,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "15:25",
    "storageOutputList": -198.6,
    "powerGridList": 303.92,
    "socList": 12.46,
    "netLoadList": 100.5,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "15:26",
    "storageOutputList": -198.4,
    "powerGridList": 239.14,
    "socList": 12.3,
    "netLoadList": 87.51,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "15:27",
    "storageOutputList": -198.6,
    "powerGridList": 260.32,
    "socList": 12.14,
    "netLoadList": 91.78,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "15:28",
    "storageOutputList": -198.4,
    "powerGridList": 295.1,
    "socList": 11.98,
    "netLoadList": 98.7,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "15:29",
    "storageOutputList": -198.4,
    "powerGridList": 241.16,
    "socList": 11.82,
    "netLoadList": 87.91,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "15:30",
    "storageOutputList": -198.6,
    "powerGridList": 236.62,
    "socList": 11.58,
    "netLoadList": 87.04,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "15:31",
    "storageOutputList": -194.2,
    "powerGridList": 246.96,
    "socList": 11.44,
    "netLoadList": 88.23,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "15:32",
    "storageOutputList": -195.4,
    "powerGridList": 268.88,
    "socList": 11.28,
    "netLoadList": 92.86,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "15:33",
    "storageOutputList": -195.4,
    "powerGridList": 292.58,
    "socList": 11.12,
    "netLoadList": 97.6,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "15:34",
    "storageOutputList": -195.4,
    "powerGridList": 251,
    "socList": 10.96,
    "netLoadList": 89.28,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "15:35",
    "storageOutputList": -195.5,
    "powerGridList": 227.56,
    "socList": 10.8,
    "netLoadList": 84.61,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "15:36",
    "storageOutputList": -195.6,
    "powerGridList": 256.28,
    "socList": 10.64,
    "netLoadList": 90.38,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "15:37",
    "storageOutputList": -195.4,
    "powerGridList": 257.8,
    "socList": 10.4,
    "netLoadList": 90.64,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "15:38",
    "storageOutputList": -195.4,
    "powerGridList": 264.34,
    "socList": 10.24,
    "netLoadList": 91.95,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "15:39",
    "storageOutputList": -195.3,
    "powerGridList": 244.7,
    "socList": 10.08,
    "netLoadList": 88,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "15:40",
    "storageOutputList": -195.4,
    "powerGridList": 265.36,
    "socList": 9.92,
    "netLoadList": 92.15,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "15:41",
    "storageOutputList": -195.4,
    "powerGridList": 262.08,
    "socList": 9.78,
    "netLoadList": 91.5,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "15:42",
    "storageOutputList": -195.4,
    "powerGridList": 302.14,
    "socList": 9.62,
    "netLoadList": 99.51,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "15:43",
    "storageOutputList": -195.4,
    "powerGridList": 286.02,
    "socList": 9.38,
    "netLoadList": 96.28,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "15:44",
    "storageOutputList": -195.6,
    "powerGridList": 265.6,
    "socList": 9.22,
    "netLoadList": 92.24,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "15:45",
    "storageOutputList": -198.4,
    "powerGridList": 236.62,
    "socList": 9.06,
    "netLoadList": 87,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "15:46",
    "storageOutputList": -198.3,
    "powerGridList": 244.7,
    "socList": 8.9,
    "netLoadList": 88.6,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "15:47",
    "storageOutputList": -198.4,
    "powerGridList": 235.88,
    "socList": 8.74,
    "netLoadList": 86.86,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "15:48",
    "storageOutputList": -198.3,
    "powerGridList": 272.66,
    "socList": 8.58,
    "netLoadList": 94.19,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "15:49",
    "storageOutputList": -198.5,
    "powerGridList": 264.1,
    "socList": 8.36,
    "netLoadList": 92.52,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "15:50",
    "storageOutputList": -198.7,
    "powerGridList": 243.18,
    "socList": 8.2,
    "netLoadList": 88.38,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "15:51",
    "storageOutputList": -198.6,
    "powerGridList": 249.48,
    "socList": 8.04,
    "netLoadList": 89.62,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "15:52",
    "storageOutputList": -198.4,
    "powerGridList": 269.64,
    "socList": 7.88,
    "netLoadList": 93.61,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "15:53",
    "storageOutputList": -198.5,
    "powerGridList": 258.3,
    "socList": 7.72,
    "netLoadList": 91.36,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "15:54",
    "storageOutputList": -198.4,
    "powerGridList": 292.06,
    "socList": 7.56,
    "netLoadList": 98.09,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "15:55",
    "storageOutputList": -198.6,
    "powerGridList": 259.82,
    "socList": 7.32,
    "netLoadList": 91.68,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "15:56",
    "storageOutputList": -198.3,
    "powerGridList": 245.7,
    "socList": 7.16,
    "netLoadList": 88.8,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "15:57",
    "storageOutputList": -195.2,
    "powerGridList": 267.88,
    "socList": 7,
    "netLoadList": 92.62,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "15:58",
    "storageOutputList": -195.3,
    "powerGridList": 283,
    "socList": 6.84,
    "netLoadList": 95.66,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "15:59",
    "storageOutputList": -195.3,
    "powerGridList": 276.7,
    "socList": 6.7,
    "netLoadList": 94.4,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "16:00",
    "storageOutputList": -195.5,
    "powerGridList": 270.64,
    "socList": 6.46,
    "netLoadList": 93.23,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "16:01",
    "storageOutputList": -195.4,
    "powerGridList": 248.22,
    "socList": 6.3,
    "netLoadList": 88.72,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "16:02",
    "storageOutputList": -195.4,
    "powerGridList": 263.6,
    "socList": 6.14,
    "netLoadList": 91.8,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "16:03",
    "storageOutputList": -195.5,
    "powerGridList": 260.06,
    "socList": 5.98,
    "netLoadList": 91.11,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "16:04",
    "storageOutputList": -195.4,
    "powerGridList": 254.02,
    "socList": 5.82,
    "netLoadList": 89.88,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "16:05",
    "storageOutputList": -195.4,
    "powerGridList": 272.16,
    "socList": 5.66,
    "netLoadList": 93.51,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "16:06",
    "storageOutputList": -195.4,
    "powerGridList": 271.66,
    "socList": 5.42,
    "netLoadList": 93.41,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "16:07",
    "storageOutputList": -195.3,
    "powerGridList": 249.22,
    "socList": 5.28,
    "netLoadList": 88.9,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "16:08",
    "storageOutputList": -195.3,
    "powerGridList": 231.08,
    "socList": 5.12,
    "netLoadList": 85.28,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "16:09",
    "storageOutputList": -195.3,
    "powerGridList": 264.86,
    "socList": 4.96,
    "netLoadList": 92.03,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "16:10",
    "storageOutputList": -195.6,
    "powerGridList": 226.54,
    "socList": 4.8,
    "netLoadList": 84.43,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "16:11",
    "storageOutputList": -195.3,
    "powerGridList": 249.22,
    "socList": 4.56,
    "netLoadList": 88.9,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "16:12",
    "storageOutputList": -198.3,
    "powerGridList": 293.08,
    "socList": 4.4,
    "netLoadList": 98.28,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "16:13",
    "storageOutputList": -198.6,
    "powerGridList": 276.94,
    "socList": 4.24,
    "netLoadList": 95.11,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "16:14",
    "storageOutputList": -198.4,
    "powerGridList": 266.12,
    "socList": 4.08,
    "netLoadList": 92.9,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "16:15",
    "storageOutputList": -198.3,
    "powerGridList": 247.46,
    "socList": 3.92,
    "netLoadList": 89.15,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "16:16",
    "storageOutputList": -198.4,
    "powerGridList": 261.82,
    "socList": 3.76,
    "netLoadList": 92.04,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "16:17",
    "storageOutputList": -198.5,
    "powerGridList": 230.58,
    "socList": 3.54,
    "netLoadList": 85.82,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "16:18",
    "storageOutputList": -198.3,
    "powerGridList": 199.84,
    "socList": 3.38,
    "netLoadList": 79.63,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "16:19",
    "storageOutputList": -198.3,
    "powerGridList": 213.44,
    "socList": 3.22,
    "netLoadList": 82.35,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "16:20",
    "storageOutputList": -195.1,
    "powerGridList": 221.76,
    "socList": 3.06,
    "netLoadList": 83.37,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "16:21",
    "storageOutputList": -185.6,
    "powerGridList": 256.28,
    "socList": 2.82,
    "netLoadList": 88.38,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "16:22",
    "storageOutputList": -169.4,
    "powerGridList": 248.98,
    "socList": 2.74,
    "netLoadList": 83.68,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "16:23",
    "storageOutputList": -153.6,
    "powerGridList": 254.78,
    "socList": 2.58,
    "netLoadList": 81.68,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "16:24",
    "storageOutputList": -137.7,
    "powerGridList": 256.04,
    "socList": 2.42,
    "netLoadList": 78.75,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "16:25",
    "storageOutputList": -129.7,
    "powerGridList": 243.44,
    "socList": 2.34,
    "netLoadList": 74.63,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "16:26",
    "storageOutputList": -115.8,
    "powerGridList": 250.74,
    "socList": 2.2,
    "netLoadList": 73.31,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "16:27",
    "storageOutputList": -107.9,
    "powerGridList": 280.98,
    "socList": 2.12,
    "netLoadList": 77.78,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "16:28",
    "storageOutputList": -99.9,
    "powerGridList": 272.92,
    "socList": 2.04,
    "netLoadList": 74.56,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "16:29",
    "storageOutputList": -91.9,
    "powerGridList": 266.12,
    "socList": 1.96,
    "netLoadList": 71.6,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "16:30",
    "storageOutputList": -83.9,
    "powerGridList": 276.94,
    "socList": 1.88,
    "netLoadList": 72.17,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "16:31",
    "storageOutputList": -75.9,
    "powerGridList": 292.06,
    "socList": 1.8,
    "netLoadList": 73.59,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "16:32",
    "storageOutputList": -67.9,
    "powerGridList": 279.22,
    "socList": 1.72,
    "netLoadList": 69.42,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "16:33",
    "storageOutputList": -59.8,
    "powerGridList": 288.28,
    "socList": 1.64,
    "netLoadList": 69.62,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "16:34",
    "storageOutputList": -60,
    "powerGridList": 305.42,
    "socList": 1.56,
    "netLoadList": 73.08,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "16:35",
    "storageOutputList": -52,
    "powerGridList": 281.98,
    "socList": 1.56,
    "netLoadList": 66.8,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "16:36",
    "storageOutputList": -44.1,
    "powerGridList": 295.1,
    "socList": 1.48,
    "netLoadList": 67.84,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "16:37",
    "storageOutputList": -44.1,
    "powerGridList": 275.94,
    "socList": 1.48,
    "netLoadList": 64.01,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "16:38",
    "storageOutputList": -34,
    "powerGridList": 301.14,
    "socList": 1.38,
    "netLoadList": 67.03,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "16:39",
    "storageOutputList": -37,
    "powerGridList": 329.62,
    "socList": 1.38,
    "netLoadList": 73.32,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "16:40",
    "storageOutputList": -36.9,
    "powerGridList": 299.62,
    "socList": 1.3,
    "netLoadList": 67.3,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "16:41",
    "storageOutputList": -29,
    "powerGridList": 290.3,
    "socList": 1.3,
    "netLoadList": 63.86,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "16:42",
    "storageOutputList": -29,
    "powerGridList": 290.06,
    "socList": 1.3,
    "netLoadList": 63.81,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "16:43",
    "storageOutputList": -29,
    "powerGridList": 281.48,
    "socList": 1.22,
    "netLoadList": 62.1,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "16:44",
    "storageOutputList": -20.8,
    "powerGridList": 291.32,
    "socList": 1.22,
    "netLoadList": 62.42,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "16:45",
    "storageOutputList": -20.8,
    "powerGridList": 329.36,
    "socList": 1.22,
    "netLoadList": 70.03,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "16:46",
    "storageOutputList": -20.7,
    "powerGridList": 335.92,
    "socList": 1.22,
    "netLoadList": 71.32,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "16:47",
    "storageOutputList": -20.8,
    "powerGridList": 292.32,
    "socList": 1.16,
    "netLoadList": 62.62,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "16:48",
    "storageOutputList": -14.9,
    "powerGridList": 297.1,
    "socList": 1.16,
    "netLoadList": 62.4,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "16:49",
    "storageOutputList": -14.9,
    "powerGridList": 306.44,
    "socList": 1.16,
    "netLoadList": 64.27,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "16:50",
    "storageOutputList": -14.9,
    "powerGridList": 319.54,
    "socList": 1.16,
    "netLoadList": 66.89,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "16:51",
    "storageOutputList": -11.6,
    "powerGridList": 302.4,
    "socList": 1.16,
    "netLoadList": 62.8,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "16:52",
    "storageOutputList": -11.9,
    "powerGridList": 293.08,
    "socList": 1.16,
    "netLoadList": 61,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "16:53",
    "storageOutputList": -4,
    "powerGridList": 307.7,
    "socList": 1.08,
    "netLoadList": 62.34,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "16:54",
    "storageOutputList": -4.1,
    "powerGridList": 292.32,
    "socList": 1.08,
    "netLoadList": 59.28,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "16:55",
    "storageOutputList": -4.1,
    "powerGridList": 290.06,
    "socList": 1.08,
    "netLoadList": 58.83,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "16:56",
    "storageOutputList": -4.1,
    "powerGridList": 332.38,
    "socList": 1.08,
    "netLoadList": 67.3,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "16:57",
    "storageOutputList": -4.1,
    "powerGridList": 308.2,
    "socList": 1.08,
    "netLoadList": 62.46,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "16:58",
    "storageOutputList": -4.1,
    "powerGridList": 318.52,
    "socList": 1.08,
    "netLoadList": 64.52,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "16:59",
    "storageOutputList": -6.9,
    "powerGridList": 272.16,
    "socList": 1.08,
    "netLoadList": 55.81,
    "runningLlanList": -200,
    "priceList": 1.38,
    "时段": "尖"
   },
   {
    "date": "17:00",
    "storageOutputList": -7,
    "powerGridList": 280.22,
    "socList": 1.08,
    "netLoadList": 57.44,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "17:01",
    "storageOutputList": -6.9,
    "powerGridList": 276.2,
    "socList": 1.08,
    "netLoadList": 56.62,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "17:02",
    "storageOutputList": -6.9,
    "powerGridList": 297.86,
    "socList": 1.08,
    "netLoadList": 60.95,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "17:03",
    "storageOutputList": -7,
    "powerGridList": 305.68,
    "socList": 1.08,
    "netLoadList": 62.54,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "17:04",
    "storageOutputList": 1,
    "powerGridList": 294.58,
    "socList": 0.98,
    "netLoadList": 58.72,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "17:05",
    "storageOutputList": 0.8,
    "powerGridList": 277.96,
    "socList": 0.98,
    "netLoadList": 55.43,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "17:06",
    "storageOutputList": 0.8,
    "powerGridList": 283,
    "socList": 0.98,
    "netLoadList": 56.44,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "17:07",
    "storageOutputList": 0.8,
    "powerGridList": 259.82,
    "socList": 0.98,
    "netLoadList": 51.8,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "17:08",
    "storageOutputList": 0.8,
    "powerGridList": 263.6,
    "socList": 0.98,
    "netLoadList": 52.56,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "17:09",
    "storageOutputList": 0.8,
    "powerGridList": 293.32,
    "socList": 0.98,
    "netLoadList": 58.5,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "17:10",
    "storageOutputList": 0.8,
    "powerGridList": 274.42,
    "socList": 0.98,
    "netLoadList": 54.72,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "17:11",
    "storageOutputList": 0.8,
    "powerGridList": 257.04,
    "socList": 0.98,
    "netLoadList": 51.25,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "17:12",
    "storageOutputList": 0.8,
    "powerGridList": 271.4,
    "socList": 0.98,
    "netLoadList": 54.12,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "17:13",
    "storageOutputList": 0.8,
    "powerGridList": 262.84,
    "socList": 0.98,
    "netLoadList": 52.41,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "17:14",
    "storageOutputList": 0.8,
    "powerGridList": 254.52,
    "socList": 0.98,
    "netLoadList": 50.74,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "17:15",
    "storageOutputList": 0.8,
    "powerGridList": 297.62,
    "socList": 0.98,
    "netLoadList": 59.36,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "17:16",
    "storageOutputList": 0.8,
    "powerGridList": 280.98,
    "socList": 0.98,
    "netLoadList": 56.04,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "17:17",
    "storageOutputList": 0.8,
    "powerGridList": 281.24,
    "socList": 0.98,
    "netLoadList": 56.09,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "17:18",
    "storageOutputList": 0.8,
    "powerGridList": 283.5,
    "socList": 0.98,
    "netLoadList": 56.54,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "17:19",
    "storageOutputList": 0.8,
    "powerGridList": 312.74,
    "socList": 0.98,
    "netLoadList": 62.39,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "17:20",
    "storageOutputList": 4.4,
    "powerGridList": 255.78,
    "socList": 0.98,
    "netLoadList": 50.28,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "17:21",
    "storageOutputList": 3.8,
    "powerGridList": 272.92,
    "socList": 0.98,
    "netLoadList": 53.82,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "17:22",
    "storageOutputList": 3.7,
    "powerGridList": 248.22,
    "socList": 0.98,
    "netLoadList": 48.9,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "17:23",
    "storageOutputList": 3.7,
    "powerGridList": 284.26,
    "socList": 0.98,
    "netLoadList": 56.11,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "17:24",
    "storageOutputList": 0.3,
    "powerGridList": 285.26,
    "socList": 0.98,
    "netLoadList": 56.99,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "17:25",
    "storageOutputList": 0.3,
    "powerGridList": 256.28,
    "socList": 0.98,
    "netLoadList": 51.2,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "17:26",
    "storageOutputList": 0.3,
    "powerGridList": 240.16,
    "socList": 0.98,
    "netLoadList": 47.97,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "17:27",
    "storageOutputList": 0.3,
    "powerGridList": 257.54,
    "socList": 0.98,
    "netLoadList": 51.45,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "17:28",
    "storageOutputList": 0.3,
    "powerGridList": 240.4,
    "socList": 0.98,
    "netLoadList": 48.02,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "17:29",
    "storageOutputList": 0.3,
    "powerGridList": 280.72,
    "socList": 0.98,
    "netLoadList": 56.08,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "17:30",
    "storageOutputList": 0.8,
    "powerGridList": 275.44,
    "socList": 0.98,
    "netLoadList": 54.93,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "17:31",
    "storageOutputList": 0.8,
    "powerGridList": 252,
    "socList": 0.98,
    "netLoadList": 50.24,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "17:32",
    "storageOutputList": 0.8,
    "powerGridList": 256.54,
    "socList": 0.98,
    "netLoadList": 51.15,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "17:33",
    "storageOutputList": 0.8,
    "powerGridList": 280.98,
    "socList": 0.98,
    "netLoadList": 56.04,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "17:34",
    "storageOutputList": 0.8,
    "powerGridList": 259.3,
    "socList": 0.98,
    "netLoadList": 51.7,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "17:35",
    "storageOutputList": 0.8,
    "powerGridList": 255.28,
    "socList": 0.98,
    "netLoadList": 50.9,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "17:36",
    "storageOutputList": 0.8,
    "powerGridList": 241.16,
    "socList": 0.98,
    "netLoadList": 48.07,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "17:37",
    "storageOutputList": 0.8,
    "powerGridList": 275.18,
    "socList": 0.98,
    "netLoadList": 54.88,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "17:38",
    "storageOutputList": 0.8,
    "powerGridList": 244.18,
    "socList": 0.98,
    "netLoadList": 48.68,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "17:39",
    "storageOutputList": 0.8,
    "powerGridList": 242.68,
    "socList": 0.98,
    "netLoadList": 48.38,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "17:40",
    "storageOutputList": 0.8,
    "powerGridList": 259.3,
    "socList": 0.98,
    "netLoadList": 51.7,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "17:41",
    "storageOutputList": 0.8,
    "powerGridList": 267.62,
    "socList": 0.98,
    "netLoadList": 53.36,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "17:42",
    "storageOutputList": 0.8,
    "powerGridList": 236.38,
    "socList": 0.98,
    "netLoadList": 47.12,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "17:43",
    "storageOutputList": 0.8,
    "powerGridList": 251,
    "socList": 0.98,
    "netLoadList": 50.04,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "17:44",
    "storageOutputList": 0.8,
    "powerGridList": 285.76,
    "socList": 0.98,
    "netLoadList": 56.99,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "17:45",
    "storageOutputList": 0.9,
    "powerGridList": 241.16,
    "socList": 0.98,
    "netLoadList": 48.05,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "17:46",
    "storageOutputList": 0.8,
    "powerGridList": 236.62,
    "socList": 0.98,
    "netLoadList": 47.16,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "17:47",
    "storageOutputList": 0.8,
    "powerGridList": 242.18,
    "socList": 0.98,
    "netLoadList": 48.28,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "17:48",
    "storageOutputList": 0.8,
    "powerGridList": 288.04,
    "socList": 0.98,
    "netLoadList": 57.45,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "17:49",
    "storageOutputList": 0.8,
    "powerGridList": 165.06,
    "socList": 0.98,
    "netLoadList": 32.85,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "17:50",
    "storageOutputList": 0.3,
    "powerGridList": 162.04,
    "socList": 0.98,
    "netLoadList": 32.35,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "17:51",
    "storageOutputList": 0.3,
    "powerGridList": 161.78,
    "socList": 0.98,
    "netLoadList": 32.3,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "17:52",
    "storageOutputList": 0.3,
    "powerGridList": 201.34,
    "socList": 0.98,
    "netLoadList": 40.21,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "17:53",
    "storageOutputList": 0.3,
    "powerGridList": 168.34,
    "socList": 0.98,
    "netLoadList": 33.61,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "17:54",
    "storageOutputList": 0.3,
    "powerGridList": 165.56,
    "socList": 0.98,
    "netLoadList": 33.05,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "17:55",
    "storageOutputList": 0.3,
    "powerGridList": 197.32,
    "socList": 0.98,
    "netLoadList": 39.4,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "17:56",
    "storageOutputList": 0.3,
    "powerGridList": 121.72,
    "socList": 0.98,
    "netLoadList": 24.28,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "17:57",
    "storageOutputList": 0.3,
    "powerGridList": 96.52,
    "socList": 0.98,
    "netLoadList": 19.24,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "17:58",
    "storageOutputList": 0.3,
    "powerGridList": 90.22,
    "socList": 0.98,
    "netLoadList": 17.98,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "17:59",
    "storageOutputList": 0.3,
    "powerGridList": 156.24,
    "socList": 0.98,
    "netLoadList": 31.19,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "18:00",
    "storageOutputList": 0.3,
    "powerGridList": 109.88,
    "socList": 0.98,
    "netLoadList": 21.92,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "18:01",
    "storageOutputList": 0.3,
    "powerGridList": 129.02,
    "socList": 0.98,
    "netLoadList": 25.74,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "18:02",
    "storageOutputList": 0.3,
    "powerGridList": 110.62,
    "socList": 0.98,
    "netLoadList": 22.06,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "18:03",
    "storageOutputList": 0.3,
    "powerGridList": 145.4,
    "socList": 0.98,
    "netLoadList": 29.02,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "18:04",
    "storageOutputList": 0.3,
    "powerGridList": 139.1,
    "socList": 0.98,
    "netLoadList": 27.76,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "18:05",
    "storageOutputList": 0.3,
    "powerGridList": 112.14,
    "socList": 0.98,
    "netLoadList": 22.37,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "18:06",
    "storageOutputList": 0.3,
    "powerGridList": 134.56,
    "socList": 0.98,
    "netLoadList": 26.85,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "18:07",
    "storageOutputList": 0.3,
    "powerGridList": 118.7,
    "socList": 0.98,
    "netLoadList": 23.68,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "18:08",
    "storageOutputList": 0.3,
    "powerGridList": 165.32,
    "socList": 0.98,
    "netLoadList": 33,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "18:09",
    "storageOutputList": 0.3,
    "powerGridList": 114.66,
    "socList": 0.98,
    "netLoadList": 22.87,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "18:10",
    "storageOutputList": 0.4,
    "powerGridList": 139.1,
    "socList": 0.98,
    "netLoadList": 27.74,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "18:11",
    "storageOutputList": 0.3,
    "powerGridList": 148.68,
    "socList": 0.98,
    "netLoadList": 29.68,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "18:12",
    "storageOutputList": 0.3,
    "powerGridList": 157.76,
    "socList": 0.98,
    "netLoadList": 31.49,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "18:13",
    "storageOutputList": 0.3,
    "powerGridList": 208.4,
    "socList": 0.98,
    "netLoadList": 41.62,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "18:14",
    "storageOutputList": 0.3,
    "powerGridList": 194.54,
    "socList": 0.98,
    "netLoadList": 38.85,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "18:15",
    "storageOutputList": 0.3,
    "powerGridList": 193.04,
    "socList": 0.98,
    "netLoadList": 38.55,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "18:16",
    "storageOutputList": 0.3,
    "powerGridList": 225.54,
    "socList": 0.98,
    "netLoadList": 45.05,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "18:17",
    "storageOutputList": 0.3,
    "powerGridList": 227.06,
    "socList": 0.98,
    "netLoadList": 45.35,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "18:18",
    "storageOutputList": 0.3,
    "powerGridList": 206.64,
    "socList": 0.98,
    "netLoadList": 41.27,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "18:19",
    "storageOutputList": 0.3,
    "powerGridList": 225.28,
    "socList": 0.98,
    "netLoadList": 45,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "18:20",
    "storageOutputList": 0.3,
    "powerGridList": 297.86,
    "socList": 0.98,
    "netLoadList": 59.51,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "18:21",
    "storageOutputList": 0.3,
    "powerGridList": 366.66,
    "socList": 0.98,
    "netLoadList": 73.27,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "18:22",
    "storageOutputList": 0.3,
    "powerGridList": 297.62,
    "socList": 0.98,
    "netLoadList": 59.46,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "18:23",
    "storageOutputList": 0.3,
    "powerGridList": 295.1,
    "socList": 0.98,
    "netLoadList": 58.96,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "18:24",
    "storageOutputList": 0.3,
    "powerGridList": 241.42,
    "socList": 0.98,
    "netLoadList": 48.22,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "18:25",
    "storageOutputList": 0.3,
    "powerGridList": 213.7,
    "socList": 0.98,
    "netLoadList": 42.68,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "18:26",
    "storageOutputList": 0.3,
    "powerGridList": 203.12,
    "socList": 0.98,
    "netLoadList": 40.56,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "18:27",
    "storageOutputList": 0.3,
    "powerGridList": 170.36,
    "socList": 0.98,
    "netLoadList": 34.01,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "18:28",
    "storageOutputList": 0.3,
    "powerGridList": 211.94,
    "socList": 0.98,
    "netLoadList": 42.33,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "18:29",
    "storageOutputList": 0.3,
    "powerGridList": 217.98,
    "socList": 0.98,
    "netLoadList": 43.54,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "18:30",
    "storageOutputList": 0.3,
    "powerGridList": 197.06,
    "socList": 0.98,
    "netLoadList": 39.35,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "18:31",
    "storageOutputList": 0.3,
    "powerGridList": 318.02,
    "socList": 0.98,
    "netLoadList": 63.54,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "18:32",
    "storageOutputList": 0.3,
    "powerGridList": 301.14,
    "socList": 0.98,
    "netLoadList": 60.17,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "18:33",
    "storageOutputList": 0.3,
    "powerGridList": 277.2,
    "socList": 0.98,
    "netLoadList": 55.38,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "18:34",
    "storageOutputList": 0.3,
    "powerGridList": 266.62,
    "socList": 0.98,
    "netLoadList": 53.26,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "18:35",
    "storageOutputList": 0.3,
    "powerGridList": 262.34,
    "socList": 0.98,
    "netLoadList": 52.41,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "18:36",
    "storageOutputList": 0.3,
    "powerGridList": 292.82,
    "socList": 0.98,
    "netLoadList": 58.5,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "18:37",
    "storageOutputList": 0.3,
    "powerGridList": 274.42,
    "socList": 0.98,
    "netLoadList": 54.82,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "18:38",
    "storageOutputList": 0.3,
    "powerGridList": 238.9,
    "socList": 0.98,
    "netLoadList": 47.72,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "18:39",
    "storageOutputList": 0.3,
    "powerGridList": 253.76,
    "socList": 0.98,
    "netLoadList": 50.69,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "18:40",
    "storageOutputList": 0.4,
    "powerGridList": 275.18,
    "socList": 0.98,
    "netLoadList": 54.96,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "18:41",
    "storageOutputList": 0.3,
    "powerGridList": 265.6,
    "socList": 0.98,
    "netLoadList": 53.06,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "18:42",
    "storageOutputList": 0.3,
    "powerGridList": 244.18,
    "socList": 0.98,
    "netLoadList": 48.78,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "18:43",
    "storageOutputList": 0.3,
    "powerGridList": 301.14,
    "socList": 0.98,
    "netLoadList": 60.17,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "18:44",
    "storageOutputList": 0.3,
    "powerGridList": 278.2,
    "socList": 0.98,
    "netLoadList": 55.58,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "18:45",
    "storageOutputList": 0.4,
    "powerGridList": 314.24,
    "socList": 0.98,
    "netLoadList": 62.77,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "18:46",
    "storageOutputList": 0.3,
    "powerGridList": 281.74,
    "socList": 0.98,
    "netLoadList": 56.29,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "18:47",
    "storageOutputList": 0.3,
    "powerGridList": 296.6,
    "socList": 0.98,
    "netLoadList": 59.26,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "18:48",
    "storageOutputList": 0.3,
    "powerGridList": 287.54,
    "socList": 0.98,
    "netLoadList": 57.45,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "18:49",
    "storageOutputList": 0.3,
    "powerGridList": 306.94,
    "socList": 0.98,
    "netLoadList": 61.33,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "18:50",
    "storageOutputList": 0.3,
    "powerGridList": 302.14,
    "socList": 0.98,
    "netLoadList": 60.37,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "18:51",
    "storageOutputList": 0.3,
    "powerGridList": 330.12,
    "socList": 0.98,
    "netLoadList": 65.96,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "18:52",
    "storageOutputList": 0.3,
    "powerGridList": 351.28,
    "socList": 0.98,
    "netLoadList": 70.2,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "18:53",
    "storageOutputList": 0.3,
    "powerGridList": 315.76,
    "socList": 0.98,
    "netLoadList": 63.09,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "18:54",
    "storageOutputList": 0.3,
    "powerGridList": 293.32,
    "socList": 0.98,
    "netLoadList": 58.6,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "18:55",
    "storageOutputList": 0.4,
    "powerGridList": 318.02,
    "socList": 0.98,
    "netLoadList": 63.52,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "18:56",
    "storageOutputList": 0.3,
    "powerGridList": 348.26,
    "socList": 0.98,
    "netLoadList": 69.59,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "18:57",
    "storageOutputList": 0.3,
    "powerGridList": 317.02,
    "socList": 0.98,
    "netLoadList": 63.34,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "18:58",
    "storageOutputList": 0.3,
    "powerGridList": 326.34,
    "socList": 0.98,
    "netLoadList": 65.21,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "18:59",
    "storageOutputList": 0.3,
    "powerGridList": 344.24,
    "socList": 0.98,
    "netLoadList": 68.79,
    "runningLlanList": -200,
    "priceList": 1.13,
    "时段": "峰"
   },
   {
    "date": "19:00",
    "storageOutputList": 0.3,
    "powerGridList": 313.24,
    "socList": 0.98,
    "netLoadList": 62.59,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "19:01",
    "storageOutputList": 0.3,
    "powerGridList": 310.72,
    "socList": 0.98,
    "netLoadList": 62.08,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "19:02",
    "storageOutputList": 0.3,
    "powerGridList": 325.84,
    "socList": 0.98,
    "netLoadList": 65.11,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "19:03",
    "storageOutputList": 0.3,
    "powerGridList": 333.9,
    "socList": 0.98,
    "netLoadList": 66.72,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "19:04",
    "storageOutputList": 0.3,
    "powerGridList": 324.08,
    "socList": 0.98,
    "netLoadList": 64.76,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "19:05",
    "storageOutputList": 0.4,
    "powerGridList": 295.6,
    "socList": 0.98,
    "netLoadList": 59.04,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "19:06",
    "storageOutputList": 0.3,
    "powerGridList": 307.44,
    "socList": 0.98,
    "netLoadList": 61.43,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "19:07",
    "storageOutputList": 0.3,
    "powerGridList": 306.94,
    "socList": 0.98,
    "netLoadList": 61.33,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "19:08",
    "storageOutputList": 0.3,
    "powerGridList": 362.12,
    "socList": 0.98,
    "netLoadList": 72.36,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "19:09",
    "storageOutputList": 0.3,
    "powerGridList": 293.84,
    "socList": 0.98,
    "netLoadList": 58.71,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "19:10",
    "storageOutputList": 0.3,
    "powerGridList": 286.02,
    "socList": 0.98,
    "netLoadList": 57.14,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "19:11",
    "storageOutputList": 0.3,
    "powerGridList": 321.56,
    "socList": 0.98,
    "netLoadList": 64.25,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "19:12",
    "storageOutputList": 0.3,
    "powerGridList": 370.94,
    "socList": 0.98,
    "netLoadList": 74.13,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "19:13",
    "storageOutputList": 0.3,
    "powerGridList": 323.32,
    "socList": 0.98,
    "netLoadList": 64.6,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "19:14",
    "storageOutputList": 0.3,
    "powerGridList": 342.72,
    "socList": 0.98,
    "netLoadList": 68.48,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "19:15",
    "storageOutputList": 0.3,
    "powerGridList": 352.54,
    "socList": 0.98,
    "netLoadList": 70.45,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "19:16",
    "storageOutputList": 0.3,
    "powerGridList": 388.84,
    "socList": 0.98,
    "netLoadList": 77.71,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "19:17",
    "storageOutputList": 0.3,
    "powerGridList": 327.6,
    "socList": 0.98,
    "netLoadList": 65.46,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "19:18",
    "storageOutputList": 0.3,
    "powerGridList": 321.8,
    "socList": 0.98,
    "netLoadList": 64.3,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "19:19",
    "storageOutputList": 0.3,
    "powerGridList": 334.9,
    "socList": 0.98,
    "netLoadList": 66.92,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "19:20",
    "storageOutputList": 0.3,
    "powerGridList": 412.78,
    "socList": 0.98,
    "netLoadList": 82.5,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "19:21",
    "storageOutputList": 0.3,
    "powerGridList": 387.32,
    "socList": 0.98,
    "netLoadList": 77.4,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "19:22",
    "storageOutputList": 0.3,
    "powerGridList": 371.96,
    "socList": 0.98,
    "netLoadList": 74.33,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "19:23",
    "storageOutputList": 0.3,
    "powerGridList": 380.78,
    "socList": 0.98,
    "netLoadList": 76.1,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "19:24",
    "storageOutputList": 0.3,
    "powerGridList": 384.56,
    "socList": 0.98,
    "netLoadList": 76.85,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "19:25",
    "storageOutputList": 0.3,
    "powerGridList": 379.52,
    "socList": 0.98,
    "netLoadList": 75.84,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "19:26",
    "storageOutputList": 0.3,
    "powerGridList": 373.96,
    "socList": 0.98,
    "netLoadList": 74.73,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "19:27",
    "storageOutputList": 0.3,
    "powerGridList": 373.46,
    "socList": 0.98,
    "netLoadList": 74.63,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "19:28",
    "storageOutputList": 0.3,
    "powerGridList": 376.48,
    "socList": 0.98,
    "netLoadList": 75.24,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "19:29",
    "storageOutputList": 0.3,
    "powerGridList": 386.06,
    "socList": 0.98,
    "netLoadList": 77.15,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "19:30",
    "storageOutputList": 0.3,
    "powerGridList": 419.84,
    "socList": 0.98,
    "netLoadList": 83.91,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "19:31",
    "storageOutputList": 0.3,
    "powerGridList": 403.46,
    "socList": 0.98,
    "netLoadList": 80.63,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "19:32",
    "storageOutputList": 0.3,
    "powerGridList": 395.38,
    "socList": 0.98,
    "netLoadList": 79.02,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "19:33",
    "storageOutputList": 0.3,
    "powerGridList": 362.62,
    "socList": 0.98,
    "netLoadList": 72.46,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "19:34",
    "storageOutputList": 0.3,
    "powerGridList": 394.12,
    "socList": 0.98,
    "netLoadList": 78.76,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "19:35",
    "storageOutputList": 0.3,
    "powerGridList": 410,
    "socList": 0.98,
    "netLoadList": 81.94,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "19:36",
    "storageOutputList": 0.3,
    "powerGridList": 357.58,
    "socList": 0.98,
    "netLoadList": 71.46,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "19:37",
    "storageOutputList": 0.3,
    "powerGridList": 391.1,
    "socList": 0.98,
    "netLoadList": 78.16,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "19:38",
    "storageOutputList": 0.3,
    "powerGridList": 387.32,
    "socList": 0.98,
    "netLoadList": 77.4,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "19:39",
    "storageOutputList": 0.3,
    "powerGridList": 433.44,
    "socList": 0.98,
    "netLoadList": 86.63,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "19:40",
    "storageOutputList": 0.3,
    "powerGridList": 390.1,
    "socList": 0.98,
    "netLoadList": 77.96,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "19:41",
    "storageOutputList": 0.3,
    "powerGridList": 374.72,
    "socList": 0.98,
    "netLoadList": 74.88,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "19:42",
    "storageOutputList": 0.3,
    "powerGridList": 404.2,
    "socList": 0.98,
    "netLoadList": 80.78,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "19:43",
    "storageOutputList": 0.3,
    "powerGridList": 383.8,
    "socList": 0.98,
    "netLoadList": 76.7,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "19:44",
    "storageOutputList": 0.3,
    "powerGridList": 429.16,
    "socList": 0.98,
    "netLoadList": 85.77,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "19:45",
    "storageOutputList": 0.3,
    "powerGridList": 396.64,
    "socList": 0.98,
    "netLoadList": 79.27,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "19:46",
    "storageOutputList": 0.3,
    "powerGridList": 391.36,
    "socList": 0.98,
    "netLoadList": 78.21,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "19:47",
    "storageOutputList": 0.3,
    "powerGridList": 428.66,
    "socList": 0.98,
    "netLoadList": 85.67,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "19:48",
    "storageOutputList": 0.3,
    "powerGridList": 386.06,
    "socList": 0.98,
    "netLoadList": 77.15,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "19:49",
    "storageOutputList": 0.3,
    "powerGridList": 400.18,
    "socList": 0.98,
    "netLoadList": 79.98,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "19:50",
    "storageOutputList": 0.3,
    "powerGridList": 421.84,
    "socList": 0.98,
    "netLoadList": 84.31,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "19:51",
    "storageOutputList": 0.3,
    "powerGridList": 417.06,
    "socList": 0.98,
    "netLoadList": 83.35,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "19:52",
    "storageOutputList": 0.3,
    "powerGridList": 435.96,
    "socList": 0.98,
    "netLoadList": 87.13,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "19:53",
    "storageOutputList": 0.3,
    "powerGridList": 415.04,
    "socList": 0.98,
    "netLoadList": 82.95,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "19:54",
    "storageOutputList": 0.3,
    "powerGridList": 421.1,
    "socList": 0.98,
    "netLoadList": 84.16,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "19:55",
    "storageOutputList": 0.3,
    "powerGridList": 401.18,
    "socList": 0.98,
    "netLoadList": 80.18,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "19:56",
    "storageOutputList": 0.3,
    "powerGridList": 427.4,
    "socList": 0.98,
    "netLoadList": 85.42,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "19:57",
    "storageOutputList": 0.3,
    "powerGridList": 401.18,
    "socList": 0.98,
    "netLoadList": 80.18,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "19:58",
    "storageOutputList": 0.3,
    "powerGridList": 375.22,
    "socList": 0.98,
    "netLoadList": 74.98,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "19:59",
    "storageOutputList": 0.3,
    "powerGridList": 434.2,
    "socList": 0.98,
    "netLoadList": 86.78,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "20:00",
    "storageOutputList": 0.3,
    "powerGridList": 386.32,
    "socList": 0.98,
    "netLoadList": 77.2,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "20:01",
    "storageOutputList": 0.3,
    "powerGridList": 379,
    "socList": 0.98,
    "netLoadList": 75.74,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "20:02",
    "storageOutputList": 0.3,
    "powerGridList": 406.48,
    "socList": 0.98,
    "netLoadList": 81.24,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "20:03",
    "storageOutputList": 0.3,
    "powerGridList": 378.26,
    "socList": 0.98,
    "netLoadList": 75.59,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "20:04",
    "storageOutputList": 0.3,
    "powerGridList": 385.06,
    "socList": 0.98,
    "netLoadList": 76.95,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "20:05",
    "storageOutputList": 0.3,
    "powerGridList": 408.5,
    "socList": 0.98,
    "netLoadList": 81.64,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "20:06",
    "storageOutputList": 0.3,
    "powerGridList": 403.96,
    "socList": 0.98,
    "netLoadList": 80.73,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "20:07",
    "storageOutputList": 0.3,
    "powerGridList": 375.48,
    "socList": 0.98,
    "netLoadList": 75.04,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "20:08",
    "storageOutputList": 0.3,
    "powerGridList": 390.34,
    "socList": 0.98,
    "netLoadList": 78.01,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "20:09",
    "storageOutputList": 0.3,
    "powerGridList": 388.08,
    "socList": 0.98,
    "netLoadList": 77.56,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "20:10",
    "storageOutputList": 0.3,
    "powerGridList": 379.26,
    "socList": 0.98,
    "netLoadList": 75.79,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "20:11",
    "storageOutputList": 0.3,
    "powerGridList": 389.84,
    "socList": 0.98,
    "netLoadList": 77.91,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "20:12",
    "storageOutputList": 0.3,
    "powerGridList": 389.6,
    "socList": 0.98,
    "netLoadList": 77.86,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "20:13",
    "storageOutputList": 0.3,
    "powerGridList": 399.42,
    "socList": 0.98,
    "netLoadList": 79.82,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "20:14",
    "storageOutputList": 0.3,
    "powerGridList": 405.46,
    "socList": 0.98,
    "netLoadList": 81.03,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "20:15",
    "storageOutputList": 0.3,
    "powerGridList": 409.5,
    "socList": 0.98,
    "netLoadList": 81.84,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "20:16",
    "storageOutputList": 0.3,
    "powerGridList": 363.64,
    "socList": 0.98,
    "netLoadList": 72.67,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "20:17",
    "storageOutputList": 0.3,
    "powerGridList": 383.54,
    "socList": 0.98,
    "netLoadList": 76.65,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "20:18",
    "storageOutputList": 0.3,
    "powerGridList": 398.16,
    "socList": 0.98,
    "netLoadList": 79.57,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "20:19",
    "storageOutputList": 0.3,
    "powerGridList": 408.5,
    "socList": 0.98,
    "netLoadList": 81.64,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "20:20",
    "storageOutputList": 0.3,
    "powerGridList": 383.8,
    "socList": 0.98,
    "netLoadList": 76.7,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "20:21",
    "storageOutputList": 0.3,
    "powerGridList": 395.14,
    "socList": 0.98,
    "netLoadList": 78.97,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "20:22",
    "storageOutputList": 0.3,
    "powerGridList": 392.62,
    "socList": 0.98,
    "netLoadList": 78.46,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "20:23",
    "storageOutputList": 0.3,
    "powerGridList": 371.44,
    "socList": 0.98,
    "netLoadList": 74.23,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "20:24",
    "storageOutputList": 0.3,
    "powerGridList": 410.26,
    "socList": 0.98,
    "netLoadList": 81.99,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "20:25",
    "storageOutputList": 0.3,
    "powerGridList": 396.14,
    "socList": 0.98,
    "netLoadList": 79.17,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "20:26",
    "storageOutputList": 0.3,
    "powerGridList": 392.62,
    "socList": 0.98,
    "netLoadList": 78.46,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "20:27",
    "storageOutputList": 0.3,
    "powerGridList": 379,
    "socList": 0.98,
    "netLoadList": 75.74,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "20:28",
    "storageOutputList": 0.3,
    "powerGridList": 381.52,
    "socList": 0.98,
    "netLoadList": 76.24,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "20:29",
    "storageOutputList": 0.3,
    "powerGridList": 387.82,
    "socList": 0.98,
    "netLoadList": 77.5,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "20:30",
    "storageOutputList": 0.3,
    "powerGridList": 379.76,
    "socList": 0.98,
    "netLoadList": 75.89,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "20:31",
    "storageOutputList": 0.3,
    "powerGridList": 380.78,
    "socList": 0.98,
    "netLoadList": 76.1,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "20:32",
    "storageOutputList": 0.3,
    "powerGridList": 391.86,
    "socList": 0.98,
    "netLoadList": 78.31,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "20:33",
    "storageOutputList": 0.3,
    "powerGridList": 376.24,
    "socList": 0.98,
    "netLoadList": 75.19,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "20:34",
    "storageOutputList": 0.3,
    "powerGridList": 363.88,
    "socList": 0.98,
    "netLoadList": 72.72,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "20:35",
    "storageOutputList": 0.3,
    "powerGridList": 375.22,
    "socList": 0.98,
    "netLoadList": 74.98,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "20:36",
    "storageOutputList": 0.3,
    "powerGridList": 363.14,
    "socList": 0.98,
    "netLoadList": 72.57,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "20:37",
    "storageOutputList": 0.3,
    "powerGridList": 360.86,
    "socList": 0.98,
    "netLoadList": 72.11,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "20:38",
    "storageOutputList": 0.3,
    "powerGridList": 389.08,
    "socList": 0.98,
    "netLoadList": 77.76,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "20:39",
    "storageOutputList": 0.3,
    "powerGridList": 368.18,
    "socList": 0.98,
    "netLoadList": 73.58,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "20:40",
    "storageOutputList": 0.3,
    "powerGridList": 412.52,
    "socList": 0.98,
    "netLoadList": 82.44,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "20:41",
    "storageOutputList": 0.3,
    "powerGridList": 377.74,
    "socList": 0.98,
    "netLoadList": 75.49,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "20:42",
    "storageOutputList": 0.3,
    "powerGridList": 391.86,
    "socList": 0.98,
    "netLoadList": 78.31,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "20:43",
    "storageOutputList": 0.3,
    "powerGridList": 380.52,
    "socList": 0.98,
    "netLoadList": 76.04,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "20:44",
    "storageOutputList": 0.3,
    "powerGridList": 392.12,
    "socList": 0.98,
    "netLoadList": 78.36,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "20:45",
    "storageOutputList": 0.4,
    "powerGridList": 356.84,
    "socList": 0.98,
    "netLoadList": 71.29,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "20:46",
    "storageOutputList": 0.3,
    "powerGridList": 378.5,
    "socList": 0.98,
    "netLoadList": 75.64,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "20:47",
    "storageOutputList": 0.3,
    "powerGridList": 379.76,
    "socList": 0.98,
    "netLoadList": 75.89,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "20:48",
    "storageOutputList": 0.3,
    "powerGridList": 355.32,
    "socList": 0.98,
    "netLoadList": 71,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "20:49",
    "storageOutputList": 0.3,
    "powerGridList": 374.48,
    "socList": 0.98,
    "netLoadList": 74.84,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "20:50",
    "storageOutputList": 0.3,
    "powerGridList": 354.82,
    "socList": 0.98,
    "netLoadList": 70.9,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "20:51",
    "storageOutputList": 0.3,
    "powerGridList": 380.26,
    "socList": 0.98,
    "netLoadList": 75.99,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "20:52",
    "storageOutputList": 0.3,
    "powerGridList": 371.2,
    "socList": 0.98,
    "netLoadList": 74.18,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "20:53",
    "storageOutputList": 0.3,
    "powerGridList": 374.72,
    "socList": 0.98,
    "netLoadList": 74.88,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "20:54",
    "storageOutputList": 0.3,
    "powerGridList": 364.4,
    "socList": 0.98,
    "netLoadList": 72.82,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "20:55",
    "storageOutputList": 0.3,
    "powerGridList": 348.52,
    "socList": 0.98,
    "netLoadList": 69.64,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "20:56",
    "storageOutputList": 0.3,
    "powerGridList": 343.98,
    "socList": 0.98,
    "netLoadList": 68.74,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "20:57",
    "storageOutputList": 0.3,
    "powerGridList": 352.54,
    "socList": 0.98,
    "netLoadList": 70.45,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "20:58",
    "storageOutputList": 0.3,
    "powerGridList": 308.7,
    "socList": 0.98,
    "netLoadList": 61.68,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "20:59",
    "storageOutputList": 0.3,
    "powerGridList": 306.68,
    "socList": 0.98,
    "netLoadList": 61.28,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "21:00",
    "storageOutputList": 0.3,
    "powerGridList": 213.2,
    "socList": 0.98,
    "netLoadList": 42.58,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "21:01",
    "storageOutputList": 0.3,
    "powerGridList": 219.5,
    "socList": 0.98,
    "netLoadList": 43.84,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "21:02",
    "storageOutputList": 0.3,
    "powerGridList": 216.46,
    "socList": 0.98,
    "netLoadList": 43.23,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "21:03",
    "storageOutputList": 0.3,
    "powerGridList": 211.18,
    "socList": 0.98,
    "netLoadList": 42.18,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "21:04",
    "storageOutputList": 0.3,
    "powerGridList": 218.74,
    "socList": 0.98,
    "netLoadList": 43.69,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "21:05",
    "storageOutputList": 0.3,
    "powerGridList": 220.76,
    "socList": 0.98,
    "netLoadList": 44.09,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "21:06",
    "storageOutputList": 0.3,
    "powerGridList": 216.98,
    "socList": 0.98,
    "netLoadList": 43.34,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "21:07",
    "storageOutputList": 0.3,
    "powerGridList": 215.72,
    "socList": 0.98,
    "netLoadList": 43.08,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "21:08",
    "storageOutputList": 0.3,
    "powerGridList": 221.26,
    "socList": 0.98,
    "netLoadList": 44.19,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "21:09",
    "storageOutputList": 0.3,
    "powerGridList": 218.24,
    "socList": 0.98,
    "netLoadList": 43.59,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "21:10",
    "storageOutputList": 0.3,
    "powerGridList": 222.02,
    "socList": 0.98,
    "netLoadList": 44.34,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "21:11",
    "storageOutputList": 0.3,
    "powerGridList": 222.26,
    "socList": 0.98,
    "netLoadList": 44.39,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "21:12",
    "storageOutputList": 0.3,
    "powerGridList": 234.62,
    "socList": 0.98,
    "netLoadList": 46.86,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "21:13",
    "storageOutputList": 0.3,
    "powerGridList": 224.02,
    "socList": 0.98,
    "netLoadList": 44.74,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "21:14",
    "storageOutputList": 0.3,
    "powerGridList": 233.86,
    "socList": 0.98,
    "netLoadList": 46.71,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "21:15",
    "storageOutputList": 0.3,
    "powerGridList": 227.06,
    "socList": 0.98,
    "netLoadList": 45.35,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "21:16",
    "storageOutputList": 0.3,
    "powerGridList": 230.58,
    "socList": 0.98,
    "netLoadList": 46.06,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "21:17",
    "storageOutputList": 0.3,
    "powerGridList": 234.36,
    "socList": 0.98,
    "netLoadList": 46.81,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "21:18",
    "storageOutputList": 0.3,
    "powerGridList": 238.4,
    "socList": 0.98,
    "netLoadList": 47.62,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "21:19",
    "storageOutputList": 0.3,
    "powerGridList": 234.36,
    "socList": 0.98,
    "netLoadList": 46.81,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "21:20",
    "storageOutputList": 0.3,
    "powerGridList": 230.58,
    "socList": 0.98,
    "netLoadList": 46.06,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "21:21",
    "storageOutputList": 0.3,
    "powerGridList": 233.86,
    "socList": 0.98,
    "netLoadList": 46.71,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "21:22",
    "storageOutputList": 0.3,
    "powerGridList": 241.92,
    "socList": 0.98,
    "netLoadList": 48.32,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "21:23",
    "storageOutputList": 0.3,
    "powerGridList": 219.5,
    "socList": 0.98,
    "netLoadList": 43.84,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "21:24",
    "storageOutputList": 0.3,
    "powerGridList": 223.02,
    "socList": 0.98,
    "netLoadList": 44.54,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "21:25",
    "storageOutputList": 0.3,
    "powerGridList": 221.5,
    "socList": 0.98,
    "netLoadList": 44.24,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "21:26",
    "storageOutputList": 0.3,
    "powerGridList": 217.48,
    "socList": 0.98,
    "netLoadList": 43.44,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "21:27",
    "storageOutputList": 0.3,
    "powerGridList": 225.8,
    "socList": 0.98,
    "netLoadList": 45.1,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "21:28",
    "storageOutputList": 0.3,
    "powerGridList": 230.58,
    "socList": 0.98,
    "netLoadList": 46.06,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "21:29",
    "storageOutputList": 0.3,
    "powerGridList": 236.62,
    "socList": 0.98,
    "netLoadList": 47.26,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "21:30",
    "storageOutputList": 0.4,
    "powerGridList": 238.14,
    "socList": 0.98,
    "netLoadList": 47.55,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "21:31",
    "storageOutputList": 0.3,
    "powerGridList": 235.88,
    "socList": 0.98,
    "netLoadList": 47.12,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "21:32",
    "storageOutputList": 0.3,
    "powerGridList": 228.82,
    "socList": 0.98,
    "netLoadList": 45.7,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "21:33",
    "storageOutputList": 0.3,
    "powerGridList": 231.08,
    "socList": 0.98,
    "netLoadList": 46.16,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "21:34",
    "storageOutputList": 0.3,
    "powerGridList": 233.1,
    "socList": 0.98,
    "netLoadList": 46.56,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "21:35",
    "storageOutputList": 0.3,
    "powerGridList": 231.34,
    "socList": 0.98,
    "netLoadList": 46.21,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "21:36",
    "storageOutputList": 0.3,
    "powerGridList": 226.8,
    "socList": 0.98,
    "netLoadList": 45.3,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "21:37",
    "storageOutputList": 0.3,
    "powerGridList": 230.58,
    "socList": 0.98,
    "netLoadList": 46.06,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "21:38",
    "storageOutputList": 0.3,
    "powerGridList": 240.66,
    "socList": 0.98,
    "netLoadList": 48.07,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "21:39",
    "storageOutputList": 0.3,
    "powerGridList": 234.36,
    "socList": 0.98,
    "netLoadList": 46.81,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "21:40",
    "storageOutputList": 0.3,
    "powerGridList": 233.36,
    "socList": 0.98,
    "netLoadList": 46.61,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "21:41",
    "storageOutputList": 0.3,
    "powerGridList": 230.08,
    "socList": 0.98,
    "netLoadList": 45.96,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "21:42",
    "storageOutputList": 0.3,
    "powerGridList": 232.6,
    "socList": 0.98,
    "netLoadList": 46.46,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "21:43",
    "storageOutputList": 0.3,
    "powerGridList": 226.54,
    "socList": 0.98,
    "netLoadList": 45.25,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "21:44",
    "storageOutputList": 0.3,
    "powerGridList": 231.58,
    "socList": 0.98,
    "netLoadList": 46.26,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "21:45",
    "storageOutputList": 0.3,
    "powerGridList": 230.08,
    "socList": 0.98,
    "netLoadList": 45.96,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "21:46",
    "storageOutputList": 0.3,
    "powerGridList": 236.88,
    "socList": 0.98,
    "netLoadList": 47.32,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "21:47",
    "storageOutputList": 0.3,
    "powerGridList": 233.6,
    "socList": 0.98,
    "netLoadList": 46.66,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "21:48",
    "storageOutputList": 0.3,
    "powerGridList": 235.88,
    "socList": 0.98,
    "netLoadList": 47.12,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "21:49",
    "storageOutputList": 0.3,
    "powerGridList": 228.82,
    "socList": 0.98,
    "netLoadList": 45.7,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "21:50",
    "storageOutputList": 0.3,
    "powerGridList": 227.3,
    "socList": 0.98,
    "netLoadList": 45.4,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "21:51",
    "storageOutputList": 0.3,
    "powerGridList": 227.56,
    "socList": 0.98,
    "netLoadList": 45.45,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "21:52",
    "storageOutputList": 0.3,
    "powerGridList": 227.3,
    "socList": 0.98,
    "netLoadList": 45.4,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "21:53",
    "storageOutputList": 0.3,
    "powerGridList": 226.54,
    "socList": 0.98,
    "netLoadList": 45.25,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "21:54",
    "storageOutputList": 0.3,
    "powerGridList": 227.06,
    "socList": 0.98,
    "netLoadList": 45.35,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "21:55",
    "storageOutputList": 0.3,
    "powerGridList": 230.32,
    "socList": 0.98,
    "netLoadList": 46,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "21:56",
    "storageOutputList": 0.3,
    "powerGridList": 227.06,
    "socList": 0.98,
    "netLoadList": 45.35,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "21:57",
    "storageOutputList": 0.3,
    "powerGridList": 236.38,
    "socList": 0.98,
    "netLoadList": 47.22,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "21:58",
    "storageOutputList": 0.3,
    "powerGridList": 236.38,
    "socList": 0.98,
    "netLoadList": 47.22,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "21:59",
    "storageOutputList": 0.3,
    "powerGridList": 234.36,
    "socList": 0.98,
    "netLoadList": 46.81,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "22:00",
    "storageOutputList": 0.3,
    "powerGridList": 230.84,
    "socList": 0.98,
    "netLoadList": 46.11,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "22:01",
    "storageOutputList": 0.3,
    "powerGridList": 237.14,
    "socList": 0.98,
    "netLoadList": 47.37,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "22:02",
    "storageOutputList": 0.3,
    "powerGridList": 228.82,
    "socList": 0.98,
    "netLoadList": 45.7,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "22:03",
    "storageOutputList": 0.3,
    "powerGridList": 234.1,
    "socList": 0.98,
    "netLoadList": 46.76,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "22:04",
    "storageOutputList": 0.3,
    "powerGridList": 230.58,
    "socList": 0.98,
    "netLoadList": 46.06,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "22:05",
    "storageOutputList": 0.3,
    "powerGridList": 232.1,
    "socList": 0.98,
    "netLoadList": 46.36,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "22:06",
    "storageOutputList": 0.3,
    "powerGridList": 231.08,
    "socList": 0.98,
    "netLoadList": 46.16,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "22:07",
    "storageOutputList": 0.3,
    "powerGridList": 231.84,
    "socList": 0.98,
    "netLoadList": 46.31,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "22:08",
    "storageOutputList": 0.3,
    "powerGridList": 232.6,
    "socList": 0.98,
    "netLoadList": 46.46,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "22:09",
    "storageOutputList": 0.3,
    "powerGridList": 238.14,
    "socList": 0.98,
    "netLoadList": 47.57,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "22:10",
    "storageOutputList": 0.3,
    "powerGridList": 233.36,
    "socList": 0.98,
    "netLoadList": 46.61,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "22:11",
    "storageOutputList": 0.3,
    "powerGridList": 238.9,
    "socList": 0.98,
    "netLoadList": 47.72,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "22:12",
    "storageOutputList": 0.3,
    "powerGridList": 232.34,
    "socList": 0.98,
    "netLoadList": 46.41,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "22:13",
    "storageOutputList": 0.3,
    "powerGridList": 234.1,
    "socList": 0.98,
    "netLoadList": 46.76,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "22:14",
    "storageOutputList": 0.3,
    "powerGridList": 231.08,
    "socList": 0.98,
    "netLoadList": 46.16,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "22:15",
    "storageOutputList": 0.4,
    "powerGridList": 228.32,
    "socList": 0.98,
    "netLoadList": 45.58,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "22:16",
    "storageOutputList": 0.3,
    "powerGridList": 222.26,
    "socList": 0.98,
    "netLoadList": 44.39,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "22:17",
    "storageOutputList": 0.3,
    "powerGridList": 226.04,
    "socList": 0.98,
    "netLoadList": 45.15,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "22:18",
    "storageOutputList": 0.3,
    "powerGridList": 228.06,
    "socList": 0.98,
    "netLoadList": 45.55,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "22:19",
    "storageOutputList": 0.3,
    "powerGridList": 229.32,
    "socList": 0.98,
    "netLoadList": 45.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "22:20",
    "storageOutputList": 0.3,
    "powerGridList": 227.06,
    "socList": 0.98,
    "netLoadList": 45.35,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "22:21",
    "storageOutputList": 0.3,
    "powerGridList": 234.1,
    "socList": 0.98,
    "netLoadList": 46.76,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "22:22",
    "storageOutputList": 0.3,
    "powerGridList": 226.54,
    "socList": 0.98,
    "netLoadList": 45.25,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "22:23",
    "storageOutputList": 0.3,
    "powerGridList": 233.86,
    "socList": 0.98,
    "netLoadList": 46.71,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "22:24",
    "storageOutputList": 0.3,
    "powerGridList": 234.86,
    "socList": 0.98,
    "netLoadList": 46.91,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "22:25",
    "storageOutputList": 0.3,
    "powerGridList": 230.84,
    "socList": 0.98,
    "netLoadList": 46.11,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "22:26",
    "storageOutputList": 0.3,
    "powerGridList": 229.32,
    "socList": 0.98,
    "netLoadList": 45.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "22:27",
    "storageOutputList": 0.3,
    "powerGridList": 228.06,
    "socList": 0.98,
    "netLoadList": 45.55,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "22:28",
    "storageOutputList": 0.3,
    "powerGridList": 236.12,
    "socList": 0.98,
    "netLoadList": 47.16,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "22:29",
    "storageOutputList": 0.3,
    "powerGridList": 234.36,
    "socList": 0.98,
    "netLoadList": 46.81,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "22:30",
    "storageOutputList": 0.3,
    "powerGridList": 234.86,
    "socList": 0.98,
    "netLoadList": 46.91,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "22:31",
    "storageOutputList": 0.3,
    "powerGridList": 237.38,
    "socList": 0.98,
    "netLoadList": 47.42,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "22:32",
    "storageOutputList": 0.3,
    "powerGridList": 227.56,
    "socList": 0.98,
    "netLoadList": 45.45,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "22:33",
    "storageOutputList": 0.3,
    "powerGridList": 229.06,
    "socList": 0.98,
    "netLoadList": 45.75,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "22:34",
    "storageOutputList": 0.3,
    "powerGridList": 239.66,
    "socList": 0.98,
    "netLoadList": 47.87,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "22:35",
    "storageOutputList": 0.3,
    "powerGridList": 242.18,
    "socList": 0.98,
    "netLoadList": 48.38,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "22:36",
    "storageOutputList": 0.3,
    "powerGridList": 247.96,
    "socList": 0.98,
    "netLoadList": 49.53,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "22:37",
    "storageOutputList": 0.3,
    "powerGridList": 235.62,
    "socList": 0.98,
    "netLoadList": 47.06,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "22:38",
    "storageOutputList": 0.3,
    "powerGridList": 234.86,
    "socList": 0.98,
    "netLoadList": 46.91,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "22:39",
    "storageOutputList": 0.3,
    "powerGridList": 241.42,
    "socList": 0.98,
    "netLoadList": 48.22,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "22:40",
    "storageOutputList": 0.3,
    "powerGridList": 240.16,
    "socList": 0.98,
    "netLoadList": 47.97,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "22:41",
    "storageOutputList": 0.3,
    "powerGridList": 233.36,
    "socList": 0.98,
    "netLoadList": 46.61,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "22:42",
    "storageOutputList": 0.3,
    "powerGridList": 226.04,
    "socList": 0.98,
    "netLoadList": 45.15,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "22:43",
    "storageOutputList": 0.3,
    "powerGridList": 225.8,
    "socList": 0.98,
    "netLoadList": 45.1,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "22:44",
    "storageOutputList": 0.3,
    "powerGridList": 227.06,
    "socList": 0.98,
    "netLoadList": 45.35,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "22:45",
    "storageOutputList": 0.3,
    "powerGridList": 232.6,
    "socList": 0.98,
    "netLoadList": 46.46,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "22:46",
    "storageOutputList": 0.3,
    "powerGridList": 225.54,
    "socList": 0.98,
    "netLoadList": 45.05,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "22:47",
    "storageOutputList": 0.3,
    "powerGridList": 228.56,
    "socList": 0.98,
    "netLoadList": 45.65,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "22:48",
    "storageOutputList": 0.3,
    "powerGridList": 240.66,
    "socList": 0.98,
    "netLoadList": 48.07,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "22:49",
    "storageOutputList": 0.3,
    "powerGridList": 237.64,
    "socList": 0.98,
    "netLoadList": 47.47,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "22:50",
    "storageOutputList": 0.4,
    "powerGridList": 239.4,
    "socList": 0.98,
    "netLoadList": 47.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "22:51",
    "storageOutputList": 0.3,
    "powerGridList": 243.68,
    "socList": 0.98,
    "netLoadList": 48.68,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "22:52",
    "storageOutputList": 0.3,
    "powerGridList": 235.12,
    "socList": 0.98,
    "netLoadList": 46.96,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "22:53",
    "storageOutputList": 0.3,
    "powerGridList": 240.92,
    "socList": 0.98,
    "netLoadList": 48.12,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "22:54",
    "storageOutputList": 0.3,
    "powerGridList": 236.62,
    "socList": 0.98,
    "netLoadList": 47.26,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "22:55",
    "storageOutputList": 0.3,
    "powerGridList": 233.6,
    "socList": 0.98,
    "netLoadList": 46.66,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "22:56",
    "storageOutputList": 0.3,
    "powerGridList": 236.12,
    "socList": 0.98,
    "netLoadList": 47.16,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "22:57",
    "storageOutputList": 0.3,
    "powerGridList": 235.88,
    "socList": 0.98,
    "netLoadList": 47.12,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "22:58",
    "storageOutputList": 0.3,
    "powerGridList": 233.1,
    "socList": 0.98,
    "netLoadList": 46.56,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "22:59",
    "storageOutputList": 0.3,
    "powerGridList": 235.12,
    "socList": 0.98,
    "netLoadList": 46.96,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "23:00",
    "storageOutputList": 0.4,
    "powerGridList": 234.36,
    "socList": 0.98,
    "netLoadList": 46.79,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "23:01",
    "storageOutputList": 0.3,
    "powerGridList": 237.64,
    "socList": 0.98,
    "netLoadList": 47.47,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "23:02",
    "storageOutputList": 0.3,
    "powerGridList": 227.56,
    "socList": 0.98,
    "netLoadList": 45.45,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "23:03",
    "storageOutputList": 0.3,
    "powerGridList": 235.12,
    "socList": 0.98,
    "netLoadList": 46.96,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "23:04",
    "storageOutputList": 0.3,
    "powerGridList": 232.6,
    "socList": 0.98,
    "netLoadList": 46.46,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "23:05",
    "storageOutputList": 0.3,
    "powerGridList": 237.38,
    "socList": 0.98,
    "netLoadList": 47.42,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "23:06",
    "storageOutputList": 0.3,
    "powerGridList": 236.38,
    "socList": 0.98,
    "netLoadList": 47.22,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "23:07",
    "storageOutputList": 0.3,
    "powerGridList": 234.86,
    "socList": 0.98,
    "netLoadList": 46.91,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "23:08",
    "storageOutputList": 0.3,
    "powerGridList": 235.88,
    "socList": 0.98,
    "netLoadList": 47.12,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "23:09",
    "storageOutputList": 0.3,
    "powerGridList": 233.86,
    "socList": 0.98,
    "netLoadList": 46.71,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "23:10",
    "storageOutputList": 0.3,
    "powerGridList": 239.14,
    "socList": 0.98,
    "netLoadList": 47.77,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "23:11",
    "storageOutputList": 0.3,
    "powerGridList": 232.1,
    "socList": 0.98,
    "netLoadList": 46.36,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "23:12",
    "storageOutputList": 0.3,
    "powerGridList": 223.02,
    "socList": 0.98,
    "netLoadList": 44.54,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "23:13",
    "storageOutputList": 0.3,
    "powerGridList": 227.06,
    "socList": 0.98,
    "netLoadList": 45.35,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "23:14",
    "storageOutputList": 0.3,
    "powerGridList": 226.04,
    "socList": 0.98,
    "netLoadList": 45.15,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "23:15",
    "storageOutputList": 0.3,
    "powerGridList": 223.52,
    "socList": 0.98,
    "netLoadList": 44.64,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "23:16",
    "storageOutputList": 0.3,
    "powerGridList": 236.62,
    "socList": 0.98,
    "netLoadList": 47.26,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "23:17",
    "storageOutputList": 0.3,
    "powerGridList": 233.86,
    "socList": 0.98,
    "netLoadList": 46.71,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "23:18",
    "storageOutputList": 0.3,
    "powerGridList": 232.34,
    "socList": 0.98,
    "netLoadList": 46.41,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "23:19",
    "storageOutputList": 0.3,
    "powerGridList": 239.66,
    "socList": 0.98,
    "netLoadList": 47.87,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "23:20",
    "storageOutputList": 0.3,
    "powerGridList": 230.84,
    "socList": 0.98,
    "netLoadList": 46.11,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "23:21",
    "storageOutputList": 0.3,
    "powerGridList": 232.6,
    "socList": 0.98,
    "netLoadList": 46.46,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "23:22",
    "storageOutputList": 0.3,
    "powerGridList": 234.62,
    "socList": 0.98,
    "netLoadList": 46.86,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "23:23",
    "storageOutputList": 0.3,
    "powerGridList": 231.84,
    "socList": 0.98,
    "netLoadList": 46.31,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "23:24",
    "storageOutputList": 0.3,
    "powerGridList": 232.6,
    "socList": 0.98,
    "netLoadList": 46.46,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "23:25",
    "storageOutputList": 0.3,
    "powerGridList": 231.08,
    "socList": 0.98,
    "netLoadList": 46.16,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "23:26",
    "storageOutputList": 0.3,
    "powerGridList": 236.12,
    "socList": 0.98,
    "netLoadList": 47.16,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "23:27",
    "storageOutputList": 0.3,
    "powerGridList": 238.64,
    "socList": 0.98,
    "netLoadList": 47.67,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "23:28",
    "storageOutputList": 0.3,
    "powerGridList": 236.12,
    "socList": 0.98,
    "netLoadList": 47.16,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "23:29",
    "storageOutputList": 0.3,
    "powerGridList": 237.38,
    "socList": 0.98,
    "netLoadList": 47.42,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "23:30",
    "storageOutputList": 0.3,
    "powerGridList": 232.1,
    "socList": 0.98,
    "netLoadList": 46.36,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "23:31",
    "storageOutputList": 0.3,
    "powerGridList": 228.82,
    "socList": 0.98,
    "netLoadList": 45.7,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "23:32",
    "storageOutputList": 0.3,
    "powerGridList": 236.62,
    "socList": 0.98,
    "netLoadList": 47.26,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "23:33",
    "storageOutputList": 0.3,
    "powerGridList": 227.3,
    "socList": 0.98,
    "netLoadList": 45.4,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "23:34",
    "storageOutputList": 0.3,
    "powerGridList": 231.58,
    "socList": 0.98,
    "netLoadList": 46.26,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "23:35",
    "storageOutputList": 0.3,
    "powerGridList": 232.1,
    "socList": 0.98,
    "netLoadList": 46.36,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "23:36",
    "storageOutputList": 0.3,
    "powerGridList": 227.8,
    "socList": 0.98,
    "netLoadList": 45.5,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "23:37",
    "storageOutputList": 0.3,
    "powerGridList": 234.36,
    "socList": 0.98,
    "netLoadList": 46.81,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "23:38",
    "storageOutputList": 0.3,
    "powerGridList": 223.02,
    "socList": 0.98,
    "netLoadList": 44.54,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "23:39",
    "storageOutputList": 0.3,
    "powerGridList": 228.06,
    "socList": 0.98,
    "netLoadList": 45.55,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "23:40",
    "storageOutputList": 0.3,
    "powerGridList": 226.3,
    "socList": 0.98,
    "netLoadList": 45.2,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "23:41",
    "storageOutputList": 0.3,
    "powerGridList": 222.02,
    "socList": 0.98,
    "netLoadList": 44.34,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "23:42",
    "storageOutputList": 0.3,
    "powerGridList": 221,
    "socList": 0.98,
    "netLoadList": 44.14,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "23:43",
    "storageOutputList": 0.3,
    "powerGridList": 231.84,
    "socList": 0.98,
    "netLoadList": 46.31,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "23:44",
    "storageOutputList": 0.3,
    "powerGridList": 225.04,
    "socList": 0.98,
    "netLoadList": 44.95,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "23:45",
    "storageOutputList": 0.3,
    "powerGridList": 229.06,
    "socList": 0.98,
    "netLoadList": 45.75,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "23:46",
    "storageOutputList": 0.3,
    "powerGridList": 229.58,
    "socList": 0.98,
    "netLoadList": 45.86,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "23:47",
    "storageOutputList": 0.3,
    "powerGridList": 234.1,
    "socList": 0.98,
    "netLoadList": 46.76,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "23:48",
    "storageOutputList": 0.3,
    "powerGridList": 236.62,
    "socList": 0.98,
    "netLoadList": 47.26,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "23:49",
    "storageOutputList": 0.3,
    "powerGridList": 232.34,
    "socList": 0.98,
    "netLoadList": 46.41,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "23:50",
    "storageOutputList": 0.3,
    "powerGridList": 235.88,
    "socList": 0.98,
    "netLoadList": 47.12,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "23:51",
    "storageOutputList": 0.3,
    "powerGridList": 226.8,
    "socList": 0.98,
    "netLoadList": 45.3,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "23:52",
    "storageOutputList": 0.3,
    "powerGridList": 233.86,
    "socList": 0.98,
    "netLoadList": 46.71,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "23:53",
    "storageOutputList": 0.3,
    "powerGridList": 235.36,
    "socList": 0.98,
    "netLoadList": 47.01,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "23:54",
    "storageOutputList": 0.3,
    "powerGridList": 229.82,
    "socList": 0.98,
    "netLoadList": 45.9,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "23:55",
    "storageOutputList": 0.4,
    "powerGridList": 228.82,
    "socList": 0.98,
    "netLoadList": 45.68,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "23:56",
    "storageOutputList": 0.3,
    "powerGridList": 228.32,
    "socList": 0.98,
    "netLoadList": 45.6,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "23:57",
    "storageOutputList": 0.3,
    "powerGridList": 247.72,
    "socList": 0.98,
    "netLoadList": 49.48,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "23:58",
    "storageOutputList": 0.3,
    "powerGridList": 242.68,
    "socList": 0.98,
    "netLoadList": 48.48,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "23:59",
    "storageOutputList": 0.3,
    "powerGridList": 235.36,
    "socList": 0.98,
    "netLoadList": 47.01,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   },
   {
    "date": "0:00",
    "storageOutputList": 0.3,
    "powerGridList": 235.36,
    "socList": 0.98,
    "netLoadList": 47.01,
    "runningLlanList": 0,
    "priceList": 0.71,
    "时段": "平"
   }
  ]
  
  
  
  
  
  
  
    
    
    
    
    
var bbb = []
    aaa.map(item => {
        bbb.push(item.socList)
    })
    console.log(bbb.length);
    
    fs.writeFile('a.js', bbb.toString(), function(err) {
        if(err) {
          console.error('写入文件时发生错误：', err);
          return;
        }
        console.log('文件写入成功！');
      });