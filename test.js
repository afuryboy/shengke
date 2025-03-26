const fs = require('fs');

  
 var aaa = [
   {
    "dateList": "0:00",
    "storageOutputList": 1.5,
    "powerGridList": 379.3,
    "socList": 4.9,
    "netLoadList": 377.8,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "0:01",
    "storageOutputList": 419,
    "powerGridList": 815.2,
    "socList": 5,
    "netLoadList": 396.2,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "0:02",
    "storageOutputList": 421.5,
    "powerGridList": 814,
    "socList": 5.4,
    "netLoadList": 392.5,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "0:03",
    "storageOutputList": 421.5,
    "powerGridList": 836.6,
    "socList": 5.8,
    "netLoadList": 415.1,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "0:04",
    "storageOutputList": 422,
    "powerGridList": 840.4,
    "socList": 5.8,
    "netLoadList": 418.4,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "0:05",
    "storageOutputList": 422,
    "powerGridList": 826.6,
    "socList": 6.2,
    "netLoadList": 404.6,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "0:06",
    "storageOutputList": 422.5,
    "powerGridList": 795.1,
    "socList": 6.6,
    "netLoadList": 372.6,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "0:07",
    "storageOutputList": 422.5,
    "powerGridList": 802.6,
    "socList": 7,
    "netLoadList": 380.1,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "0:08",
    "storageOutputList": 422.5,
    "powerGridList": 792.5,
    "socList": 7.4,
    "netLoadList": 370,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "0:09",
    "storageOutputList": 423,
    "powerGridList": 814,
    "socList": 7.8,
    "netLoadList": 391,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "0:10",
    "storageOutputList": 423,
    "powerGridList": 815.2,
    "socList": 7.8,
    "netLoadList": 392.2,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "0:11",
    "storageOutputList": 422.5,
    "powerGridList": 782.5,
    "socList": 8.2,
    "netLoadList": 360,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "0:12",
    "storageOutputList": 422.5,
    "powerGridList": 810.2,
    "socList": 8.5,
    "netLoadList": 387.7,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "0:13",
    "storageOutputList": 422,
    "powerGridList": 790,
    "socList": 8.8,
    "netLoadList": 368,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "0:14",
    "storageOutputList": 422.5,
    "powerGridList": 778.7,
    "socList": 9.2,
    "netLoadList": 356.2,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "0:15",
    "storageOutputList": 422.5,
    "powerGridList": 791.3,
    "socList": 9.2,
    "netLoadList": 368.8,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "0:16",
    "storageOutputList": 422.5,
    "powerGridList": 753.5,
    "socList": 9.6,
    "netLoadList": 331,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "0:17",
    "storageOutputList": 423,
    "powerGridList": 767.3,
    "socList": 10,
    "netLoadList": 344.3,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "0:18",
    "storageOutputList": 408,
    "powerGridList": 771.1,
    "socList": 10.4,
    "netLoadList": 363.1,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "0:19",
    "storageOutputList": 409,
    "powerGridList": 739.6,
    "socList": 10.8,
    "netLoadList": 330.6,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "0:20",
    "storageOutputList": 408,
    "powerGridList": 769.9,
    "socList": 10.8,
    "netLoadList": 361.9,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "0:21",
    "storageOutputList": 408,
    "powerGridList": 756,
    "socList": 11.2,
    "netLoadList": 348,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "0:22",
    "storageOutputList": 408,
    "powerGridList": 805.1,
    "socList": 11.6,
    "netLoadList": 397.1,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "0:23",
    "storageOutputList": 408,
    "powerGridList": 819,
    "socList": 12,
    "netLoadList": 411,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "0:24",
    "storageOutputList": 408,
    "powerGridList": 815.2,
    "socList": 12.4,
    "netLoadList": 407.2,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "0:25",
    "storageOutputList": 408.5,
    "powerGridList": 806.4,
    "socList": 12.4,
    "netLoadList": 397.9,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "0:26",
    "storageOutputList": 408,
    "powerGridList": 766.1,
    "socList": 12.8,
    "netLoadList": 358.1,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "0:27",
    "storageOutputList": 408.5,
    "powerGridList": 798.8,
    "socList": 13.1,
    "netLoadList": 390.3,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "0:28",
    "storageOutputList": 408.5,
    "powerGridList": 778.7,
    "socList": 13.5,
    "netLoadList": 370.2,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "0:29",
    "storageOutputList": 408,
    "powerGridList": 790,
    "socList": 13.9,
    "netLoadList": 382,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "0:30",
    "storageOutputList": 408,
    "powerGridList": 754.7,
    "socList": 13.9,
    "netLoadList": 346.7,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "0:31",
    "storageOutputList": 408,
    "powerGridList": 740.9,
    "socList": 14.3,
    "netLoadList": 332.9,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "0:32",
    "storageOutputList": 408,
    "powerGridList": 796.3,
    "socList": 14.7,
    "netLoadList": 388.3,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "0:33",
    "storageOutputList": 408,
    "powerGridList": 844.2,
    "socList": 15.1,
    "netLoadList": 436.2,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "0:34",
    "storageOutputList": 408,
    "powerGridList": 839.2,
    "socList": 15.5,
    "netLoadList": 431.2,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "0:35",
    "storageOutputList": 408,
    "powerGridList": 844.2,
    "socList": 15.9,
    "netLoadList": 436.2,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "0:36",
    "storageOutputList": 408,
    "powerGridList": 815.2,
    "socList": 15.9,
    "netLoadList": 407.2,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "0:37",
    "storageOutputList": 408,
    "powerGridList": 762.3,
    "socList": 16.3,
    "netLoadList": 354.3,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "0:38",
    "storageOutputList": 408.5,
    "powerGridList": 817.7,
    "socList": 16.7,
    "netLoadList": 409.2,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "0:39",
    "storageOutputList": 408,
    "powerGridList": 779.9,
    "socList": 17.1,
    "netLoadList": 371.9,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "0:40",
    "storageOutputList": 408,
    "powerGridList": 834.1,
    "socList": 17.4,
    "netLoadList": 426.1,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "0:41",
    "storageOutputList": 408,
    "powerGridList": 805.1,
    "socList": 17.4,
    "netLoadList": 397.1,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "0:42",
    "storageOutputList": 408,
    "powerGridList": 805.1,
    "socList": 17.8,
    "netLoadList": 397.1,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "0:43",
    "storageOutputList": 408.5,
    "powerGridList": 796.3,
    "socList": 18.3,
    "netLoadList": 387.8,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "0:44",
    "storageOutputList": 408,
    "powerGridList": 779.9,
    "socList": 18.7,
    "netLoadList": 371.9,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "0:45",
    "storageOutputList": 408,
    "powerGridList": 810.2,
    "socList": 18.7,
    "netLoadList": 402.2,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "0:46",
    "storageOutputList": 408.5,
    "powerGridList": 1087.4,
    "socList": 19.1,
    "netLoadList": 678.9,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "0:47",
    "storageOutputList": 408,
    "powerGridList": 1047.1,
    "socList": 19.5,
    "netLoadList": 639.1,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "0:48",
    "storageOutputList": 408,
    "powerGridList": 1062.2,
    "socList": 19.9,
    "netLoadList": 654.2,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "0:49",
    "storageOutputList": 408,
    "powerGridList": 1055.9,
    "socList": 20.3,
    "netLoadList": 647.9,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "0:50",
    "storageOutputList": 408.5,
    "powerGridList": 1076,
    "socList": 20.3,
    "netLoadList": 667.5,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "0:51",
    "storageOutputList": 408.5,
    "powerGridList": 1088.6,
    "socList": 20.6,
    "netLoadList": 680.1,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "0:52",
    "storageOutputList": 408,
    "powerGridList": 1082.3,
    "socList": 21,
    "netLoadList": 674.3,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "0:53",
    "storageOutputList": 408,
    "powerGridList": 1082.3,
    "socList": 21.4,
    "netLoadList": 674.3,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "0:54",
    "storageOutputList": 408.5,
    "powerGridList": 1058.4,
    "socList": 21.8,
    "netLoadList": 649.9,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "0:55",
    "storageOutputList": 408.5,
    "powerGridList": 1042,
    "socList": 21.8,
    "netLoadList": 633.5,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "0:56",
    "storageOutputList": 408,
    "powerGridList": 952.6,
    "socList": 22.2,
    "netLoadList": 544.6,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "0:57",
    "storageOutputList": 408,
    "powerGridList": 965.2,
    "socList": 22.6,
    "netLoadList": 557.2,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "0:58",
    "storageOutputList": 408,
    "powerGridList": 948.8,
    "socList": 23,
    "netLoadList": 540.8,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "0:59",
    "storageOutputList": 409,
    "powerGridList": 1059.7,
    "socList": 23.4,
    "netLoadList": 650.7,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "1:00",
    "storageOutputList": 423,
    "powerGridList": 1026.9,
    "socList": 23.4,
    "netLoadList": 603.9,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "1:01",
    "storageOutputList": 423.5,
    "powerGridList": 1019.3,
    "socList": 23.8,
    "netLoadList": 595.8,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "1:02",
    "storageOutputList": 422.5,
    "powerGridList": 1042,
    "socList": 24.2,
    "netLoadList": 619.5,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "1:03",
    "storageOutputList": 423,
    "powerGridList": 1034.5,
    "socList": 24.5,
    "netLoadList": 611.5,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "1:04",
    "storageOutputList": 422.5,
    "powerGridList": 1042,
    "socList": 24.9,
    "netLoadList": 619.5,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "1:05",
    "storageOutputList": 422.5,
    "powerGridList": 1034.5,
    "socList": 24.9,
    "netLoadList": 612,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "1:06",
    "storageOutputList": 423,
    "powerGridList": 1019.3,
    "socList": 25.3,
    "netLoadList": 596.3,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "1:07",
    "storageOutputList": 423,
    "powerGridList": 1033.2,
    "socList": 25.7,
    "netLoadList": 610.2,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "1:08",
    "storageOutputList": 423,
    "powerGridList": 995.4,
    "socList": 26,
    "netLoadList": 572.4,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "1:09",
    "storageOutputList": 423,
    "powerGridList": 996.7,
    "socList": 26.4,
    "netLoadList": 573.7,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "1:10",
    "storageOutputList": 423,
    "powerGridList": 1029.4,
    "socList": 26.4,
    "netLoadList": 606.4,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "1:11",
    "storageOutputList": 422.5,
    "powerGridList": 1047.1,
    "socList": 26.8,
    "netLoadList": 624.6,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "1:12",
    "storageOutputList": 409,
    "powerGridList": 1052.1,
    "socList": 27.2,
    "netLoadList": 643.1,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "1:13",
    "storageOutputList": 408,
    "powerGridList": 1089.9,
    "socList": 27.6,
    "netLoadList": 681.9,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "1:14",
    "storageOutputList": 409,
    "powerGridList": 1044.5,
    "socList": 28,
    "netLoadList": 635.5,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "1:15",
    "storageOutputList": 409,
    "powerGridList": 1063.4,
    "socList": 28,
    "netLoadList": 654.4,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "1:16",
    "storageOutputList": 408.5,
    "powerGridList": 1035.7,
    "socList": 28.4,
    "netLoadList": 627.2,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "1:17",
    "storageOutputList": 408,
    "powerGridList": 1066,
    "socList": 28.8,
    "netLoadList": 658,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "1:18",
    "storageOutputList": 408,
    "powerGridList": 1040.8,
    "socList": 29.2,
    "netLoadList": 632.8,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "1:19",
    "storageOutputList": 408,
    "powerGridList": 1059.7,
    "socList": 29.6,
    "netLoadList": 651.7,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "1:20",
    "storageOutputList": 408,
    "powerGridList": 1050.8,
    "socList": 29.6,
    "netLoadList": 642.8,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "1:21",
    "storageOutputList": 408.5,
    "powerGridList": 1030.7,
    "socList": 30,
    "netLoadList": 622.2,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "1:22",
    "storageOutputList": 408,
    "powerGridList": 1031.9,
    "socList": 30.3,
    "netLoadList": 623.9,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "1:23",
    "storageOutputList": 408.5,
    "powerGridList": 1019.3,
    "socList": 30.7,
    "netLoadList": 610.8,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "1:24",
    "storageOutputList": 408.5,
    "powerGridList": 1054.6,
    "socList": 31.1,
    "netLoadList": 646.1,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "1:25",
    "storageOutputList": 408,
    "powerGridList": 1005.5,
    "socList": 31.1,
    "netLoadList": 597.5,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "1:26",
    "storageOutputList": 408,
    "powerGridList": 1064.7,
    "socList": 31.5,
    "netLoadList": 656.7,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "1:27",
    "storageOutputList": 408.5,
    "powerGridList": 1029.4,
    "socList": 31.9,
    "netLoadList": 620.9,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "1:28",
    "storageOutputList": 408,
    "powerGridList": 1050.8,
    "socList": 32.3,
    "netLoadList": 642.8,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "1:29",
    "storageOutputList": 408.5,
    "powerGridList": 1049.6,
    "socList": 32.7,
    "netLoadList": 641.1,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "1:30",
    "storageOutputList": 408,
    "powerGridList": 1318,
    "socList": 32.7,
    "netLoadList": 910,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "1:31",
    "storageOutputList": 408.5,
    "powerGridList": 1319.2,
    "socList": 33.1,
    "netLoadList": 910.7,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "1:32",
    "storageOutputList": 408,
    "powerGridList": 1203.3,
    "socList": 33.5,
    "netLoadList": 795.3,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "1:33",
    "storageOutputList": 408.5,
    "powerGridList": 1207.1,
    "socList": 33.9,
    "netLoadList": 798.6,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "1:34",
    "storageOutputList": 408,
    "powerGridList": 1120.1,
    "socList": 34.3,
    "netLoadList": 712.1,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "1:35",
    "storageOutputList": 408,
    "powerGridList": 1006.7,
    "socList": 34.3,
    "netLoadList": 598.7,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "1:36",
    "storageOutputList": 408,
    "powerGridList": 984.1,
    "socList": 34.7,
    "netLoadList": 576.1,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "1:37",
    "storageOutputList": 409,
    "powerGridList": 1028.2,
    "socList": 35.1,
    "netLoadList": 619.2,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "1:38",
    "storageOutputList": 408.5,
    "powerGridList": 1029.4,
    "socList": 35.5,
    "netLoadList": 620.9,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "1:39",
    "storageOutputList": 408.5,
    "powerGridList": 1039.5,
    "socList": 35.9,
    "netLoadList": 631,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "1:40",
    "storageOutputList": 408,
    "powerGridList": 1018.1,
    "socList": 35.9,
    "netLoadList": 610.1,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "1:41",
    "storageOutputList": 408.5,
    "powerGridList": 1040.8,
    "socList": 36.3,
    "netLoadList": 632.3,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "1:42",
    "storageOutputList": 408,
    "powerGridList": 1040.8,
    "socList": 36.7,
    "netLoadList": 632.8,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "1:43",
    "storageOutputList": 423,
    "powerGridList": 1050.8,
    "socList": 37.1,
    "netLoadList": 627.8,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "1:44",
    "storageOutputList": 423,
    "powerGridList": 1066,
    "socList": 37.4,
    "netLoadList": 643,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "1:45",
    "storageOutputList": 423,
    "powerGridList": 1021.9,
    "socList": 37.4,
    "netLoadList": 598.9,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "1:46",
    "storageOutputList": 422.5,
    "powerGridList": 1049.6,
    "socList": 37.8,
    "netLoadList": 627.1,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "1:47",
    "storageOutputList": 422.5,
    "powerGridList": 1063.4,
    "socList": 38.2,
    "netLoadList": 640.9,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "1:48",
    "storageOutputList": 422.5,
    "powerGridList": 1513.3,
    "socList": 38.6,
    "netLoadList": 1090.8,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "1:49",
    "storageOutputList": 422.5,
    "powerGridList": 1498.1,
    "socList": 38.6,
    "netLoadList": 1075.6,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "1:50",
    "storageOutputList": 423,
    "powerGridList": 1446.5,
    "socList": 38.9,
    "netLoadList": 1023.5,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "1:51",
    "storageOutputList": 422.5,
    "powerGridList": 1009.3,
    "socList": 39.3,
    "netLoadList": 586.8,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "1:52",
    "storageOutputList": 422.5,
    "powerGridList": 1050.8,
    "socList": 39.7,
    "netLoadList": 628.3,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "1:53",
    "storageOutputList": 422.5,
    "powerGridList": 1043.3,
    "socList": 40.1,
    "netLoadList": 620.8,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "1:54",
    "storageOutputList": 423.5,
    "powerGridList": 1062.2,
    "socList": 40.1,
    "netLoadList": 638.7,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "1:55",
    "storageOutputList": 422.5,
    "powerGridList": 1066,
    "socList": 40.5,
    "netLoadList": 643.5,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "1:56",
    "storageOutputList": 408.5,
    "powerGridList": 1054.6,
    "socList": 40.9,
    "netLoadList": 646.1,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "1:57",
    "storageOutputList": 408.5,
    "powerGridList": 1220.9,
    "socList": 41.3,
    "netLoadList": 812.4,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "1:58",
    "storageOutputList": 408.5,
    "powerGridList": 1262.5,
    "socList": 41.7,
    "netLoadList": 854,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "1:59",
    "storageOutputList": 408,
    "powerGridList": 1231,
    "socList": 41.7,
    "netLoadList": 823,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "2:00",
    "storageOutputList": 408.5,
    "powerGridList": 1302.8,
    "socList": 42.1,
    "netLoadList": 894.3,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "2:01",
    "storageOutputList": 408,
    "powerGridList": 1320.5,
    "socList": 42.5,
    "netLoadList": 912.5,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "2:02",
    "storageOutputList": 408,
    "powerGridList": 1310.4,
    "socList": 42.9,
    "netLoadList": 902.4,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "2:03",
    "storageOutputList": 408.5,
    "powerGridList": 1387.3,
    "socList": 43.2,
    "netLoadList": 978.8,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "2:04",
    "storageOutputList": 408,
    "powerGridList": 1328,
    "socList": 43.2,
    "netLoadList": 920,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "2:05",
    "storageOutputList": 407,
    "powerGridList": 1246.1,
    "socList": 43.6,
    "netLoadList": 839.1,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "2:06",
    "storageOutputList": 407,
    "powerGridList": 1265,
    "socList": 44,
    "netLoadList": 858,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "2:07",
    "storageOutputList": 407,
    "powerGridList": 1299.1,
    "socList": 44.4,
    "netLoadList": 892.1,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "2:08",
    "storageOutputList": 408,
    "powerGridList": 1207.1,
    "socList": 44.9,
    "netLoadList": 799.1,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "2:09",
    "storageOutputList": 407.5,
    "powerGridList": 1318,
    "socList": 44.9,
    "netLoadList": 910.5,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "2:10",
    "storageOutputList": 407,
    "powerGridList": 1247.4,
    "socList": 45.3,
    "netLoadList": 840.4,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "2:11",
    "storageOutputList": 407.5,
    "powerGridList": 1285.2,
    "socList": 45.6,
    "netLoadList": 877.7,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "2:12",
    "storageOutputList": 407.5,
    "powerGridList": 1302.8,
    "socList": 46,
    "netLoadList": 895.3,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "2:13",
    "storageOutputList": 407.5,
    "powerGridList": 1299.1,
    "socList": 46.4,
    "netLoadList": 891.6,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "2:14",
    "storageOutputList": 407,
    "powerGridList": 1320.5,
    "socList": 46.4,
    "netLoadList": 913.5,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "2:15",
    "storageOutputList": 407.5,
    "powerGridList": 1305.4,
    "socList": 46.8,
    "netLoadList": 897.9,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "2:16",
    "storageOutputList": 407,
    "powerGridList": 1287.7,
    "socList": 47.2,
    "netLoadList": 880.7,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "2:17",
    "storageOutputList": 407.5,
    "powerGridList": 1306.6,
    "socList": 47.6,
    "netLoadList": 899.1,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "2:18",
    "storageOutputList": 407.5,
    "powerGridList": 1338.1,
    "socList": 47.6,
    "netLoadList": 930.6,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "2:19",
    "storageOutputList": 407.5,
    "powerGridList": 1378.4,
    "socList": 48,
    "netLoadList": 970.9,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "2:20",
    "storageOutputList": 426.5,
    "powerGridList": 1426.3,
    "socList": 48.4,
    "netLoadList": 999.8,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "2:21",
    "storageOutputList": 421.5,
    "powerGridList": 1533.4,
    "socList": 48.8,
    "netLoadList": 1111.9,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "2:22",
    "storageOutputList": 421.5,
    "powerGridList": 1496.9,
    "socList": 49.2,
    "netLoadList": 1075.4,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "2:23",
    "storageOutputList": 422,
    "powerGridList": 1503.2,
    "socList": 49.2,
    "netLoadList": 1081.2,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "2:24",
    "storageOutputList": 421.5,
    "powerGridList": 1495.6,
    "socList": 49.5,
    "netLoadList": 1074.1,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "2:25",
    "storageOutputList": 421.5,
    "powerGridList": 1490.6,
    "socList": 49.9,
    "netLoadList": 1069.1,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "2:26",
    "storageOutputList": 422,
    "powerGridList": 1498.1,
    "socList": 50.3,
    "netLoadList": 1076.1,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "2:27",
    "storageOutputList": 422,
    "powerGridList": 1470.4,
    "socList": 50.7,
    "netLoadList": 1048.4,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "2:28",
    "storageOutputList": 422,
    "powerGridList": 1462.9,
    "socList": 50.7,
    "netLoadList": 1040.9,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "2:29",
    "storageOutputList": 422,
    "powerGridList": 1622.9,
    "socList": 51.1,
    "netLoadList": 1200.9,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "2:30",
    "storageOutputList": 422,
    "powerGridList": 1601.5,
    "socList": 51.4,
    "netLoadList": 1179.5,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "2:31",
    "storageOutputList": 422,
    "powerGridList": 1548.5,
    "socList": 51.8,
    "netLoadList": 1126.5,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "2:32",
    "storageOutputList": 421.5,
    "powerGridList": 1592.6,
    "socList": 52.2,
    "netLoadList": 1171.1,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "2:33",
    "storageOutputList": 421.5,
    "powerGridList": 1597.7,
    "socList": 52.2,
    "netLoadList": 1176.2,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "2:34",
    "storageOutputList": 408,
    "powerGridList": 1598.9,
    "socList": 52.6,
    "netLoadList": 1190.9,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "2:35",
    "storageOutputList": 407,
    "powerGridList": 1546,
    "socList": 53,
    "netLoadList": 1139,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "2:36",
    "storageOutputList": 407.5,
    "powerGridList": 1542.2,
    "socList": 53.4,
    "netLoadList": 1134.7,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "2:37",
    "storageOutputList": 407,
    "powerGridList": 1573.7,
    "socList": 53.8,
    "netLoadList": 1166.7,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "2:38",
    "storageOutputList": 407.5,
    "powerGridList": 1592.6,
    "socList": 53.8,
    "netLoadList": 1185.1,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "2:39",
    "storageOutputList": 407.5,
    "powerGridList": 1597.7,
    "socList": 54.2,
    "netLoadList": 1190.2,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "2:40",
    "storageOutputList": 407.5,
    "powerGridList": 1621.6,
    "socList": 54.6,
    "netLoadList": 1214.1,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "2:41",
    "storageOutputList": 407.5,
    "powerGridList": 1620.4,
    "socList": 55,
    "netLoadList": 1212.9,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "2:42",
    "storageOutputList": 407,
    "powerGridList": 1644.3,
    "socList": 55.4,
    "netLoadList": 1237.3,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "2:43",
    "storageOutputList": 407,
    "powerGridList": 1619.1,
    "socList": 55.4,
    "netLoadList": 1212.1,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "2:44",
    "storageOutputList": 407,
    "powerGridList": 1605.2,
    "socList": 55.8,
    "netLoadList": 1198.2,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "2:45",
    "storageOutputList": 407,
    "powerGridList": 1624.1,
    "socList": 56.2,
    "netLoadList": 1217.1,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "2:46",
    "storageOutputList": 407.5,
    "powerGridList": 1600.2,
    "socList": 56.6,
    "netLoadList": 1192.7,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "2:47",
    "storageOutputList": 407.5,
    "powerGridList": 1610.3,
    "socList": 56.6,
    "netLoadList": 1202.8,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "2:48",
    "storageOutputList": 407.5,
    "powerGridList": 1601.5,
    "socList": 57,
    "netLoadList": 1194,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "2:49",
    "storageOutputList": 407.5,
    "powerGridList": 1629.2,
    "socList": 57.4,
    "netLoadList": 1221.7,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "2:50",
    "storageOutputList": 407,
    "powerGridList": 1706,
    "socList": 57.7,
    "netLoadList": 1299,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "2:51",
    "storageOutputList": 407.5,
    "powerGridList": 1722.4,
    "socList": 58.1,
    "netLoadList": 1314.9,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "2:52",
    "storageOutputList": 407.5,
    "powerGridList": 1624.1,
    "socList": 58.1,
    "netLoadList": 1216.6,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "2:53",
    "storageOutputList": 407.5,
    "powerGridList": 1601.5,
    "socList": 58.5,
    "netLoadList": 1194,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "2:54",
    "storageOutputList": 407,
    "powerGridList": 1706,
    "socList": 58.9,
    "netLoadList": 1299,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "2:55",
    "storageOutputList": 407.5,
    "powerGridList": 1633,
    "socList": 59.3,
    "netLoadList": 1225.5,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "2:56",
    "storageOutputList": 424.5,
    "powerGridList": 1679.6,
    "socList": 59.7,
    "netLoadList": 1255.1,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "2:57",
    "storageOutputList": 422,
    "powerGridList": 1679.6,
    "socList": 59.7,
    "netLoadList": 1257.6,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "2:58",
    "storageOutputList": 421.5,
    "powerGridList": 1585.1,
    "socList": 60.1,
    "netLoadList": 1163.6,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "2:59",
    "storageOutputList": 421.5,
    "powerGridList": 1598.9,
    "socList": 60.5,
    "netLoadList": 1177.4,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "3:00",
    "storageOutputList": 422,
    "powerGridList": 1625.4,
    "socList": 60.9,
    "netLoadList": 1203.4,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "3:01",
    "storageOutputList": 421.5,
    "powerGridList": 1696,
    "socList": 60.9,
    "netLoadList": 1274.5,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "3:02",
    "storageOutputList": 422,
    "powerGridList": 1644.3,
    "socList": 61.3,
    "netLoadList": 1222.3,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "3:03",
    "storageOutputList": 421.5,
    "powerGridList": 1724.9,
    "socList": 61.7,
    "netLoadList": 1303.4,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "3:04",
    "storageOutputList": 422,
    "powerGridList": 1721.2,
    "socList": 62,
    "netLoadList": 1299.2,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "3:05",
    "storageOutputList": 422.5,
    "powerGridList": 1869.8,
    "socList": 62.4,
    "netLoadList": 1447.3,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "3:06",
    "storageOutputList": 422,
    "powerGridList": 1854.7,
    "socList": 62.4,
    "netLoadList": 1432.7,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "3:07",
    "storageOutputList": 422,
    "powerGridList": 1825.7,
    "socList": 62.8,
    "netLoadList": 1403.7,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "3:08",
    "storageOutputList": 421.5,
    "powerGridList": 1837.1,
    "socList": 63.2,
    "netLoadList": 1415.6,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "3:09",
    "storageOutputList": 422,
    "powerGridList": 1830.8,
    "socList": 63.6,
    "netLoadList": 1408.8,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "3:10",
    "storageOutputList": 407.5,
    "powerGridList": 1890,
    "socList": 64,
    "netLoadList": 1482.5,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "3:11",
    "storageOutputList": 407.5,
    "powerGridList": 1780.4,
    "socList": 64,
    "netLoadList": 1372.9,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "3:12",
    "storageOutputList": 407.5,
    "powerGridList": 1791.7,
    "socList": 64.3,
    "netLoadList": 1384.2,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "3:13",
    "storageOutputList": 407.5,
    "powerGridList": 1755.2,
    "socList": 64.7,
    "netLoadList": 1347.7,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "3:14",
    "storageOutputList": 407.5,
    "powerGridList": 1764,
    "socList": 65.1,
    "netLoadList": 1356.5,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "3:15",
    "storageOutputList": 407,
    "powerGridList": 1766.5,
    "socList": 65.1,
    "netLoadList": 1359.5,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "3:16",
    "storageOutputList": 407,
    "powerGridList": 1782.9,
    "socList": 65.5,
    "netLoadList": 1375.9,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "3:17",
    "storageOutputList": 407.5,
    "powerGridList": 1815.7,
    "socList": 65.9,
    "netLoadList": 1408.2,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "3:18",
    "storageOutputList": 407.5,
    "powerGridList": 1813.1,
    "socList": 66.3,
    "netLoadList": 1405.6,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "3:19",
    "storageOutputList": 407,
    "powerGridList": 1785.4,
    "socList": 66.7,
    "netLoadList": 1378.4,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "3:20",
    "storageOutputList": 407,
    "powerGridList": 1750.1,
    "socList": 66.7,
    "netLoadList": 1343.1,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "3:21",
    "storageOutputList": 407,
    "powerGridList": 1813.1,
    "socList": 67.1,
    "netLoadList": 1406.1,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "3:22",
    "storageOutputList": 407.5,
    "powerGridList": 1654.4,
    "socList": 67.5,
    "netLoadList": 1246.9,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "3:23",
    "storageOutputList": 407,
    "powerGridList": 1798,
    "socList": 67.9,
    "netLoadList": 1391,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "3:24",
    "storageOutputList": 407.5,
    "powerGridList": 1659.4,
    "socList": 67.9,
    "netLoadList": 1251.9,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "3:25",
    "storageOutputList": 407,
    "powerGridList": 1755.2,
    "socList": 68.3,
    "netLoadList": 1348.2,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "3:26",
    "storageOutputList": 407.5,
    "powerGridList": 1766.5,
    "socList": 68.7,
    "netLoadList": 1359,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "3:27",
    "storageOutputList": 407.5,
    "powerGridList": 1869.8,
    "socList": 69.1,
    "netLoadList": 1462.3,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "3:28",
    "storageOutputList": 407,
    "powerGridList": 1750.1,
    "socList": 69.5,
    "netLoadList": 1343.1,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "3:29",
    "storageOutputList": 407.5,
    "powerGridList": 1373.4,
    "socList": 69.5,
    "netLoadList": 965.9,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "3:30",
    "storageOutputList": 407,
    "powerGridList": 1441.4,
    "socList": 69.9,
    "netLoadList": 1034.4,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "3:31",
    "storageOutputList": 406.5,
    "powerGridList": 1311.7,
    "socList": 70.2,
    "netLoadList": 905.2,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "3:32",
    "storageOutputList": 407.5,
    "powerGridList": 1331.8,
    "socList": 70.6,
    "netLoadList": 924.3,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "3:33",
    "storageOutputList": 407.5,
    "powerGridList": 1311.7,
    "socList": 71,
    "netLoadList": 904.2,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "3:34",
    "storageOutputList": 407.5,
    "powerGridList": 1195.7,
    "socList": 71,
    "netLoadList": 788.2,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "3:35",
    "storageOutputList": 407.5,
    "powerGridList": 1210.9,
    "socList": 71.4,
    "netLoadList": 803.4,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "3:36",
    "storageOutputList": 407,
    "powerGridList": 1165.5,
    "socList": 71.8,
    "netLoadList": 758.5,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "3:37",
    "storageOutputList": 423.5,
    "powerGridList": 1231,
    "socList": 72.2,
    "netLoadList": 807.5,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "3:38",
    "storageOutputList": 422,
    "powerGridList": 1248.7,
    "socList": 72.2,
    "netLoadList": 826.7,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "3:39",
    "storageOutputList": 422,
    "powerGridList": 1154.2,
    "socList": 72.6,
    "netLoadList": 732.2,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "3:40",
    "storageOutputList": 422,
    "powerGridList": 1170.5,
    "socList": 73,
    "netLoadList": 748.5,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "3:41",
    "storageOutputList": 422,
    "powerGridList": 1141.6,
    "socList": 73.4,
    "netLoadList": 719.6,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "3:42",
    "storageOutputList": 422,
    "powerGridList": 1169.3,
    "socList": 73.8,
    "netLoadList": 747.3,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "3:43",
    "storageOutputList": 421.5,
    "powerGridList": 1193.2,
    "socList": 73.8,
    "netLoadList": 771.7,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "3:44",
    "storageOutputList": 421.5,
    "powerGridList": 1152.9,
    "socList": 74.1,
    "netLoadList": 731.4,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "3:45",
    "storageOutputList": 422,
    "powerGridList": 1208.3,
    "socList": 74.5,
    "netLoadList": 786.3,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "3:46",
    "storageOutputList": 421.5,
    "powerGridList": 1673.3,
    "socList": 74.9,
    "netLoadList": 1251.8,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "3:47",
    "storageOutputList": 422,
    "powerGridList": 1558.6,
    "socList": 75.3,
    "netLoadList": 1136.6,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "3:48",
    "storageOutputList": 422,
    "powerGridList": 1195.7,
    "socList": 75.3,
    "netLoadList": 773.7,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "3:49",
    "storageOutputList": 408,
    "powerGridList": 1151.6,
    "socList": 75.7,
    "netLoadList": 743.6,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "3:50",
    "storageOutputList": 407.5,
    "powerGridList": 1224.7,
    "socList": 76.1,
    "netLoadList": 817.2,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "3:51",
    "storageOutputList": 407.5,
    "powerGridList": 1581.3,
    "socList": 76.5,
    "netLoadList": 1173.8,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "3:52",
    "storageOutputList": 407,
    "powerGridList": 1616.6,
    "socList": 76.5,
    "netLoadList": 1209.6,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "3:53",
    "storageOutputList": 407.5,
    "powerGridList": 1631.7,
    "socList": 76.9,
    "netLoadList": 1224.2,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "3:54",
    "storageOutputList": 407,
    "powerGridList": 1512,
    "socList": 77.2,
    "netLoadList": 1105,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "3:55",
    "storageOutputList": 407.5,
    "powerGridList": 1776.6,
    "socList": 77.6,
    "netLoadList": 1369.1,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "3:56",
    "storageOutputList": 407.5,
    "powerGridList": 1853.5,
    "socList": 78,
    "netLoadList": 1446,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "3:57",
    "storageOutputList": 407.5,
    "powerGridList": 1764,
    "socList": 78,
    "netLoadList": 1356.5,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "3:58",
    "storageOutputList": 407,
    "powerGridList": 1649.3,
    "socList": 78.4,
    "netLoadList": 1242.3,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "3:59",
    "storageOutputList": 407.5,
    "powerGridList": 1668.2,
    "socList": 78.8,
    "netLoadList": 1260.7,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "4:00",
    "storageOutputList": 407,
    "powerGridList": 1706,
    "socList": 79.2,
    "netLoadList": 1299,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "4:01",
    "storageOutputList": 407.5,
    "powerGridList": 1607.8,
    "socList": 79.6,
    "netLoadList": 1200.3,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "4:02",
    "storageOutputList": 407.5,
    "powerGridList": 1597.7,
    "socList": 79.6,
    "netLoadList": 1190.2,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "4:03",
    "storageOutputList": 407.5,
    "powerGridList": 1639.3,
    "socList": 80,
    "netLoadList": 1231.8,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "4:04",
    "storageOutputList": 407.5,
    "powerGridList": 1622.9,
    "socList": 80.4,
    "netLoadList": 1215.4,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "4:05",
    "storageOutputList": 407,
    "powerGridList": 1721.2,
    "socList": 80.8,
    "netLoadList": 1314.2,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "4:06",
    "storageOutputList": 407.5,
    "powerGridList": 1756.4,
    "socList": 80.8,
    "netLoadList": 1348.9,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "4:07",
    "storageOutputList": 407,
    "powerGridList": 1722.4,
    "socList": 81.2,
    "netLoadList": 1315.4,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "4:08",
    "storageOutputList": 407,
    "powerGridList": 1708.6,
    "socList": 81.6,
    "netLoadList": 1301.6,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "4:09",
    "storageOutputList": 407.5,
    "powerGridList": 1776.6,
    "socList": 82,
    "netLoadList": 1369.1,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "4:10",
    "storageOutputList": 407.5,
    "powerGridList": 1727.5,
    "socList": 82.3,
    "netLoadList": 1320,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "4:11",
    "storageOutputList": 407,
    "powerGridList": 1724.9,
    "socList": 82.3,
    "netLoadList": 1317.9,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "4:12",
    "storageOutputList": 407,
    "powerGridList": 1706,
    "socList": 82.7,
    "netLoadList": 1299,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "4:13",
    "storageOutputList": 406.5,
    "powerGridList": 1716.1,
    "socList": 83.1,
    "netLoadList": 1309.6,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "4:14",
    "storageOutputList": 407,
    "powerGridList": 1732.5,
    "socList": 83.5,
    "netLoadList": 1325.5,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "4:15",
    "storageOutputList": 407.5,
    "powerGridList": 1735,
    "socList": 83.5,
    "netLoadList": 1327.5,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "4:16",
    "storageOutputList": 407,
    "powerGridList": 1703.5,
    "socList": 83.9,
    "netLoadList": 1296.5,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "4:17",
    "storageOutputList": 407.5,
    "powerGridList": 1730,
    "socList": 84.3,
    "netLoadList": 1322.5,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "4:18",
    "storageOutputList": 407.5,
    "powerGridList": 1661.9,
    "socList": 84.7,
    "netLoadList": 1254.4,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "4:19",
    "storageOutputList": 407,
    "powerGridList": 1678.3,
    "socList": 85.1,
    "netLoadList": 1271.3,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "4:20",
    "storageOutputList": 407,
    "powerGridList": 1491.8,
    "socList": 85.1,
    "netLoadList": 1084.8,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "4:21",
    "storageOutputList": 407.5,
    "powerGridList": 1520.8,
    "socList": 85.5,
    "netLoadList": 1113.3,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "4:22",
    "storageOutputList": 422.5,
    "powerGridList": 1518.3,
    "socList": 85.9,
    "netLoadList": 1095.8,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "4:23",
    "storageOutputList": 422.5,
    "powerGridList": 1551.1,
    "socList": 86.3,
    "netLoadList": 1128.6,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "4:24",
    "storageOutputList": 422,
    "powerGridList": 1557.4,
    "socList": 86.3,
    "netLoadList": 1135.4,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "4:25",
    "storageOutputList": 421.5,
    "powerGridList": 1530.9,
    "socList": 86.6,
    "netLoadList": 1109.4,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "4:26",
    "storageOutputList": 422,
    "powerGridList": 1538.5,
    "socList": 87,
    "netLoadList": 1116.5,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "4:27",
    "storageOutputList": 422,
    "powerGridList": 1564.9,
    "socList": 87.4,
    "netLoadList": 1142.9,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "4:28",
    "storageOutputList": 422,
    "powerGridList": 1572.5,
    "socList": 87.8,
    "netLoadList": 1150.5,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "4:29",
    "storageOutputList": 421.5,
    "powerGridList": 1606.5,
    "socList": 87.8,
    "netLoadList": 1185,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "4:30",
    "storageOutputList": 421.5,
    "powerGridList": 1577.5,
    "socList": 88.2,
    "netLoadList": 1156,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "4:31",
    "storageOutputList": 421.5,
    "powerGridList": 1598.9,
    "socList": 88.6,
    "netLoadList": 1177.4,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "4:32",
    "storageOutputList": 421.5,
    "powerGridList": 1542.2,
    "socList": 89,
    "netLoadList": 1120.7,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "4:33",
    "storageOutputList": 407.5,
    "powerGridList": 1854.7,
    "socList": 89.4,
    "netLoadList": 1447.2,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "4:34",
    "storageOutputList": 407.5,
    "powerGridList": 1848.4,
    "socList": 89.4,
    "netLoadList": 1440.9,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "4:35",
    "storageOutputList": 407.5,
    "powerGridList": 1741.3,
    "socList": 89.8,
    "netLoadList": 1333.8,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "4:36",
    "storageOutputList": 407,
    "powerGridList": 1675.8,
    "socList": 90.1,
    "netLoadList": 1268.8,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "4:37",
    "storageOutputList": 407.5,
    "powerGridList": 1612.8,
    "socList": 90.5,
    "netLoadList": 1205.3,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "4:38",
    "storageOutputList": 407,
    "powerGridList": 1668.2,
    "socList": 90.5,
    "netLoadList": 1261.2,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "4:39",
    "storageOutputList": 407.5,
    "powerGridList": 1741.3,
    "socList": 90.9,
    "netLoadList": 1333.8,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "4:40",
    "storageOutputList": 407,
    "powerGridList": 1708.6,
    "socList": 91.3,
    "netLoadList": 1301.6,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "4:41",
    "storageOutputList": 407.5,
    "powerGridList": 1597.7,
    "socList": 91.7,
    "netLoadList": 1190.2,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "4:42",
    "storageOutputList": 407,
    "powerGridList": 1669.5,
    "socList": 92.1,
    "netLoadList": 1262.5,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "4:43",
    "storageOutputList": 407,
    "powerGridList": 1675.8,
    "socList": 92.1,
    "netLoadList": 1268.8,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "4:44",
    "storageOutputList": 407.5,
    "powerGridList": 1674.5,
    "socList": 92.5,
    "netLoadList": 1267,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "4:45",
    "storageOutputList": 407,
    "powerGridList": 1654.4,
    "socList": 92.9,
    "netLoadList": 1247.4,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "4:46",
    "storageOutputList": 407.5,
    "powerGridList": 1703.5,
    "socList": 93.3,
    "netLoadList": 1296,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "4:47",
    "storageOutputList": 407,
    "powerGridList": 1633,
    "socList": 93.7,
    "netLoadList": 1226,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "4:48",
    "storageOutputList": 407,
    "powerGridList": 1753.9,
    "socList": 93.7,
    "netLoadList": 1346.9,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "4:49",
    "storageOutputList": 407.5,
    "powerGridList": 1755.2,
    "socList": 94.1,
    "netLoadList": 1347.7,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "4:50",
    "storageOutputList": 407.5,
    "powerGridList": 1770.3,
    "socList": 94.4,
    "netLoadList": 1362.8,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "4:51",
    "storageOutputList": 407,
    "powerGridList": 1782.9,
    "socList": 94.8,
    "netLoadList": 1375.9,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "4:52",
    "storageOutputList": 406.5,
    "powerGridList": 1706,
    "socList": 94.8,
    "netLoadList": 1299.5,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "4:53",
    "storageOutputList": 407.5,
    "powerGridList": 1687.1,
    "socList": 95.2,
    "netLoadList": 1279.6,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "4:54",
    "storageOutputList": 407.5,
    "powerGridList": 1619.1,
    "socList": 95.6,
    "netLoadList": 1211.6,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "4:55",
    "storageOutputList": 406.5,
    "powerGridList": 1514.5,
    "socList": 96,
    "netLoadList": 1108,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "4:56",
    "storageOutputList": 407.5,
    "powerGridList": 1712.3,
    "socList": 96.4,
    "netLoadList": 1304.8,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "4:57",
    "storageOutputList": 366,
    "powerGridList": 1703.5,
    "socList": 96.4,
    "netLoadList": 1337.5,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "4:58",
    "storageOutputList": 326,
    "powerGridList": 1557.4,
    "socList": 96.8,
    "netLoadList": 1231.4,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "4:59",
    "storageOutputList": 326,
    "powerGridList": 1635.5,
    "socList": 96.8,
    "netLoadList": 1309.5,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "5:00",
    "storageOutputList": 286.5,
    "powerGridList": 1604,
    "socList": 97.2,
    "netLoadList": 1317.5,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "5:01",
    "storageOutputList": 246.5,
    "powerGridList": 1563.7,
    "socList": 97.6,
    "netLoadList": 1317.2,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "5:02",
    "storageOutputList": 246.5,
    "powerGridList": 1470.4,
    "socList": 97.6,
    "netLoadList": 1223.9,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "5:03",
    "storageOutputList": 246.5,
    "powerGridList": 1498.1,
    "socList": 97.6,
    "netLoadList": 1251.6,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "5:04",
    "storageOutputList": 20,
    "powerGridList": 1239.8,
    "socList": 100,
    "netLoadList": 1219.8,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "5:05",
    "storageOutputList": 19.5,
    "powerGridList": 1214.6,
    "socList": 100,
    "netLoadList": 1195.1,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "5:06",
    "storageOutputList": 19,
    "powerGridList": 1350.7,
    "socList": 100,
    "netLoadList": 1331.7,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "5:07",
    "storageOutputList": 15.5,
    "powerGridList": 1123.9,
    "socList": 100,
    "netLoadList": 1108.4,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "5:08",
    "storageOutputList": 2,
    "powerGridList": 1214.6,
    "socList": 100,
    "netLoadList": 1212.6,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "5:09",
    "storageOutputList": 2,
    "powerGridList": 1246.1,
    "socList": 100,
    "netLoadList": 1244.1,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "5:10",
    "storageOutputList": 1.5,
    "powerGridList": 1224.7,
    "socList": 100,
    "netLoadList": 1223.2,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "5:11",
    "storageOutputList": 1.5,
    "powerGridList": 1312.9,
    "socList": 100,
    "netLoadList": 1311.4,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "5:12",
    "storageOutputList": 1.5,
    "powerGridList": 1289,
    "socList": 100,
    "netLoadList": 1287.5,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "5:13",
    "storageOutputList": 1.5,
    "powerGridList": 1315.4,
    "socList": 100,
    "netLoadList": 1313.9,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "5:14",
    "storageOutputList": 1.5,
    "powerGridList": 1239.8,
    "socList": 100,
    "netLoadList": 1238.3,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "5:15",
    "storageOutputList": 4.5,
    "powerGridList": 1238.6,
    "socList": 100,
    "netLoadList": 1234.1,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "5:16",
    "storageOutputList": 4,
    "powerGridList": 1170.5,
    "socList": 100,
    "netLoadList": 1166.5,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "5:17",
    "storageOutputList": 4,
    "powerGridList": 1257.5,
    "socList": 100,
    "netLoadList": 1253.5,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "5:18",
    "storageOutputList": 4,
    "powerGridList": 1156.7,
    "socList": 100,
    "netLoadList": 1152.7,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "5:19",
    "storageOutputList": 4,
    "powerGridList": 1297.8,
    "socList": 100,
    "netLoadList": 1293.8,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "5:20",
    "storageOutputList": 4,
    "powerGridList": 1328,
    "socList": 100,
    "netLoadList": 1324,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "5:21",
    "storageOutputList": 4,
    "powerGridList": 1334.3,
    "socList": 100,
    "netLoadList": 1330.3,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "5:22",
    "storageOutputList": 4,
    "powerGridList": 1310.4,
    "socList": 100,
    "netLoadList": 1306.4,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "5:23",
    "storageOutputList": 4,
    "powerGridList": 1311.7,
    "socList": 100,
    "netLoadList": 1307.7,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "5:24",
    "storageOutputList": 4,
    "powerGridList": 1270.1,
    "socList": 100,
    "netLoadList": 1266.1,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "5:25",
    "storageOutputList": 4,
    "powerGridList": 1255,
    "socList": 100,
    "netLoadList": 1251,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "5:26",
    "storageOutputList": 4,
    "powerGridList": 1227.2,
    "socList": 100,
    "netLoadList": 1223.2,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "5:27",
    "storageOutputList": 1.5,
    "powerGridList": 1301.6,
    "socList": 100,
    "netLoadList": 1300.1,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "5:28",
    "storageOutputList": 1.5,
    "powerGridList": 1357,
    "socList": 100,
    "netLoadList": 1355.5,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "5:29",
    "storageOutputList": 1.5,
    "powerGridList": 1344.4,
    "socList": 100,
    "netLoadList": 1342.9,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "5:30",
    "storageOutputList": 1.5,
    "powerGridList": 1249.9,
    "socList": 100,
    "netLoadList": 1248.4,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "5:31",
    "storageOutputList": 1.5,
    "powerGridList": 1237.3,
    "socList": 100,
    "netLoadList": 1235.8,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "5:32",
    "storageOutputList": 1.5,
    "powerGridList": 1343.2,
    "socList": 100,
    "netLoadList": 1341.7,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "5:33",
    "storageOutputList": 1.5,
    "powerGridList": 1321.7,
    "socList": 100,
    "netLoadList": 1320.2,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "5:34",
    "storageOutputList": 1.5,
    "powerGridList": 1169.3,
    "socList": 100,
    "netLoadList": 1167.8,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "5:35",
    "storageOutputList": 1.5,
    "powerGridList": 1318,
    "socList": 100,
    "netLoadList": 1316.5,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "5:36",
    "storageOutputList": 1.5,
    "powerGridList": 1406.2,
    "socList": 100,
    "netLoadList": 1404.7,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "5:37",
    "storageOutputList": 1.5,
    "powerGridList": 1262.5,
    "socList": 100,
    "netLoadList": 1261,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "5:38",
    "storageOutputList": 1.5,
    "powerGridList": 1273.9,
    "socList": 100,
    "netLoadList": 1272.4,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "5:39",
    "storageOutputList": 1.5,
    "powerGridList": 1286.5,
    "socList": 100,
    "netLoadList": 1285,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "5:40",
    "storageOutputList": 1.5,
    "powerGridList": 1236.1,
    "socList": 100,
    "netLoadList": 1234.6,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "5:41",
    "storageOutputList": 1.5,
    "powerGridList": 1209.6,
    "socList": 100,
    "netLoadList": 1208.1,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "5:42",
    "storageOutputList": 1.5,
    "powerGridList": 1265,
    "socList": 100,
    "netLoadList": 1263.5,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "5:43",
    "storageOutputList": 1.5,
    "powerGridList": 1267.6,
    "socList": 100,
    "netLoadList": 1266.1,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "5:44",
    "storageOutputList": 1.5,
    "powerGridList": 1285.2,
    "socList": 100,
    "netLoadList": 1283.7,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "5:45",
    "storageOutputList": 1.5,
    "powerGridList": 1302.8,
    "socList": 100,
    "netLoadList": 1301.3,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "5:46",
    "storageOutputList": 1.5,
    "powerGridList": 1305.4,
    "socList": 100,
    "netLoadList": 1303.9,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "5:47",
    "storageOutputList": 1.5,
    "powerGridList": 1280.2,
    "socList": 100,
    "netLoadList": 1278.7,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "5:48",
    "storageOutputList": 1.5,
    "powerGridList": 1330.6,
    "socList": 100,
    "netLoadList": 1329.1,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "5:49",
    "storageOutputList": 1.5,
    "powerGridList": 1261.3,
    "socList": 100,
    "netLoadList": 1259.8,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "5:50",
    "storageOutputList": 1.5,
    "powerGridList": 1326.8,
    "socList": 100,
    "netLoadList": 1325.3,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "5:51",
    "storageOutputList": 1.5,
    "powerGridList": 1302.8,
    "socList": 100,
    "netLoadList": 1301.3,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "5:52",
    "storageOutputList": 1.5,
    "powerGridList": 1314.2,
    "socList": 100,
    "netLoadList": 1312.7,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "5:53",
    "storageOutputList": 1.5,
    "powerGridList": 1267.6,
    "socList": 100,
    "netLoadList": 1266.1,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "5:54",
    "storageOutputList": 1.5,
    "powerGridList": 1305.4,
    "socList": 100,
    "netLoadList": 1303.9,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "5:55",
    "storageOutputList": 1.5,
    "powerGridList": 1285.2,
    "socList": 100,
    "netLoadList": 1283.7,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "5:56",
    "storageOutputList": 1.5,
    "powerGridList": 1310.4,
    "socList": 100,
    "netLoadList": 1308.9,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "5:57",
    "storageOutputList": 1.5,
    "powerGridList": 1249.9,
    "socList": 100,
    "netLoadList": 1248.4,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "5:58",
    "storageOutputList": 1.5,
    "powerGridList": 1306.6,
    "socList": 100,
    "netLoadList": 1305.1,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "5:59",
    "storageOutputList": 1.5,
    "powerGridList": 1331.8,
    "socList": 100,
    "netLoadList": 1330.3,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "6:00",
    "storageOutputList": 1.5,
    "powerGridList": 1329.3,
    "socList": 100,
    "netLoadList": 1327.8,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "6:01",
    "storageOutputList": 1.5,
    "powerGridList": 1248.7,
    "socList": 100,
    "netLoadList": 1247.2,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "6:02",
    "storageOutputList": 1.5,
    "powerGridList": 1140.3,
    "socList": 100,
    "netLoadList": 1138.8,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "6:03",
    "storageOutputList": 1.5,
    "powerGridList": 1295.3,
    "socList": 100,
    "netLoadList": 1293.8,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "6:04",
    "storageOutputList": 1.5,
    "powerGridList": 1226,
    "socList": 100,
    "netLoadList": 1224.5,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "6:05",
    "storageOutputList": 1.5,
    "powerGridList": 1287.7,
    "socList": 100,
    "netLoadList": 1286.2,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "6:06",
    "storageOutputList": 1.5,
    "powerGridList": 1312.9,
    "socList": 100,
    "netLoadList": 1311.4,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "6:07",
    "storageOutputList": 1.5,
    "powerGridList": 1305.4,
    "socList": 100,
    "netLoadList": 1303.9,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "6:08",
    "storageOutputList": 1.5,
    "powerGridList": 1309.1,
    "socList": 100,
    "netLoadList": 1307.6,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "6:09",
    "storageOutputList": 1.5,
    "powerGridList": 1297.8,
    "socList": 100,
    "netLoadList": 1296.3,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "6:10",
    "storageOutputList": 1.5,
    "powerGridList": 1242.4,
    "socList": 100,
    "netLoadList": 1240.9,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "6:11",
    "storageOutputList": 1.5,
    "powerGridList": 1321.7,
    "socList": 100,
    "netLoadList": 1320.2,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "6:12",
    "storageOutputList": 1.5,
    "powerGridList": 1263.8,
    "socList": 100,
    "netLoadList": 1262.3,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "6:13",
    "storageOutputList": 1.5,
    "powerGridList": 1123.9,
    "socList": 100,
    "netLoadList": 1122.4,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "6:14",
    "storageOutputList": 1.5,
    "powerGridList": 1097.5,
    "socList": 100,
    "netLoadList": 1096,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "6:15",
    "storageOutputList": 1.5,
    "powerGridList": 1154.2,
    "socList": 100,
    "netLoadList": 1152.7,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "6:16",
    "storageOutputList": 1.5,
    "powerGridList": 1113.8,
    "socList": 100,
    "netLoadList": 1112.3,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "6:17",
    "storageOutputList": 1.5,
    "powerGridList": 1149.1,
    "socList": 100,
    "netLoadList": 1147.6,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "6:18",
    "storageOutputList": 1.5,
    "powerGridList": 1178.1,
    "socList": 100,
    "netLoadList": 1176.6,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "6:19",
    "storageOutputList": 1.5,
    "powerGridList": 1171.8,
    "socList": 100,
    "netLoadList": 1170.3,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "6:20",
    "storageOutputList": 1.5,
    "powerGridList": 1199.5,
    "socList": 100,
    "netLoadList": 1198,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "6:21",
    "storageOutputList": 1.5,
    "powerGridList": 1164.2,
    "socList": 100,
    "netLoadList": 1162.7,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "6:22",
    "storageOutputList": 1.5,
    "powerGridList": 1130.2,
    "socList": 100,
    "netLoadList": 1128.7,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "6:23",
    "storageOutputList": 1.5,
    "powerGridList": 1155.4,
    "socList": 100,
    "netLoadList": 1153.9,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "6:24",
    "storageOutputList": 1.5,
    "powerGridList": 1078.6,
    "socList": 100,
    "netLoadList": 1077.1,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "6:25",
    "storageOutputList": 1.5,
    "powerGridList": 1049.6,
    "socList": 100,
    "netLoadList": 1048.1,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "6:26",
    "storageOutputList": 1.5,
    "powerGridList": 1071,
    "socList": 100,
    "netLoadList": 1069.5,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "6:27",
    "storageOutputList": 1.5,
    "powerGridList": 1079.8,
    "socList": 100,
    "netLoadList": 1078.3,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "6:28",
    "storageOutputList": 1.5,
    "powerGridList": 1120.1,
    "socList": 100,
    "netLoadList": 1118.6,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "6:29",
    "storageOutputList": 1.5,
    "powerGridList": 1115.1,
    "socList": 100,
    "netLoadList": 1113.6,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "6:30",
    "storageOutputList": 1.5,
    "powerGridList": 1100,
    "socList": 100,
    "netLoadList": 1098.5,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "6:31",
    "storageOutputList": 1.5,
    "powerGridList": 1091.2,
    "socList": 100,
    "netLoadList": 1089.7,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "6:32",
    "storageOutputList": 1.5,
    "powerGridList": 1048.3,
    "socList": 100,
    "netLoadList": 1046.8,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "6:33",
    "storageOutputList": 1.5,
    "powerGridList": 1082.3,
    "socList": 100,
    "netLoadList": 1080.8,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "6:34",
    "storageOutputList": 1.5,
    "powerGridList": 1102.5,
    "socList": 100,
    "netLoadList": 1101,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "6:35",
    "storageOutputList": 1.5,
    "powerGridList": 1134,
    "socList": 100,
    "netLoadList": 1132.5,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "6:36",
    "storageOutputList": 1.5,
    "powerGridList": 1131.5,
    "socList": 100,
    "netLoadList": 1130,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "6:37",
    "storageOutputList": 1.5,
    "powerGridList": 1122.7,
    "socList": 100,
    "netLoadList": 1121.2,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "6:38",
    "storageOutputList": 1.5,
    "powerGridList": 1139,
    "socList": 100,
    "netLoadList": 1137.5,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "6:39",
    "storageOutputList": 1.5,
    "powerGridList": 1142.8,
    "socList": 100,
    "netLoadList": 1141.3,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "6:40",
    "storageOutputList": 1.5,
    "powerGridList": 1142.8,
    "socList": 100,
    "netLoadList": 1141.3,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "6:41",
    "storageOutputList": 1.5,
    "powerGridList": 1106.3,
    "socList": 100,
    "netLoadList": 1104.8,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "6:42",
    "storageOutputList": 1.5,
    "powerGridList": 1058.4,
    "socList": 100,
    "netLoadList": 1056.9,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "6:43",
    "storageOutputList": 1.5,
    "powerGridList": 1081.1,
    "socList": 100,
    "netLoadList": 1079.6,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "6:44",
    "storageOutputList": 1.5,
    "powerGridList": 1127.7,
    "socList": 100,
    "netLoadList": 1126.2,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "6:45",
    "storageOutputList": 1.5,
    "powerGridList": 1118.9,
    "socList": 100,
    "netLoadList": 1117.4,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "6:46",
    "storageOutputList": 1.5,
    "powerGridList": 1118.9,
    "socList": 100,
    "netLoadList": 1117.4,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "6:47",
    "storageOutputList": 1.5,
    "powerGridList": 1092.4,
    "socList": 100,
    "netLoadList": 1090.9,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "6:48",
    "storageOutputList": 1.5,
    "powerGridList": 1145.3,
    "socList": 100,
    "netLoadList": 1143.8,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "6:49",
    "storageOutputList": 1.5,
    "powerGridList": 1086.1,
    "socList": 100,
    "netLoadList": 1084.6,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "6:50",
    "storageOutputList": 1.5,
    "powerGridList": 1005.5,
    "socList": 100,
    "netLoadList": 1004,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "6:51",
    "storageOutputList": 1.5,
    "powerGridList": 1008,
    "socList": 100,
    "netLoadList": 1006.5,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "6:52",
    "storageOutputList": 1.5,
    "powerGridList": 985.3,
    "socList": 100,
    "netLoadList": 983.8,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "6:53",
    "storageOutputList": 1.5,
    "powerGridList": 1009.3,
    "socList": 100,
    "netLoadList": 1007.8,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "6:54",
    "storageOutputList": 1.5,
    "powerGridList": 1014.3,
    "socList": 100,
    "netLoadList": 1012.8,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "6:55",
    "storageOutputList": 1.5,
    "powerGridList": 974,
    "socList": 100,
    "netLoadList": 972.5,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "6:56",
    "storageOutputList": 1.5,
    "powerGridList": 955.1,
    "socList": 100,
    "netLoadList": 953.6,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "6:57",
    "storageOutputList": 1.5,
    "powerGridList": 924.8,
    "socList": 100,
    "netLoadList": 923.3,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "6:58",
    "storageOutputList": 1.5,
    "powerGridList": 962.6,
    "socList": 100,
    "netLoadList": 961.1,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "6:59",
    "storageOutputList": 1.5,
    "powerGridList": 971.5,
    "socList": 100,
    "netLoadList": 970,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "7:00",
    "storageOutputList": 1.5,
    "powerGridList": 908.5,
    "socList": 100,
    "netLoadList": 907,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "7:01",
    "storageOutputList": 1.5,
    "powerGridList": 885.8,
    "socList": 100,
    "netLoadList": 884.3,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "7:02",
    "storageOutputList": 1.5,
    "powerGridList": 873.2,
    "socList": 100,
    "netLoadList": 871.7,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "7:03",
    "storageOutputList": 1.5,
    "powerGridList": 923.6,
    "socList": 100,
    "netLoadList": 922.1,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "7:04",
    "storageOutputList": 1.5,
    "powerGridList": 829.1,
    "socList": 100,
    "netLoadList": 827.6,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "7:05",
    "storageOutputList": 1.5,
    "powerGridList": 859.3,
    "socList": 100,
    "netLoadList": 857.8,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "7:06",
    "storageOutputList": 1.5,
    "powerGridList": 695.5,
    "socList": 100,
    "netLoadList": 694,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "7:07",
    "storageOutputList": 1.5,
    "powerGridList": 696.8,
    "socList": 100,
    "netLoadList": 695.3,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "7:08",
    "storageOutputList": 1.5,
    "powerGridList": 694.3,
    "socList": 100,
    "netLoadList": 692.8,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "7:09",
    "storageOutputList": 1.5,
    "powerGridList": 728.3,
    "socList": 100,
    "netLoadList": 726.8,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "7:10",
    "storageOutputList": 1.5,
    "powerGridList": 696.8,
    "socList": 100,
    "netLoadList": 695.3,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "7:11",
    "storageOutputList": 1.5,
    "powerGridList": 690.5,
    "socList": 100,
    "netLoadList": 689,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "7:12",
    "storageOutputList": 1.5,
    "powerGridList": 650.2,
    "socList": 100,
    "netLoadList": 648.7,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "7:13",
    "storageOutputList": 1.5,
    "powerGridList": 701.8,
    "socList": 100,
    "netLoadList": 700.3,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "7:14",
    "storageOutputList": 1.5,
    "powerGridList": 587.2,
    "socList": 100,
    "netLoadList": 585.7,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "7:15",
    "storageOutputList": 1.5,
    "powerGridList": 594.7,
    "socList": 100,
    "netLoadList": 593.2,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "7:16",
    "storageOutputList": 1.5,
    "powerGridList": 577.1,
    "socList": 100,
    "netLoadList": 575.6,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "7:17",
    "storageOutputList": 1.5,
    "powerGridList": 647.6,
    "socList": 100,
    "netLoadList": 646.1,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "7:18",
    "storageOutputList": 1.5,
    "powerGridList": 645.1,
    "socList": 100,
    "netLoadList": 643.6,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "7:19",
    "storageOutputList": 1.5,
    "powerGridList": 616.1,
    "socList": 100,
    "netLoadList": 614.6,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "7:20",
    "storageOutputList": 1.5,
    "powerGridList": 583.4,
    "socList": 100,
    "netLoadList": 581.9,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "7:21",
    "storageOutputList": 1.5,
    "powerGridList": 564.5,
    "socList": 100,
    "netLoadList": 563,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "7:22",
    "storageOutputList": 1.5,
    "powerGridList": 540.5,
    "socList": 100,
    "netLoadList": 539,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "7:23",
    "storageOutputList": 1.5,
    "powerGridList": 539.3,
    "socList": 100,
    "netLoadList": 537.8,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "7:24",
    "storageOutputList": 1.5,
    "powerGridList": 550.6,
    "socList": 100,
    "netLoadList": 549.1,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "7:25",
    "storageOutputList": 1.5,
    "powerGridList": 536.8,
    "socList": 100,
    "netLoadList": 535.3,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "7:26",
    "storageOutputList": 1.5,
    "powerGridList": 551.9,
    "socList": 100,
    "netLoadList": 550.4,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "7:27",
    "storageOutputList": 1.5,
    "powerGridList": 565.7,
    "socList": 100,
    "netLoadList": 564.2,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "7:28",
    "storageOutputList": 1.5,
    "powerGridList": 556.9,
    "socList": 100,
    "netLoadList": 555.4,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "7:29",
    "storageOutputList": 1.5,
    "powerGridList": 565.7,
    "socList": 100,
    "netLoadList": 564.2,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "7:30",
    "storageOutputList": 1.5,
    "powerGridList": 570.8,
    "socList": 100,
    "netLoadList": 569.3,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "7:31",
    "storageOutputList": 1.5,
    "powerGridList": 579.6,
    "socList": 100,
    "netLoadList": 578.1,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "7:32",
    "storageOutputList": 1.5,
    "powerGridList": 553.1,
    "socList": 100,
    "netLoadList": 551.6,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "7:33",
    "storageOutputList": 1.5,
    "powerGridList": 551.9,
    "socList": 100,
    "netLoadList": 550.4,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "7:34",
    "storageOutputList": 1.5,
    "powerGridList": 550.6,
    "socList": 100,
    "netLoadList": 549.1,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "7:35",
    "storageOutputList": 1.5,
    "powerGridList": 545.6,
    "socList": 100,
    "netLoadList": 544.1,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "7:36",
    "storageOutputList": 1.5,
    "powerGridList": 551.9,
    "socList": 100,
    "netLoadList": 550.4,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "7:37",
    "storageOutputList": 1.5,
    "powerGridList": 554.4,
    "socList": 100,
    "netLoadList": 552.9,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "7:38",
    "storageOutputList": 1.5,
    "powerGridList": 579.6,
    "socList": 100,
    "netLoadList": 578.1,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "7:39",
    "storageOutputList": 1.5,
    "powerGridList": 564.5,
    "socList": 100,
    "netLoadList": 563,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "7:40",
    "storageOutputList": 1.5,
    "powerGridList": 555.7,
    "socList": 100,
    "netLoadList": 554.2,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "7:41",
    "storageOutputList": 1.5,
    "powerGridList": 539.3,
    "socList": 100,
    "netLoadList": 537.8,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "7:42",
    "storageOutputList": 1.5,
    "powerGridList": 544.3,
    "socList": 100,
    "netLoadList": 542.8,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "7:43",
    "storageOutputList": 1.5,
    "powerGridList": 546.8,
    "socList": 100,
    "netLoadList": 545.3,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "7:44",
    "storageOutputList": 1.5,
    "powerGridList": 545.6,
    "socList": 100,
    "netLoadList": 544.1,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "7:45",
    "storageOutputList": 1.5,
    "powerGridList": 550.6,
    "socList": 100,
    "netLoadList": 549.1,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "7:46",
    "storageOutputList": 1.5,
    "powerGridList": 535.5,
    "socList": 100,
    "netLoadList": 534,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "7:47",
    "storageOutputList": 1.5,
    "powerGridList": 529.2,
    "socList": 100,
    "netLoadList": 527.7,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "7:48",
    "storageOutputList": 1.5,
    "powerGridList": 553.1,
    "socList": 100,
    "netLoadList": 551.6,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "7:49",
    "storageOutputList": 1.5,
    "powerGridList": 514.1,
    "socList": 100,
    "netLoadList": 512.6,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "7:50",
    "storageOutputList": 1.5,
    "powerGridList": 604.8,
    "socList": 100,
    "netLoadList": 603.3,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "7:51",
    "storageOutputList": 1.5,
    "powerGridList": 616.1,
    "socList": 100,
    "netLoadList": 614.6,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "7:52",
    "storageOutputList": 1.5,
    "powerGridList": 647.6,
    "socList": 100,
    "netLoadList": 646.1,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "7:53",
    "storageOutputList": 1.5,
    "powerGridList": 997.9,
    "socList": 100,
    "netLoadList": 996.4,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "7:54",
    "storageOutputList": 1.5,
    "powerGridList": 822.8,
    "socList": 100,
    "netLoadList": 821.3,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "7:55",
    "storageOutputList": 1.5,
    "powerGridList": 761,
    "socList": 100,
    "netLoadList": 759.5,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "7:56",
    "storageOutputList": 1.5,
    "powerGridList": 633.8,
    "socList": 100,
    "netLoadList": 632.3,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "7:57",
    "storageOutputList": 1.5,
    "powerGridList": 593.5,
    "socList": 100,
    "netLoadList": 592,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "7:58",
    "storageOutputList": 1.5,
    "powerGridList": 616.1,
    "socList": 100,
    "netLoadList": 614.6,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "7:59",
    "storageOutputList": 1.5,
    "powerGridList": 696.8,
    "socList": 100,
    "netLoadList": 695.3,
    "runningLlanList": 400,
    "priceList": 0.33,
    "aaa": "谷"
   },
   {
    "dateList": "8:00",
    "storageOutputList": 1.5,
    "powerGridList": 704.3,
    "socList": 100,
    "netLoadList": 702.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "8:01",
    "storageOutputList": 1.5,
    "powerGridList": 832.9,
    "socList": 100,
    "netLoadList": 831.4,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "8:02",
    "storageOutputList": 1.5,
    "powerGridList": 695.5,
    "socList": 100,
    "netLoadList": 694,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "8:03",
    "storageOutputList": 1.5,
    "powerGridList": 732.1,
    "socList": 100,
    "netLoadList": 730.6,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "8:04",
    "storageOutputList": 1.5,
    "powerGridList": 728.3,
    "socList": 100,
    "netLoadList": 726.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "8:05",
    "storageOutputList": 1.5,
    "powerGridList": 851.8,
    "socList": 100,
    "netLoadList": 850.3,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "8:06",
    "storageOutputList": 1.5,
    "powerGridList": 763.6,
    "socList": 100,
    "netLoadList": 762.1,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "8:07",
    "storageOutputList": 1.5,
    "powerGridList": 764.8,
    "socList": 100,
    "netLoadList": 763.3,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "8:08",
    "storageOutputList": 1.5,
    "powerGridList": 764.8,
    "socList": 100,
    "netLoadList": 763.3,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "8:09",
    "storageOutputList": 1.5,
    "powerGridList": 791.3,
    "socList": 100,
    "netLoadList": 789.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "8:10",
    "storageOutputList": 1.5,
    "powerGridList": 764.8,
    "socList": 100,
    "netLoadList": 763.3,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "8:11",
    "storageOutputList": 1.5,
    "powerGridList": 757.3,
    "socList": 100,
    "netLoadList": 755.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "8:12",
    "storageOutputList": 1.5,
    "powerGridList": 986.6,
    "socList": 100,
    "netLoadList": 985.1,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "8:13",
    "storageOutputList": 1.5,
    "powerGridList": 793.8,
    "socList": 100,
    "netLoadList": 792.3,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "8:14",
    "storageOutputList": 1.5,
    "powerGridList": 840.4,
    "socList": 100,
    "netLoadList": 838.9,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "8:15",
    "storageOutputList": 1.5,
    "powerGridList": 811.4,
    "socList": 100,
    "netLoadList": 809.9,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "8:16",
    "storageOutputList": 1.5,
    "powerGridList": 874.4,
    "socList": 100,
    "netLoadList": 872.9,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "8:17",
    "storageOutputList": 1.5,
    "powerGridList": 918.5,
    "socList": 100,
    "netLoadList": 917,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "8:18",
    "storageOutputList": 1.5,
    "powerGridList": 905.9,
    "socList": 100,
    "netLoadList": 904.4,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "8:19",
    "storageOutputList": 1.5,
    "powerGridList": 1073.5,
    "socList": 100,
    "netLoadList": 1072,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "8:20",
    "storageOutputList": 1.5,
    "powerGridList": 908.5,
    "socList": 100,
    "netLoadList": 907,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "8:21",
    "storageOutputList": 1.5,
    "powerGridList": 842.9,
    "socList": 100,
    "netLoadList": 841.4,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "8:22",
    "storageOutputList": 1.5,
    "powerGridList": 858.1,
    "socList": 100,
    "netLoadList": 856.6,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "8:23",
    "storageOutputList": 1.5,
    "powerGridList": 1034.5,
    "socList": 100,
    "netLoadList": 1033,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "8:24",
    "storageOutputList": 1.5,
    "powerGridList": 879.5,
    "socList": 100,
    "netLoadList": 878,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "8:25",
    "storageOutputList": 1.5,
    "powerGridList": 848,
    "socList": 100,
    "netLoadList": 846.5,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "8:26",
    "storageOutputList": 1.5,
    "powerGridList": 908.5,
    "socList": 100,
    "netLoadList": 907,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "8:27",
    "storageOutputList": 1.5,
    "powerGridList": 911,
    "socList": 100,
    "netLoadList": 909.5,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "8:28",
    "storageOutputList": 1.5,
    "powerGridList": 936.2,
    "socList": 100,
    "netLoadList": 934.7,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "8:29",
    "storageOutputList": 1.5,
    "powerGridList": 1083.6,
    "socList": 100,
    "netLoadList": 1082.1,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "8:30",
    "storageOutputList": 1.5,
    "powerGridList": 1084.9,
    "socList": 100,
    "netLoadList": 1083.4,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "8:31",
    "storageOutputList": 1.5,
    "powerGridList": 1743.8,
    "socList": 100,
    "netLoadList": 1742.3,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "8:32",
    "storageOutputList": 1.5,
    "powerGridList": 1970.6,
    "socList": 100,
    "netLoadList": 1969.1,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "8:33",
    "storageOutputList": 1.5,
    "powerGridList": 1546,
    "socList": 100,
    "netLoadList": 1544.5,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "8:34",
    "storageOutputList": 1.5,
    "powerGridList": 1604,
    "socList": 100,
    "netLoadList": 1602.5,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "8:35",
    "storageOutputList": 1.5,
    "powerGridList": 1610.3,
    "socList": 100,
    "netLoadList": 1608.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "8:36",
    "storageOutputList": 1.5,
    "powerGridList": 1607.8,
    "socList": 100,
    "netLoadList": 1606.3,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "8:37",
    "storageOutputList": 1.5,
    "powerGridList": 1692.2,
    "socList": 100,
    "netLoadList": 1690.7,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "8:38",
    "storageOutputList": 1.5,
    "powerGridList": 1790.5,
    "socList": 100,
    "netLoadList": 1789,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "8:39",
    "storageOutputList": 1.5,
    "powerGridList": 1595.2,
    "socList": 100,
    "netLoadList": 1593.7,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "8:40",
    "storageOutputList": 1.5,
    "powerGridList": 1699.7,
    "socList": 100,
    "netLoadList": 1698.2,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "8:41",
    "storageOutputList": 1.5,
    "powerGridList": 1953,
    "socList": 100,
    "netLoadList": 1951.5,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "8:42",
    "storageOutputList": 1.5,
    "powerGridList": 1633,
    "socList": 100,
    "netLoadList": 1631.5,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "8:43",
    "storageOutputList": 1.5,
    "powerGridList": 1901.3,
    "socList": 100,
    "netLoadList": 1899.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "8:44",
    "storageOutputList": 1.5,
    "powerGridList": 1730,
    "socList": 100,
    "netLoadList": 1728.5,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "8:45",
    "storageOutputList": 1.5,
    "powerGridList": 1806.8,
    "socList": 100,
    "netLoadList": 1805.3,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "8:46",
    "storageOutputList": 1.5,
    "powerGridList": 1950.5,
    "socList": 100,
    "netLoadList": 1949,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "8:47",
    "storageOutputList": 1.5,
    "powerGridList": 1885,
    "socList": 100,
    "netLoadList": 1883.5,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "8:48",
    "storageOutputList": 1.5,
    "powerGridList": 1877.4,
    "socList": 100,
    "netLoadList": 1875.9,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "8:49",
    "storageOutputList": 1.5,
    "powerGridList": 1767.8,
    "socList": 100,
    "netLoadList": 1766.3,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "8:50",
    "storageOutputList": 1.5,
    "powerGridList": 1719.9,
    "socList": 100,
    "netLoadList": 1718.4,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "8:51",
    "storageOutputList": 1.5,
    "powerGridList": 1827,
    "socList": 100,
    "netLoadList": 1825.5,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "8:52",
    "storageOutputList": 1.5,
    "powerGridList": 1761.5,
    "socList": 100,
    "netLoadList": 1760,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "8:53",
    "storageOutputList": 1.5,
    "powerGridList": 1945.4,
    "socList": 100,
    "netLoadList": 1943.9,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "8:54",
    "storageOutputList": 1.5,
    "powerGridList": 1689.7,
    "socList": 100,
    "netLoadList": 1688.2,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "8:55",
    "storageOutputList": 1.5,
    "powerGridList": 1885,
    "socList": 100,
    "netLoadList": 1883.5,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "8:56",
    "storageOutputList": 1.5,
    "powerGridList": 1770.3,
    "socList": 100,
    "netLoadList": 1768.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "8:57",
    "storageOutputList": 1.5,
    "powerGridList": 1868.6,
    "socList": 100,
    "netLoadList": 1867.1,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "8:58",
    "storageOutputList": 1.5,
    "powerGridList": 1940.4,
    "socList": 100,
    "netLoadList": 1938.9,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "8:59",
    "storageOutputList": 1.5,
    "powerGridList": 2043.7,
    "socList": 100,
    "netLoadList": 2042.2,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "9:00",
    "storageOutputList": 1.5,
    "powerGridList": 1774.1,
    "socList": 100,
    "netLoadList": 1772.6,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "9:01",
    "storageOutputList": 1.5,
    "powerGridList": 1808.1,
    "socList": 100,
    "netLoadList": 1806.6,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "9:02",
    "storageOutputList": 1.5,
    "powerGridList": 1903.9,
    "socList": 100,
    "netLoadList": 1902.4,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "9:03",
    "storageOutputList": 1.5,
    "powerGridList": 1896.3,
    "socList": 100,
    "netLoadList": 1894.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "9:04",
    "storageOutputList": 1.5,
    "powerGridList": 1822,
    "socList": 100,
    "netLoadList": 1820.5,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "9:05",
    "storageOutputList": 1.5,
    "powerGridList": 1868.6,
    "socList": 100,
    "netLoadList": 1867.1,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "9:06",
    "storageOutputList": 1.5,
    "powerGridList": 1827,
    "socList": 100,
    "netLoadList": 1825.5,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "9:07",
    "storageOutputList": 1.5,
    "powerGridList": 1960.6,
    "socList": 100,
    "netLoadList": 1959.1,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "9:08",
    "storageOutputList": 1.5,
    "powerGridList": 1726.2,
    "socList": 100,
    "netLoadList": 1724.7,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "9:09",
    "storageOutputList": 1.5,
    "powerGridList": 1796.8,
    "socList": 100,
    "netLoadList": 1795.3,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "9:10",
    "storageOutputList": 1.5,
    "powerGridList": 1718.6,
    "socList": 100,
    "netLoadList": 1717.1,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "9:11",
    "storageOutputList": 1.5,
    "powerGridList": 1723.7,
    "socList": 100,
    "netLoadList": 1722.2,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "9:12",
    "storageOutputList": 1.5,
    "powerGridList": 1913.9,
    "socList": 100,
    "netLoadList": 1912.4,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "9:13",
    "storageOutputList": 1.5,
    "powerGridList": 1753.9,
    "socList": 100,
    "netLoadList": 1752.4,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "9:14",
    "storageOutputList": 1.5,
    "powerGridList": 1745.1,
    "socList": 100,
    "netLoadList": 1743.6,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "9:15",
    "storageOutputList": 1.5,
    "powerGridList": 1803.1,
    "socList": 100,
    "netLoadList": 1801.6,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "9:16",
    "storageOutputList": 1.5,
    "powerGridList": 1833.3,
    "socList": 100,
    "netLoadList": 1831.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "9:17",
    "storageOutputList": 1.5,
    "powerGridList": 2148.3,
    "socList": 100,
    "netLoadList": 2146.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "9:18",
    "storageOutputList": 1.5,
    "powerGridList": 1796.8,
    "socList": 100,
    "netLoadList": 1795.3,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "9:19",
    "storageOutputList": 1.5,
    "powerGridList": 1823.2,
    "socList": 100,
    "netLoadList": 1821.7,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "9:20",
    "storageOutputList": 1.5,
    "powerGridList": 1736.3,
    "socList": 100,
    "netLoadList": 1734.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "9:21",
    "storageOutputList": 1.5,
    "powerGridList": 1713.6,
    "socList": 100,
    "netLoadList": 1712.1,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "9:22",
    "storageOutputList": 1.5,
    "powerGridList": 1953,
    "socList": 100,
    "netLoadList": 1951.5,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "9:23",
    "storageOutputList": 1.5,
    "powerGridList": 1911.4,
    "socList": 100,
    "netLoadList": 1909.9,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "9:24",
    "storageOutputList": 1.5,
    "powerGridList": 1837.1,
    "socList": 100,
    "netLoadList": 1835.6,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "9:25",
    "storageOutputList": 1.5,
    "powerGridList": 1827,
    "socList": 100,
    "netLoadList": 1825.5,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "9:26",
    "storageOutputList": 1.5,
    "powerGridList": 2017.3,
    "socList": 100,
    "netLoadList": 2015.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "9:27",
    "storageOutputList": 1.5,
    "powerGridList": 1885,
    "socList": 100,
    "netLoadList": 1883.5,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "9:28",
    "storageOutputList": 1.5,
    "powerGridList": 1796.8,
    "socList": 100,
    "netLoadList": 1795.3,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "9:29",
    "storageOutputList": 1.5,
    "powerGridList": 1827,
    "socList": 100,
    "netLoadList": 1825.5,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "9:30",
    "storageOutputList": 1.5,
    "powerGridList": 1702.3,
    "socList": 100,
    "netLoadList": 1700.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "9:31",
    "storageOutputList": 1.5,
    "powerGridList": 1809.4,
    "socList": 100,
    "netLoadList": 1807.9,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "9:32",
    "storageOutputList": 1.5,
    "powerGridList": 1955.5,
    "socList": 100,
    "netLoadList": 1954,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "9:33",
    "storageOutputList": 1.5,
    "powerGridList": 1750.1,
    "socList": 100,
    "netLoadList": 1748.6,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "9:34",
    "storageOutputList": 1.5,
    "powerGridList": 1863.5,
    "socList": 100,
    "netLoadList": 1862,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "9:35",
    "storageOutputList": 1.5,
    "powerGridList": 1755.2,
    "socList": 100,
    "netLoadList": 1753.7,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "9:36",
    "storageOutputList": 1.5,
    "powerGridList": 1874.9,
    "socList": 100,
    "netLoadList": 1873.4,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "9:37",
    "storageOutputList": 1.5,
    "powerGridList": 2029.9,
    "socList": 100,
    "netLoadList": 2028.4,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "9:38",
    "storageOutputList": 1.5,
    "powerGridList": 1970.6,
    "socList": 100,
    "netLoadList": 1969.1,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "9:39",
    "storageOutputList": 1.5,
    "powerGridList": 1883.7,
    "socList": 100,
    "netLoadList": 1882.2,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "9:40",
    "storageOutputList": 1.5,
    "powerGridList": 1765.3,
    "socList": 100,
    "netLoadList": 1763.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "9:41",
    "storageOutputList": 1.5,
    "powerGridList": 1864.8,
    "socList": 100,
    "netLoadList": 1863.3,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "9:42",
    "storageOutputList": 1.5,
    "powerGridList": 1811.9,
    "socList": 100,
    "netLoadList": 1810.4,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "9:43",
    "storageOutputList": 1.5,
    "powerGridList": 2039.9,
    "socList": 100,
    "netLoadList": 2038.4,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "9:44",
    "storageOutputList": 1.5,
    "powerGridList": 1881.2,
    "socList": 100,
    "netLoadList": 1879.7,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "9:45",
    "storageOutputList": 2,
    "powerGridList": 1815.7,
    "socList": 100,
    "netLoadList": 1813.7,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "9:46",
    "storageOutputList": 1.5,
    "powerGridList": 1844.6,
    "socList": 100,
    "netLoadList": 1843.1,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "9:47",
    "storageOutputList": 1.5,
    "powerGridList": 1842.1,
    "socList": 100,
    "netLoadList": 1840.6,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "9:48",
    "storageOutputList": 1.5,
    "powerGridList": 1747.6,
    "socList": 100,
    "netLoadList": 1746.1,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "9:49",
    "storageOutputList": 1.5,
    "powerGridList": 2002.1,
    "socList": 100,
    "netLoadList": 2000.6,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "9:50",
    "storageOutputList": 1.5,
    "powerGridList": 1815.7,
    "socList": 100,
    "netLoadList": 1814.2,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "9:51",
    "storageOutputList": 1.5,
    "powerGridList": 1835.8,
    "socList": 100,
    "netLoadList": 1834.3,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "9:52",
    "storageOutputList": 1.5,
    "powerGridList": 1755.2,
    "socList": 100,
    "netLoadList": 1753.7,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "9:53",
    "storageOutputList": 1.5,
    "powerGridList": 1717.4,
    "socList": 100,
    "netLoadList": 1715.9,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "9:54",
    "storageOutputList": 1.5,
    "powerGridList": 1762.7,
    "socList": 100,
    "netLoadList": 1761.2,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "9:55",
    "storageOutputList": 1.5,
    "powerGridList": 1983.2,
    "socList": 100,
    "netLoadList": 1981.7,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "9:56",
    "storageOutputList": 1.5,
    "powerGridList": 1774.1,
    "socList": 100,
    "netLoadList": 1772.6,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "9:57",
    "storageOutputList": 1.5,
    "powerGridList": 1876.1,
    "socList": 100,
    "netLoadList": 1874.6,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "9:58",
    "storageOutputList": 1.5,
    "powerGridList": 1731.2,
    "socList": 100,
    "netLoadList": 1729.7,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "9:59",
    "storageOutputList": 1.5,
    "powerGridList": 1833.3,
    "socList": 100,
    "netLoadList": 1831.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "10:00",
    "storageOutputList": 1.5,
    "powerGridList": 1726.2,
    "socList": 99.9,
    "netLoadList": 1724.7,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "10:01",
    "storageOutputList": -429.5,
    "powerGridList": 1389.8,
    "socList": 99.9,
    "netLoadList": 1819.3,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "10:02",
    "storageOutputList": -980,
    "powerGridList": 743.4,
    "socList": 99.2,
    "netLoadList": 1723.4,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "10:03",
    "storageOutputList": -978,
    "powerGridList": 874.4,
    "socList": 98.3,
    "netLoadList": 1852.4,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "10:04",
    "storageOutputList": -979,
    "powerGridList": 769.9,
    "socList": 97.5,
    "netLoadList": 1748.9,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "10:05",
    "storageOutputList": -978,
    "powerGridList": 824,
    "socList": 96.7,
    "netLoadList": 1802,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "10:06",
    "storageOutputList": -978.5,
    "powerGridList": 817.7,
    "socList": 96,
    "netLoadList": 1796.2,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "10:07",
    "storageOutputList": -980,
    "powerGridList": 893.3,
    "socList": 95.2,
    "netLoadList": 1873.3,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "10:08",
    "storageOutputList": -978.5,
    "powerGridList": 898.4,
    "socList": 94,
    "netLoadList": 1876.9,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "10:09",
    "storageOutputList": -980,
    "powerGridList": 711.9,
    "socList": 93.2,
    "netLoadList": 1691.9,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "10:10",
    "storageOutputList": -978,
    "powerGridList": 763.6,
    "socList": 92.4,
    "netLoadList": 1741.6,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "10:11",
    "storageOutputList": -978,
    "powerGridList": 894.6,
    "socList": 91.7,
    "netLoadList": 1872.6,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "10:12",
    "storageOutputList": -978,
    "powerGridList": 777.4,
    "socList": 90.9,
    "netLoadList": 1755.4,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "10:13",
    "storageOutputList": -979.5,
    "powerGridList": 883.3,
    "socList": 90.1,
    "netLoadList": 1862.8,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "10:14",
    "storageOutputList": -978,
    "powerGridList": 908.5,
    "socList": 89.3,
    "netLoadList": 1886.5,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "10:15",
    "storageOutputList": -978,
    "powerGridList": 883.3,
    "socList": 88.1,
    "netLoadList": 1861.3,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "10:16",
    "storageOutputList": -978,
    "powerGridList": 777.4,
    "socList": 87.3,
    "netLoadList": 1755.4,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "10:17",
    "storageOutputList": -978,
    "powerGridList": 905.9,
    "socList": 86.5,
    "netLoadList": 1883.9,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "10:18",
    "storageOutputList": -979,
    "powerGridList": 834.1,
    "socList": 85.7,
    "netLoadList": 1813.1,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "10:19",
    "storageOutputList": -978,
    "powerGridList": 733.3,
    "socList": 84.9,
    "netLoadList": 1711.3,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "10:20",
    "storageOutputList": -979,
    "powerGridList": 980.3,
    "socList": 84.1,
    "netLoadList": 1959.3,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "10:21",
    "storageOutputList": -978,
    "powerGridList": 848,
    "socList": 83.4,
    "netLoadList": 1826,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "10:22",
    "storageOutputList": -978,
    "powerGridList": 893.3,
    "socList": 82.2,
    "netLoadList": 1871.3,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "10:23",
    "storageOutputList": -993.5,
    "powerGridList": 788.8,
    "socList": 81.4,
    "netLoadList": 1782.3,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "10:24",
    "storageOutputList": -992.5,
    "powerGridList": 902.2,
    "socList": 80.6,
    "netLoadList": 1894.7,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "10:25",
    "storageOutputList": -992.5,
    "powerGridList": 945,
    "socList": 79.8,
    "netLoadList": 1937.5,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "10:26",
    "storageOutputList": -992,
    "powerGridList": 808.9,
    "socList": 79,
    "netLoadList": 1800.9,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "10:27",
    "storageOutputList": -992.5,
    "powerGridList": 757.3,
    "socList": 78.2,
    "netLoadList": 1749.8,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "10:28",
    "storageOutputList": -992,
    "powerGridList": 916,
    "socList": 77.4,
    "netLoadList": 1908,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "10:29",
    "storageOutputList": -992,
    "powerGridList": 808.9,
    "socList": 76.6,
    "netLoadList": 1800.9,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "10:30",
    "storageOutputList": -992,
    "powerGridList": 1111.3,
    "socList": 75.5,
    "netLoadList": 2103.3,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "10:31",
    "storageOutputList": -992,
    "powerGridList": 739.6,
    "socList": 74.7,
    "netLoadList": 1731.6,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "10:32",
    "storageOutputList": -992,
    "powerGridList": 878.2,
    "socList": 73.9,
    "netLoadList": 1870.2,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "10:33",
    "storageOutputList": -992,
    "powerGridList": 790,
    "socList": 73.1,
    "netLoadList": 1782,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "10:34",
    "storageOutputList": -992,
    "powerGridList": 1000.4,
    "socList": 72.3,
    "netLoadList": 1992.4,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "10:35",
    "storageOutputList": -992,
    "powerGridList": 873.2,
    "socList": 71.5,
    "netLoadList": 1865.2,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "10:36",
    "storageOutputList": -976.5,
    "powerGridList": 863.1,
    "socList": 70.7,
    "netLoadList": 1839.6,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "10:37",
    "storageOutputList": -978,
    "powerGridList": 819,
    "socList": 69.5,
    "netLoadList": 1797,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "10:38",
    "storageOutputList": -978.5,
    "powerGridList": 1165.5,
    "socList": 68.7,
    "netLoadList": 2144,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "10:39",
    "storageOutputList": -977.5,
    "powerGridList": 815.2,
    "socList": 68,
    "netLoadList": 1792.7,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "10:40",
    "storageOutputList": -979,
    "powerGridList": 917.3,
    "socList": 67.2,
    "netLoadList": 1896.3,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "10:41",
    "storageOutputList": -977,
    "powerGridList": 831.6,
    "socList": 66.4,
    "netLoadList": 1808.6,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "10:42",
    "storageOutputList": -977.5,
    "powerGridList": 732.1,
    "socList": 65.6,
    "netLoadList": 1709.6,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "10:43",
    "storageOutputList": -978,
    "powerGridList": 837.9,
    "socList": 64.8,
    "netLoadList": 1815.9,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "10:44",
    "storageOutputList": -977.5,
    "powerGridList": 957.6,
    "socList": 63.6,
    "netLoadList": 1935.1,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "10:45",
    "storageOutputList": -978,
    "powerGridList": 977.8,
    "socList": 62.8,
    "netLoadList": 1955.8,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "10:46",
    "storageOutputList": -977.5,
    "powerGridList": 829.1,
    "socList": 62,
    "netLoadList": 1806.6,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "10:47",
    "storageOutputList": -979,
    "powerGridList": 905.9,
    "socList": 61.2,
    "netLoadList": 1884.9,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "10:48",
    "storageOutputList": -977,
    "powerGridList": 919.8,
    "socList": 60.4,
    "netLoadList": 1896.8,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "10:49",
    "storageOutputList": -978.5,
    "powerGridList": 864.4,
    "socList": 59.7,
    "netLoadList": 1842.9,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "10:50",
    "storageOutputList": -978.5,
    "powerGridList": 767.3,
    "socList": 58.5,
    "netLoadList": 1745.8,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "10:51",
    "storageOutputList": -977,
    "powerGridList": 1039.5,
    "socList": 57.7,
    "netLoadList": 2016.5,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "10:52",
    "storageOutputList": -978.5,
    "powerGridList": 771.1,
    "socList": 56.9,
    "netLoadList": 1749.6,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "10:53",
    "storageOutputList": -977.5,
    "powerGridList": 1038.2,
    "socList": 56.1,
    "netLoadList": 2015.7,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "10:54",
    "storageOutputList": -978.5,
    "powerGridList": 883.3,
    "socList": 55.3,
    "netLoadList": 1861.8,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "10:55",
    "storageOutputList": -977,
    "powerGridList": 892.1,
    "socList": 54.5,
    "netLoadList": 1869.1,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "10:56",
    "storageOutputList": -977,
    "powerGridList": 788.8,
    "socList": 53.7,
    "netLoadList": 1765.8,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "10:57",
    "storageOutputList": -977,
    "powerGridList": 1066,
    "socList": 52.6,
    "netLoadList": 2043,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "10:58",
    "storageOutputList": -977,
    "powerGridList": 718.2,
    "socList": 51.8,
    "netLoadList": 1695.2,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "10:59",
    "storageOutputList": -977,
    "powerGridList": 845.5,
    "socList": 51,
    "netLoadList": 1822.5,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "11:00",
    "storageOutputList": -978.5,
    "powerGridList": 927.4,
    "socList": 50.2,
    "netLoadList": 1905.9,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "11:01",
    "storageOutputList": -976.5,
    "powerGridList": 864.4,
    "socList": 49.4,
    "netLoadList": 1840.9,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "11:02",
    "storageOutputList": -978.5,
    "powerGridList": 1008,
    "socList": 48.2,
    "netLoadList": 1986.5,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "11:03",
    "storageOutputList": -977,
    "powerGridList": 1039.5,
    "socList": 47.4,
    "netLoadList": 2016.5,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "11:04",
    "storageOutputList": -979,
    "powerGridList": 777.4,
    "socList": 46.6,
    "netLoadList": 1756.4,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "11:05",
    "storageOutputList": -977,
    "powerGridList": 1055.9,
    "socList": 45.8,
    "netLoadList": 2032.9,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "11:06",
    "storageOutputList": -977,
    "powerGridList": 856.8,
    "socList": 45,
    "netLoadList": 1833.8,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "11:07",
    "storageOutputList": -979,
    "powerGridList": 863.1,
    "socList": 44.2,
    "netLoadList": 1842.1,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "11:08",
    "storageOutputList": -977.5,
    "powerGridList": 1057.1,
    "socList": 43,
    "netLoadList": 2034.6,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "11:09",
    "storageOutputList": -979,
    "powerGridList": 1301.6,
    "socList": 42.2,
    "netLoadList": 2280.6,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "11:10",
    "storageOutputList": -978.5,
    "powerGridList": 887,
    "socList": 41.4,
    "netLoadList": 1865.5,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "11:11",
    "storageOutputList": -978.5,
    "powerGridList": 773.6,
    "socList": 40.6,
    "netLoadList": 1752.1,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "11:12",
    "storageOutputList": -977,
    "powerGridList": 1105,
    "socList": 39.9,
    "netLoadList": 2082,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "11:13",
    "storageOutputList": -993,
    "powerGridList": 1089.9,
    "socList": 39.1,
    "netLoadList": 2082.9,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "11:14",
    "storageOutputList": -991.5,
    "powerGridList": 968.9,
    "socList": 38.3,
    "netLoadList": 1960.4,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "11:15",
    "storageOutputList": -991.5,
    "powerGridList": 810.2,
    "socList": 37.1,
    "netLoadList": 1801.7,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "11:16",
    "storageOutputList": -993,
    "powerGridList": 859.3,
    "socList": 36.3,
    "netLoadList": 1852.3,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "11:17",
    "storageOutputList": -993,
    "powerGridList": 836.6,
    "socList": 35.5,
    "netLoadList": 1829.6,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "11:18",
    "storageOutputList": -991.5,
    "powerGridList": 1141.6,
    "socList": 34.8,
    "netLoadList": 2133.1,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "11:19",
    "storageOutputList": -991.5,
    "powerGridList": 1052.1,
    "socList": 34,
    "netLoadList": 2043.6,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "11:20",
    "storageOutputList": -992,
    "powerGridList": 854.3,
    "socList": 32.8,
    "netLoadList": 1846.3,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "11:21",
    "storageOutputList": -992,
    "powerGridList": 810.2,
    "socList": 32,
    "netLoadList": 1802.2,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "11:22",
    "storageOutputList": -991.5,
    "powerGridList": 958.9,
    "socList": 31.2,
    "netLoadList": 1950.4,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "11:23",
    "storageOutputList": -993,
    "powerGridList": 966.4,
    "socList": 30.4,
    "netLoadList": 1959.4,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "11:24",
    "storageOutputList": -993,
    "powerGridList": 1008,
    "socList": 29.6,
    "netLoadList": 2001,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "11:25",
    "storageOutputList": -991.5,
    "powerGridList": 1491.8,
    "socList": 28.9,
    "netLoadList": 2483.3,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "11:26",
    "storageOutputList": -992,
    "powerGridList": 1200.8,
    "socList": 27.7,
    "netLoadList": 2192.8,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "11:27",
    "storageOutputList": -992,
    "powerGridList": 1369.6,
    "socList": 26.9,
    "netLoadList": 2361.6,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "11:28",
    "storageOutputList": -991,
    "powerGridList": 1350.7,
    "socList": 26.1,
    "netLoadList": 2341.7,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "11:29",
    "storageOutputList": -974,
    "powerGridList": 1289,
    "socList": 25.3,
    "netLoadList": 2263,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "11:30",
    "storageOutputList": -977,
    "powerGridList": 1315.4,
    "socList": 24.5,
    "netLoadList": 2292.4,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "11:31",
    "storageOutputList": -978,
    "powerGridList": 1349.5,
    "socList": 23.3,
    "netLoadList": 2327.5,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "11:32",
    "storageOutputList": -978,
    "powerGridList": 1367.1,
    "socList": 22.5,
    "netLoadList": 2345.1,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "11:33",
    "storageOutputList": -977,
    "powerGridList": 1508.2,
    "socList": 21.7,
    "netLoadList": 2485.2,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "11:34",
    "storageOutputList": -976.5,
    "powerGridList": 1364.6,
    "socList": 21,
    "netLoadList": 2341.1,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "11:35",
    "storageOutputList": -976.5,
    "powerGridList": 1229.8,
    "socList": 20.2,
    "netLoadList": 2206.3,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "11:36",
    "storageOutputList": -977.5,
    "powerGridList": 1270.1,
    "socList": 19,
    "netLoadList": 2247.6,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "11:37",
    "storageOutputList": -977.5,
    "powerGridList": 1399.9,
    "socList": 18.2,
    "netLoadList": 2377.4,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "11:38",
    "storageOutputList": -978,
    "powerGridList": 1169.3,
    "socList": 17.4,
    "netLoadList": 2147.3,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "11:39",
    "storageOutputList": -977.5,
    "powerGridList": 1292.8,
    "socList": 16.6,
    "netLoadList": 2270.3,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "11:40",
    "storageOutputList": -977.5,
    "powerGridList": 1262.5,
    "socList": 15.8,
    "netLoadList": 2240,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "11:41",
    "storageOutputList": -977.5,
    "powerGridList": 1198.3,
    "socList": 14.6,
    "netLoadList": 2175.8,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "11:42",
    "storageOutputList": -898,
    "powerGridList": 1362.1,
    "socList": 13.8,
    "netLoadList": 2260.1,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "11:43",
    "storageOutputList": -828,
    "powerGridList": 1391,
    "socList": 13.1,
    "netLoadList": 2219,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "11:44",
    "storageOutputList": -748,
    "powerGridList": 1455.3,
    "socList": 12.7,
    "netLoadList": 2203.3,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "11:45",
    "storageOutputList": -709,
    "powerGridList": 1625.4,
    "socList": 11.9,
    "netLoadList": 2334.4,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "11:46",
    "storageOutputList": -629,
    "powerGridList": 1721.2,
    "socList": 11.5,
    "netLoadList": 2350.2,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "11:47",
    "storageOutputList": -589,
    "powerGridList": 1602.7,
    "socList": 10.7,
    "netLoadList": 2191.7,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "11:48",
    "storageOutputList": -509.5,
    "powerGridList": 1823.2,
    "socList": 10.3,
    "netLoadList": 2332.7,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "11:49",
    "storageOutputList": -469.5,
    "powerGridList": 1777.9,
    "socList": 9.9,
    "netLoadList": 2247.4,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "11:50",
    "storageOutputList": -430,
    "powerGridList": 2022.3,
    "socList": 9.5,
    "netLoadList": 2452.3,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "11:51",
    "storageOutputList": -389.5,
    "powerGridList": 1854.7,
    "socList": 9.1,
    "netLoadList": 2244.2,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "11:52",
    "storageOutputList": -340,
    "powerGridList": 1876.1,
    "socList": 8.6,
    "netLoadList": 2216.1,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "11:53",
    "storageOutputList": -339.5,
    "powerGridList": 1903.9,
    "socList": 8.2,
    "netLoadList": 2243.4,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "11:54",
    "storageOutputList": -299.5,
    "powerGridList": 1922.8,
    "socList": 8.2,
    "netLoadList": 2222.3,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "11:55",
    "storageOutputList": -260.5,
    "powerGridList": 1935.4,
    "socList": 7.8,
    "netLoadList": 2195.9,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "11:56",
    "storageOutputList": -260,
    "powerGridList": 1950.5,
    "socList": 7.4,
    "netLoadList": 2210.5,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "11:57",
    "storageOutputList": -220,
    "powerGridList": 2018.5,
    "socList": 7.4,
    "netLoadList": 2238.5,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "11:58",
    "storageOutputList": -180,
    "powerGridList": 1983.2,
    "socList": 7,
    "netLoadList": 2163.2,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "11:59",
    "storageOutputList": -181,
    "powerGridList": 1234.8,
    "socList": 7,
    "netLoadList": 1415.8,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "12:00",
    "storageOutputList": 20.5,
    "powerGridList": 1314.2,
    "socList": 7,
    "netLoadList": 1293.7,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "12:01",
    "storageOutputList": 469.5,
    "powerGridList": 1805.6,
    "socList": 6.7,
    "netLoadList": 1336.1,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "12:02",
    "storageOutputList": 1024,
    "powerGridList": 2271.8,
    "socList": 7.5,
    "netLoadList": 1247.8,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "12:03",
    "storageOutputList": 1024.5,
    "powerGridList": 2283.1,
    "socList": 8.3,
    "netLoadList": 1258.6,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "12:04",
    "storageOutputList": 1010.5,
    "powerGridList": 2293.2,
    "socList": 8.7,
    "netLoadList": 1282.7,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "12:05",
    "storageOutputList": 1008.5,
    "powerGridList": 2269.3,
    "socList": 9.9,
    "netLoadList": 1260.8,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "12:06",
    "storageOutputList": 1008.5,
    "powerGridList": 2264.2,
    "socList": 10.7,
    "netLoadList": 1255.7,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "12:07",
    "storageOutputList": 1010,
    "powerGridList": 2298.2,
    "socList": 11.1,
    "netLoadList": 1288.2,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "12:08",
    "storageOutputList": 1009.5,
    "powerGridList": 2260.4,
    "socList": 11.9,
    "netLoadList": 1250.9,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "12:09",
    "storageOutputList": 1010,
    "powerGridList": 2436.8,
    "socList": 13.1,
    "netLoadList": 1426.8,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "12:10",
    "storageOutputList": 1008,
    "powerGridList": 2268,
    "socList": 13.5,
    "netLoadList": 1260,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "12:11",
    "storageOutputList": 1008.5,
    "powerGridList": 2222.6,
    "socList": 14.2,
    "netLoadList": 1214.1,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "12:12",
    "storageOutputList": 1010,
    "powerGridList": 2251.6,
    "socList": 15,
    "netLoadList": 1241.6,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "12:13",
    "storageOutputList": 1008,
    "powerGridList": 2245.3,
    "socList": 15.8,
    "netLoadList": 1237.3,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "12:14",
    "storageOutputList": 1008,
    "powerGridList": 2290.7,
    "socList": 16.6,
    "netLoadList": 1282.7,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "12:15",
    "storageOutputList": 1008,
    "powerGridList": 2299.5,
    "socList": 17.4,
    "netLoadList": 1291.5,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "12:16",
    "storageOutputList": 1008,
    "powerGridList": 2318.4,
    "socList": 18.2,
    "netLoadList": 1310.4,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "12:17",
    "storageOutputList": 1009,
    "powerGridList": 2421.7,
    "socList": 18.9,
    "netLoadList": 1412.7,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "12:18",
    "storageOutputList": 1027.5,
    "powerGridList": 2332.3,
    "socList": 19.7,
    "netLoadList": 1304.8,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "12:19",
    "storageOutputList": 1023.5,
    "powerGridList": 2252.9,
    "socList": 20.5,
    "netLoadList": 1229.4,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "12:20",
    "storageOutputList": 1022,
    "powerGridList": 2227.7,
    "socList": 21.3,
    "netLoadList": 1205.7,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "12:21",
    "storageOutputList": 1024.5,
    "powerGridList": 2231.5,
    "socList": 22.1,
    "netLoadList": 1207,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "12:22",
    "storageOutputList": 1023.5,
    "powerGridList": 2255.4,
    "socList": 22.8,
    "netLoadList": 1231.9,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "12:23",
    "storageOutputList": 1022.5,
    "powerGridList": 2250.4,
    "socList": 23.6,
    "netLoadList": 1227.9,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "12:24",
    "storageOutputList": 1022.5,
    "powerGridList": 2290.7,
    "socList": 24.4,
    "netLoadList": 1268.2,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "12:25",
    "storageOutputList": 1024,
    "powerGridList": 2270.5,
    "socList": 25.2,
    "netLoadList": 1246.5,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "12:26",
    "storageOutputList": 1024.5,
    "powerGridList": 2304.5,
    "socList": 26,
    "netLoadList": 1280,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "12:27",
    "storageOutputList": 1023,
    "powerGridList": 2431.8,
    "socList": 26.8,
    "netLoadList": 1408.8,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "12:28",
    "storageOutputList": 1022.5,
    "powerGridList": 2324.7,
    "socList": 27.5,
    "netLoadList": 1302.2,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "12:29",
    "storageOutputList": 1023,
    "powerGridList": 2273,
    "socList": 28.3,
    "netLoadList": 1250,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "12:30",
    "storageOutputList": 1024.5,
    "powerGridList": 2294.5,
    "socList": 29.1,
    "netLoadList": 1270,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "12:31",
    "storageOutputList": 1024,
    "powerGridList": 2261.7,
    "socList": 29.5,
    "netLoadList": 1237.7,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "12:32",
    "storageOutputList": 1022.5,
    "powerGridList": 2256.7,
    "socList": 30.3,
    "netLoadList": 1234.2,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "12:33",
    "storageOutputList": 1022.5,
    "powerGridList": 2411.6,
    "socList": 31.1,
    "netLoadList": 1389.1,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "12:34",
    "storageOutputList": 1024,
    "powerGridList": 2362.5,
    "socList": 31.8,
    "netLoadList": 1338.5,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "12:35",
    "storageOutputList": 1024,
    "powerGridList": 2286.9,
    "socList": 32.6,
    "netLoadList": 1262.9,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "12:36",
    "storageOutputList": 1024,
    "powerGridList": 2445.7,
    "socList": 33.4,
    "netLoadList": 1421.7,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "12:37",
    "storageOutputList": 1024.5,
    "powerGridList": 2438.1,
    "socList": 34.2,
    "netLoadList": 1413.6,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "12:38",
    "storageOutputList": 1024,
    "powerGridList": 2250.4,
    "socList": 35,
    "netLoadList": 1226.4,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "12:39",
    "storageOutputList": 1024,
    "powerGridList": 2309.6,
    "socList": 35.8,
    "netLoadList": 1285.6,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "12:40",
    "storageOutputList": 1024,
    "powerGridList": 2250.4,
    "socList": 36.5,
    "netLoadList": 1226.4,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "12:41",
    "storageOutputList": 1024,
    "powerGridList": 2260.4,
    "socList": 37.3,
    "netLoadList": 1236.4,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "12:42",
    "storageOutputList": 1024,
    "powerGridList": 2429.3,
    "socList": 38.1,
    "netLoadList": 1405.3,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "12:43",
    "storageOutputList": 1024,
    "powerGridList": 2263,
    "socList": 38.9,
    "netLoadList": 1239,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "12:44",
    "storageOutputList": 1022,
    "powerGridList": 2285.6,
    "socList": 39.7,
    "netLoadList": 1263.6,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "12:45",
    "storageOutputList": 1023,
    "powerGridList": 2286.9,
    "socList": 40.4,
    "netLoadList": 1263.9,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "12:46",
    "storageOutputList": 1022.5,
    "powerGridList": 2441.9,
    "socList": 41.2,
    "netLoadList": 1419.4,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "12:47",
    "storageOutputList": 1022,
    "powerGridList": 2351.2,
    "socList": 42,
    "netLoadList": 1329.2,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "12:48",
    "storageOutputList": 1024,
    "powerGridList": 2231.5,
    "socList": 42.4,
    "netLoadList": 1207.5,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "12:49",
    "storageOutputList": 1022,
    "powerGridList": 2261.7,
    "socList": 43.6,
    "netLoadList": 1239.7,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "12:50",
    "storageOutputList": 1022,
    "powerGridList": 2294.5,
    "socList": 44.4,
    "netLoadList": 1272.5,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "12:51",
    "storageOutputList": 1024,
    "powerGridList": 2381.4,
    "socList": 44.7,
    "netLoadList": 1357.4,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "12:52",
    "storageOutputList": 1023,
    "powerGridList": 2280.6,
    "socList": 45.5,
    "netLoadList": 1257.6,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "12:53",
    "storageOutputList": 1022.5,
    "powerGridList": 2196.2,
    "socList": 46.3,
    "netLoadList": 1173.7,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "12:54",
    "storageOutputList": 1024.5,
    "powerGridList": 2249.1,
    "socList": 47.1,
    "netLoadList": 1224.6,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "12:55",
    "storageOutputList": 1007.5,
    "powerGridList": 2260.4,
    "socList": 47.9,
    "netLoadList": 1252.9,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "12:56",
    "storageOutputList": 1007.5,
    "powerGridList": 2435.6,
    "socList": 48.7,
    "netLoadList": 1428.1,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "12:57",
    "storageOutputList": 1007.5,
    "powerGridList": 2259.2,
    "socList": 49.4,
    "netLoadList": 1251.7,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "12:58",
    "storageOutputList": 1009,
    "powerGridList": 2236.5,
    "socList": 50.2,
    "netLoadList": 1227.5,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "12:59",
    "storageOutputList": 1007.5,
    "powerGridList": 2268,
    "socList": 51,
    "netLoadList": 1260.5,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "13:00",
    "storageOutputList": 1007.5,
    "powerGridList": 2420.5,
    "socList": 51.8,
    "netLoadList": 1413,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "13:01",
    "storageOutputList": 1007.5,
    "powerGridList": 2349.9,
    "socList": 52.6,
    "netLoadList": 1342.4,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "13:02",
    "storageOutputList": 1007.5,
    "powerGridList": 2289.4,
    "socList": 53.4,
    "netLoadList": 1281.9,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "13:03",
    "storageOutputList": 1009,
    "powerGridList": 2270.5,
    "socList": 54.2,
    "netLoadList": 1261.5,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "13:04",
    "storageOutputList": 1022.5,
    "powerGridList": 2266.7,
    "socList": 55,
    "netLoadList": 1244.2,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "13:05",
    "storageOutputList": 1023,
    "powerGridList": 2450.7,
    "socList": 55.7,
    "netLoadList": 1427.7,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "13:06",
    "storageOutputList": 1022.5,
    "powerGridList": 2264.2,
    "socList": 56.1,
    "netLoadList": 1241.7,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "13:07",
    "storageOutputList": 1022.5,
    "powerGridList": 2256.7,
    "socList": 56.9,
    "netLoadList": 1234.2,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "13:08",
    "storageOutputList": 1022.5,
    "powerGridList": 2271.8,
    "socList": 57.7,
    "netLoadList": 1249.3,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "13:09",
    "storageOutputList": 1022.5,
    "powerGridList": 2511.2,
    "socList": 58.5,
    "netLoadList": 1488.7,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "13:10",
    "storageOutputList": 1024,
    "powerGridList": 2300.8,
    "socList": 59.2,
    "netLoadList": 1276.8,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "13:11",
    "storageOutputList": 1023.5,
    "powerGridList": 2293.2,
    "socList": 60,
    "netLoadList": 1269.7,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "13:12",
    "storageOutputList": 1022.5,
    "powerGridList": 2259.2,
    "socList": 60.8,
    "netLoadList": 1236.7,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "13:13",
    "storageOutputList": 1024,
    "powerGridList": 2288.2,
    "socList": 61.6,
    "netLoadList": 1264.2,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "13:14",
    "storageOutputList": 1022.5,
    "powerGridList": 2310.8,
    "socList": 62.4,
    "netLoadList": 1288.3,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "13:15",
    "storageOutputList": 1024,
    "powerGridList": 2516.2,
    "socList": 63.2,
    "netLoadList": 1492.2,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "13:16",
    "storageOutputList": 1022.5,
    "powerGridList": 2353.7,
    "socList": 63.9,
    "netLoadList": 1331.2,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "13:17",
    "storageOutputList": 1022.5,
    "powerGridList": 2378.9,
    "socList": 64.7,
    "netLoadList": 1356.4,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "13:18",
    "storageOutputList": 1024,
    "powerGridList": 2227.7,
    "socList": 65.5,
    "netLoadList": 1203.7,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "13:19",
    "storageOutputList": 1022.5,
    "powerGridList": 2298.2,
    "socList": 66.3,
    "netLoadList": 1275.7,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "13:20",
    "storageOutputList": 1024,
    "powerGridList": 2365,
    "socList": 67.1,
    "netLoadList": 1341,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "13:21",
    "storageOutputList": 1022.5,
    "powerGridList": 2284.4,
    "socList": 67.5,
    "netLoadList": 1261.9,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "13:22",
    "storageOutputList": 1024,
    "powerGridList": 2244.1,
    "socList": 68.2,
    "netLoadList": 1220.1,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "13:23",
    "storageOutputList": 1022.5,
    "powerGridList": 2493.5,
    "socList": 69,
    "netLoadList": 1471,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "13:24",
    "storageOutputList": 1022.5,
    "powerGridList": 2307.1,
    "socList": 69.8,
    "netLoadList": 1284.6,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "13:25",
    "storageOutputList": 1022.5,
    "powerGridList": 2352.4,
    "socList": 70.5,
    "netLoadList": 1329.9,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "13:26",
    "storageOutputList": 1022.5,
    "powerGridList": 2310.8,
    "socList": 71.3,
    "netLoadList": 1288.3,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "13:27",
    "storageOutputList": 1022.5,
    "powerGridList": 2474.6,
    "socList": 72.1,
    "netLoadList": 1452.1,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "13:28",
    "storageOutputList": 1024,
    "powerGridList": 2274.3,
    "socList": 72.9,
    "netLoadList": 1250.3,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "13:29",
    "storageOutputList": 1022.5,
    "powerGridList": 2259.2,
    "socList": 73.7,
    "netLoadList": 1236.7,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "13:30",
    "storageOutputList": 406,
    "powerGridList": 2565.4,
    "socList": 74.5,
    "netLoadList": 2159.4,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "13:31",
    "storageOutputList": 279.5,
    "powerGridList": 2552.8,
    "socList": 74.5,
    "netLoadList": 2273.3,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "13:32",
    "storageOutputList": 221.5,
    "powerGridList": 2697.7,
    "socList": 74.8,
    "netLoadList": 2476.2,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "13:33",
    "storageOutputList": 428.5,
    "powerGridList": 2753.1,
    "socList": 74.8,
    "netLoadList": 2324.6,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "13:34",
    "storageOutputList": 468.5,
    "powerGridList": 2564.1,
    "socList": 75.2,
    "netLoadList": 2095.6,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "13:35",
    "storageOutputList": 379,
    "powerGridList": 2908.1,
    "socList": 75.6,
    "netLoadList": 2529.1,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "13:36",
    "storageOutputList": 380,
    "powerGridList": 2858.9,
    "socList": 76,
    "netLoadList": 2478.9,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "13:37",
    "storageOutputList": 301.5,
    "powerGridList": 2759.4,
    "socList": 76,
    "netLoadList": 2457.9,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "13:38",
    "storageOutputList": 317.5,
    "powerGridList": 2581.7,
    "socList": 76.4,
    "netLoadList": 2264.2,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "13:39",
    "storageOutputList": 389.5,
    "powerGridList": 2750.6,
    "socList": 76.8,
    "netLoadList": 2361.1,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "13:40",
    "storageOutputList": 490,
    "powerGridList": 2813.6,
    "socList": 76.8,
    "netLoadList": 2323.6,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "13:41",
    "storageOutputList": 429.5,
    "powerGridList": 2793.4,
    "socList": 77.2,
    "netLoadList": 2363.9,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "13:42",
    "storageOutputList": 268.5,
    "powerGridList": 2691.4,
    "socList": 77.6,
    "netLoadList": 2422.9,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "13:43",
    "storageOutputList": 241.5,
    "powerGridList": 2641,
    "socList": 77.6,
    "netLoadList": 2399.5,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "13:44",
    "storageOutputList": 356.5,
    "powerGridList": 2598.1,
    "socList": 78,
    "netLoadList": 2241.6,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "13:45",
    "storageOutputList": 425.5,
    "powerGridList": 2619.5,
    "socList": 78.4,
    "netLoadList": 2194,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "13:46",
    "storageOutputList": 358.5,
    "powerGridList": 2774.5,
    "socList": 78.8,
    "netLoadList": 2416,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "13:47",
    "storageOutputList": 256,
    "powerGridList": 2698.9,
    "socList": 78.8,
    "netLoadList": 2442.9,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "13:48",
    "storageOutputList": 444,
    "powerGridList": 2635.9,
    "socList": 79.1,
    "netLoadList": 2191.9,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "13:49",
    "storageOutputList": 423,
    "powerGridList": 2630.9,
    "socList": 79.1,
    "netLoadList": 2207.9,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "13:50",
    "storageOutputList": 335.5,
    "powerGridList": 2540.2,
    "socList": 79.5,
    "netLoadList": 2204.7,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "13:51",
    "storageOutputList": 181.5,
    "powerGridList": 2488.5,
    "socList": 79.9,
    "netLoadList": 2307,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "13:52",
    "storageOutputList": 382.5,
    "powerGridList": 2586.8,
    "socList": 79.9,
    "netLoadList": 2204.3,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "13:53",
    "storageOutputList": 475,
    "powerGridList": 2754.4,
    "socList": 80.3,
    "netLoadList": 2279.4,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "13:54",
    "storageOutputList": 375,
    "powerGridList": 2535.1,
    "socList": 80.7,
    "netLoadList": 2160.1,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "13:55",
    "storageOutputList": 457,
    "powerGridList": 2721.6,
    "socList": 81.1,
    "netLoadList": 2264.6,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "13:56",
    "storageOutputList": 436,
    "powerGridList": 2675,
    "socList": 81.1,
    "netLoadList": 2239,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "13:57",
    "storageOutputList": 319.5,
    "powerGridList": 2648.5,
    "socList": 81.5,
    "netLoadList": 2329,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "13:58",
    "storageOutputList": 475,
    "powerGridList": 2617,
    "socList": 81.9,
    "netLoadList": 2142,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "13:59",
    "storageOutputList": 447,
    "powerGridList": 2637.2,
    "socList": 81.9,
    "netLoadList": 2190.2,
    "runningLlanList": 1000,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "14:00",
    "storageOutputList": 5.5,
    "powerGridList": 2250.4,
    "socList": 82.3,
    "netLoadList": 2244.9,
    "runningLlanList": 0,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "14:01",
    "storageOutputList": 4.5,
    "powerGridList": 2465.8,
    "socList": 82.3,
    "netLoadList": 2461.3,
    "runningLlanList": 0,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "14:02",
    "storageOutputList": 4.5,
    "powerGridList": 2365,
    "socList": 82.3,
    "netLoadList": 2360.5,
    "runningLlanList": 0,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "14:03",
    "storageOutputList": 4.5,
    "powerGridList": 2304.5,
    "socList": 82.3,
    "netLoadList": 2300,
    "runningLlanList": 0,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "14:04",
    "storageOutputList": 4.5,
    "powerGridList": 2213.8,
    "socList": 82.3,
    "netLoadList": 2209.3,
    "runningLlanList": 0,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "14:05",
    "storageOutputList": 4.5,
    "powerGridList": 2552.8,
    "socList": 82.3,
    "netLoadList": 2548.3,
    "runningLlanList": 0,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "14:06",
    "storageOutputList": 4,
    "powerGridList": 2307.1,
    "socList": 82.3,
    "netLoadList": 2303.1,
    "runningLlanList": 0,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "14:07",
    "storageOutputList": 4,
    "powerGridList": 2353.7,
    "socList": 82.3,
    "netLoadList": 2349.7,
    "runningLlanList": 0,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "14:08",
    "storageOutputList": 4,
    "powerGridList": 2406.6,
    "socList": 82.3,
    "netLoadList": 2402.6,
    "runningLlanList": 0,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "14:09",
    "storageOutputList": 4,
    "powerGridList": 2394,
    "socList": 82.3,
    "netLoadList": 2390,
    "runningLlanList": 0,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "14:10",
    "storageOutputList": 19,
    "powerGridList": 2264.2,
    "socList": 82.3,
    "netLoadList": 2245.2,
    "runningLlanList": 0,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "14:11",
    "storageOutputList": 19,
    "powerGridList": 2405.3,
    "socList": 82.3,
    "netLoadList": 2386.3,
    "runningLlanList": 0,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "14:12",
    "storageOutputList": 18.5,
    "powerGridList": 2312.1,
    "socList": 82.3,
    "netLoadList": 2293.6,
    "runningLlanList": 0,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "14:13",
    "storageOutputList": 18.5,
    "powerGridList": 2333.5,
    "socList": 82.3,
    "netLoadList": 2315,
    "runningLlanList": 0,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "14:14",
    "storageOutputList": 1.5,
    "powerGridList": 2260.4,
    "socList": 82.3,
    "netLoadList": 2258.9,
    "runningLlanList": 0,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "14:15",
    "storageOutputList": 1.5,
    "powerGridList": 2385.2,
    "socList": 82.3,
    "netLoadList": 2383.7,
    "runningLlanList": 0,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "14:16",
    "storageOutputList": 1.5,
    "powerGridList": 2307.1,
    "socList": 82.3,
    "netLoadList": 2305.6,
    "runningLlanList": 0,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "14:17",
    "storageOutputList": 1.5,
    "powerGridList": 2314.6,
    "socList": 82.3,
    "netLoadList": 2313.1,
    "runningLlanList": 0,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "14:18",
    "storageOutputList": 1.5,
    "powerGridList": 2319.7,
    "socList": 82.3,
    "netLoadList": 2318.2,
    "runningLlanList": 0,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "14:19",
    "storageOutputList": 4,
    "powerGridList": 2257.9,
    "socList": 82.3,
    "netLoadList": 2253.9,
    "runningLlanList": 0,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "14:20",
    "storageOutputList": 4,
    "powerGridList": 2526.3,
    "socList": 82.3,
    "netLoadList": 2522.3,
    "runningLlanList": 0,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "14:21",
    "storageOutputList": 4,
    "powerGridList": 2294.5,
    "socList": 82.3,
    "netLoadList": 2290.5,
    "runningLlanList": 0,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "14:22",
    "storageOutputList": 4,
    "powerGridList": 2234,
    "socList": 82.3,
    "netLoadList": 2230,
    "runningLlanList": 0,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "14:23",
    "storageOutputList": 4,
    "powerGridList": 2346.1,
    "socList": 82.3,
    "netLoadList": 2342.1,
    "runningLlanList": 0,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "14:24",
    "storageOutputList": 4,
    "powerGridList": 2362.5,
    "socList": 82.3,
    "netLoadList": 2358.5,
    "runningLlanList": 0,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "14:25",
    "storageOutputList": 4,
    "powerGridList": 2377.6,
    "socList": 82.3,
    "netLoadList": 2373.6,
    "runningLlanList": 0,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "14:26",
    "storageOutputList": 4,
    "powerGridList": 2368.8,
    "socList": 82.3,
    "netLoadList": 2364.8,
    "runningLlanList": 0,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "14:27",
    "storageOutputList": 4,
    "powerGridList": 2239,
    "socList": 82.3,
    "netLoadList": 2235,
    "runningLlanList": 0,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "14:28",
    "storageOutputList": 4,
    "powerGridList": 2409.1,
    "socList": 82.3,
    "netLoadList": 2405.1,
    "runningLlanList": 0,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "14:29",
    "storageOutputList": 4,
    "powerGridList": 2475.9,
    "socList": 82.3,
    "netLoadList": 2471.9,
    "runningLlanList": 0,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "14:30",
    "storageOutputList": 4,
    "powerGridList": 2231.5,
    "socList": 82.3,
    "netLoadList": 2227.5,
    "runningLlanList": 0,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "14:31",
    "storageOutputList": 4,
    "powerGridList": 2231.5,
    "socList": 82.3,
    "netLoadList": 2227.5,
    "runningLlanList": 0,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "14:32",
    "storageOutputList": 18.5,
    "powerGridList": 2218.9,
    "socList": 82.3,
    "netLoadList": 2200.4,
    "runningLlanList": 0,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "14:33",
    "storageOutputList": 18.5,
    "powerGridList": 2394,
    "socList": 82.3,
    "netLoadList": 2375.5,
    "runningLlanList": 0,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "14:34",
    "storageOutputList": 18.5,
    "powerGridList": 2346.1,
    "socList": 82.3,
    "netLoadList": 2327.6,
    "runningLlanList": 0,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "14:35",
    "storageOutputList": 18.5,
    "powerGridList": 2313.4,
    "socList": 82.3,
    "netLoadList": 2294.9,
    "runningLlanList": 0,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "14:36",
    "storageOutputList": 1.5,
    "powerGridList": 2202.5,
    "socList": 82.3,
    "netLoadList": 2201,
    "runningLlanList": 0,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "14:37",
    "storageOutputList": 1.5,
    "powerGridList": 2358.7,
    "socList": 82.3,
    "netLoadList": 2357.2,
    "runningLlanList": 0,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "14:38",
    "storageOutputList": 1.5,
    "powerGridList": 2232.7,
    "socList": 82.3,
    "netLoadList": 2231.2,
    "runningLlanList": 0,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "14:39",
    "storageOutputList": 1.5,
    "powerGridList": 2230.2,
    "socList": 82.3,
    "netLoadList": 2228.7,
    "runningLlanList": 0,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "14:40",
    "storageOutputList": 1.5,
    "powerGridList": 2273,
    "socList": 82.3,
    "netLoadList": 2271.5,
    "runningLlanList": 0,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "14:41",
    "storageOutputList": 4,
    "powerGridList": 2336,
    "socList": 82.3,
    "netLoadList": 2332,
    "runningLlanList": 0,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "14:42",
    "storageOutputList": 4,
    "powerGridList": 2194.9,
    "socList": 82.3,
    "netLoadList": 2190.9,
    "runningLlanList": 0,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "14:43",
    "storageOutputList": 4,
    "powerGridList": 2139.5,
    "socList": 82.3,
    "netLoadList": 2135.5,
    "runningLlanList": 0,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "14:44",
    "storageOutputList": 4,
    "powerGridList": 2164.7,
    "socList": 82.3,
    "netLoadList": 2160.7,
    "runningLlanList": 0,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "14:45",
    "storageOutputList": 4,
    "powerGridList": 2295.7,
    "socList": 82.3,
    "netLoadList": 2291.7,
    "runningLlanList": 0,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "14:46",
    "storageOutputList": 4,
    "powerGridList": 2276.8,
    "socList": 82.3,
    "netLoadList": 2272.8,
    "runningLlanList": 0,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "14:47",
    "storageOutputList": 4,
    "powerGridList": 2128.1,
    "socList": 82.3,
    "netLoadList": 2124.1,
    "runningLlanList": 0,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "14:48",
    "storageOutputList": 4,
    "powerGridList": 2154.6,
    "socList": 82.3,
    "netLoadList": 2150.6,
    "runningLlanList": 0,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "14:49",
    "storageOutputList": 4,
    "powerGridList": 2278.1,
    "socList": 82.3,
    "netLoadList": 2274.1,
    "runningLlanList": 0,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "14:50",
    "storageOutputList": 4,
    "powerGridList": 2377.6,
    "socList": 82.3,
    "netLoadList": 2373.6,
    "runningLlanList": 0,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "14:51",
    "storageOutputList": 4,
    "powerGridList": 2360,
    "socList": 82.3,
    "netLoadList": 2356,
    "runningLlanList": 0,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "14:52",
    "storageOutputList": 4,
    "powerGridList": 2160.9,
    "socList": 82.3,
    "netLoadList": 2156.9,
    "runningLlanList": 0,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "14:53",
    "storageOutputList": 4,
    "powerGridList": 2171,
    "socList": 82.3,
    "netLoadList": 2167,
    "runningLlanList": 0,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "14:54",
    "storageOutputList": 4,
    "powerGridList": 2279.3,
    "socList": 82.3,
    "netLoadList": 2275.3,
    "runningLlanList": 0,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "14:55",
    "storageOutputList": 4,
    "powerGridList": 2158.4,
    "socList": 82.3,
    "netLoadList": 2154.4,
    "runningLlanList": 0,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "14:56",
    "storageOutputList": 4,
    "powerGridList": 2394,
    "socList": 82.3,
    "netLoadList": 2390,
    "runningLlanList": 0,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "14:57",
    "storageOutputList": 4,
    "powerGridList": 2154.6,
    "socList": 82.3,
    "netLoadList": 2150.6,
    "runningLlanList": 0,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "14:58",
    "storageOutputList": 4,
    "powerGridList": 2145.8,
    "socList": 82.3,
    "netLoadList": 2141.8,
    "runningLlanList": 0,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "14:59",
    "storageOutputList": 4,
    "powerGridList": 2158.4,
    "socList": 82.3,
    "netLoadList": 2154.4,
    "runningLlanList": 0,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "15:00",
    "storageOutputList": 4,
    "powerGridList": 2356.2,
    "socList": 82.3,
    "netLoadList": 2352.2,
    "runningLlanList": 0,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "15:01",
    "storageOutputList": -448,
    "powerGridList": 1770.3,
    "socList": 82.4,
    "netLoadList": 2218.3,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "15:02",
    "storageOutputList": -993.5,
    "powerGridList": 1203.3,
    "socList": 81.6,
    "netLoadList": 2196.8,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "15:03",
    "storageOutputList": -992.5,
    "powerGridList": 1241.1,
    "socList": 80.8,
    "netLoadList": 2233.6,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "15:04",
    "storageOutputList": -977.5,
    "powerGridList": 1210.9,
    "socList": 80.1,
    "netLoadList": 2188.4,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "15:05",
    "storageOutputList": -978,
    "powerGridList": 1525.9,
    "socList": 79.3,
    "netLoadList": 2503.9,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "15:06",
    "storageOutputList": -978,
    "powerGridList": 1271.3,
    "socList": 78.5,
    "netLoadList": 2249.3,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "15:07",
    "storageOutputList": -978.5,
    "powerGridList": 1283.9,
    "socList": 77.7,
    "netLoadList": 2262.4,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "15:08",
    "storageOutputList": -976,
    "powerGridList": 1247.4,
    "socList": 76.5,
    "netLoadList": 2223.4,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "15:09",
    "storageOutputList": -978.5,
    "powerGridList": 1378.4,
    "socList": 75.7,
    "netLoadList": 2356.9,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "15:10",
    "storageOutputList": -977.5,
    "powerGridList": 1438.9,
    "socList": 74.9,
    "netLoadList": 2416.4,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "15:11",
    "storageOutputList": -978,
    "powerGridList": 1440.2,
    "socList": 74.1,
    "netLoadList": 2418.2,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "15:12",
    "storageOutputList": -977.5,
    "powerGridList": 1263.8,
    "socList": 73.3,
    "netLoadList": 2241.3,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "15:13",
    "storageOutputList": -978.5,
    "powerGridList": 1203.3,
    "socList": 72.6,
    "netLoadList": 2181.8,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "15:14",
    "storageOutputList": -978,
    "powerGridList": 1455.3,
    "socList": 71.8,
    "netLoadList": 2433.3,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "15:15",
    "storageOutputList": -977,
    "powerGridList": 1406.2,
    "socList": 71,
    "netLoadList": 2383.2,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "15:16",
    "storageOutputList": -978,
    "powerGridList": 1199.5,
    "socList": 69.8,
    "netLoadList": 2177.5,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "15:17",
    "storageOutputList": -978,
    "powerGridList": 1197,
    "socList": 69,
    "netLoadList": 2175,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "15:18",
    "storageOutputList": -978,
    "powerGridList": 1241.1,
    "socList": 68.2,
    "netLoadList": 2219.1,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "15:19",
    "storageOutputList": -978,
    "powerGridList": 1370.9,
    "socList": 67.4,
    "netLoadList": 2348.9,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "15:20",
    "storageOutputList": -977.5,
    "powerGridList": 1383.5,
    "socList": 66.6,
    "netLoadList": 2361,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "15:21",
    "storageOutputList": -993,
    "powerGridList": 1378.4,
    "socList": 65.8,
    "netLoadList": 2371.4,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "15:22",
    "storageOutputList": -992.5,
    "powerGridList": 1198.3,
    "socList": 65.1,
    "netLoadList": 2190.8,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "15:23",
    "storageOutputList": -993.5,
    "powerGridList": 1263.8,
    "socList": 63.9,
    "netLoadList": 2257.3,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "15:24",
    "storageOutputList": -992.5,
    "powerGridList": 1481.8,
    "socList": 63.1,
    "netLoadList": 2474.3,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "15:25",
    "storageOutputList": -993,
    "powerGridList": 1519.6,
    "socList": 62.3,
    "netLoadList": 2512.6,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "15:26",
    "storageOutputList": -992,
    "powerGridList": 1195.7,
    "socList": 61.5,
    "netLoadList": 2187.7,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "15:27",
    "storageOutputList": -993,
    "powerGridList": 1301.6,
    "socList": 60.7,
    "netLoadList": 2294.6,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "15:28",
    "storageOutputList": -992,
    "powerGridList": 1475.5,
    "socList": 59.9,
    "netLoadList": 2467.5,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "15:29",
    "storageOutputList": -992,
    "powerGridList": 1205.8,
    "socList": 59.1,
    "netLoadList": 2197.8,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "15:30",
    "storageOutputList": -993,
    "powerGridList": 1183.1,
    "socList": 57.9,
    "netLoadList": 2176.1,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "15:31",
    "storageOutputList": -971,
    "powerGridList": 1234.8,
    "socList": 57.2,
    "netLoadList": 2205.8,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "15:32",
    "storageOutputList": -977,
    "powerGridList": 1344.4,
    "socList": 56.4,
    "netLoadList": 2321.4,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "15:33",
    "storageOutputList": -977,
    "powerGridList": 1462.9,
    "socList": 55.6,
    "netLoadList": 2439.9,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "15:34",
    "storageOutputList": -977,
    "powerGridList": 1255,
    "socList": 54.8,
    "netLoadList": 2232,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "15:35",
    "storageOutputList": -977.5,
    "powerGridList": 1137.8,
    "socList": 54,
    "netLoadList": 2115.3,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "15:36",
    "storageOutputList": -978,
    "powerGridList": 1281.4,
    "socList": 53.2,
    "netLoadList": 2259.4,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "15:37",
    "storageOutputList": -977,
    "powerGridList": 1289,
    "socList": 52,
    "netLoadList": 2266,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "15:38",
    "storageOutputList": -977,
    "powerGridList": 1321.7,
    "socList": 51.2,
    "netLoadList": 2298.7,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "15:39",
    "storageOutputList": -976.5,
    "powerGridList": 1223.5,
    "socList": 50.4,
    "netLoadList": 2200,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "15:40",
    "storageOutputList": -977,
    "powerGridList": 1326.8,
    "socList": 49.6,
    "netLoadList": 2303.8,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "15:41",
    "storageOutputList": -977,
    "powerGridList": 1310.4,
    "socList": 48.9,
    "netLoadList": 2287.4,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "15:42",
    "storageOutputList": -977,
    "powerGridList": 1510.7,
    "socList": 48.1,
    "netLoadList": 2487.7,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "15:43",
    "storageOutputList": -977,
    "powerGridList": 1430.1,
    "socList": 46.9,
    "netLoadList": 2407.1,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "15:44",
    "storageOutputList": -978,
    "powerGridList": 1328,
    "socList": 46.1,
    "netLoadList": 2306,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "15:45",
    "storageOutputList": -992,
    "powerGridList": 1183.1,
    "socList": 45.3,
    "netLoadList": 2175.1,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "15:46",
    "storageOutputList": -991.5,
    "powerGridList": 1223.5,
    "socList": 44.5,
    "netLoadList": 2215,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "15:47",
    "storageOutputList": -992,
    "powerGridList": 1179.4,
    "socList": 43.7,
    "netLoadList": 2171.4,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "15:48",
    "storageOutputList": -991.5,
    "powerGridList": 1363.3,
    "socList": 42.9,
    "netLoadList": 2354.8,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "15:49",
    "storageOutputList": -992.5,
    "powerGridList": 1320.5,
    "socList": 41.8,
    "netLoadList": 2313,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "15:50",
    "storageOutputList": -993.5,
    "powerGridList": 1215.9,
    "socList": 41,
    "netLoadList": 2209.4,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "15:51",
    "storageOutputList": -993,
    "powerGridList": 1247.4,
    "socList": 40.2,
    "netLoadList": 2240.4,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "15:52",
    "storageOutputList": -992,
    "powerGridList": 1348.2,
    "socList": 39.4,
    "netLoadList": 2340.2,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "15:53",
    "storageOutputList": -992.5,
    "powerGridList": 1291.5,
    "socList": 38.6,
    "netLoadList": 2284,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "15:54",
    "storageOutputList": -992,
    "powerGridList": 1460.3,
    "socList": 37.8,
    "netLoadList": 2452.3,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "15:55",
    "storageOutputList": -993,
    "powerGridList": 1299.1,
    "socList": 36.6,
    "netLoadList": 2292.1,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "15:56",
    "storageOutputList": -991.5,
    "powerGridList": 1228.5,
    "socList": 35.8,
    "netLoadList": 2220,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "15:57",
    "storageOutputList": -976,
    "powerGridList": 1339.4,
    "socList": 35,
    "netLoadList": 2315.4,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "15:58",
    "storageOutputList": -976.5,
    "powerGridList": 1415,
    "socList": 34.2,
    "netLoadList": 2391.5,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "15:59",
    "storageOutputList": -976.5,
    "powerGridList": 1383.5,
    "socList": 33.5,
    "netLoadList": 2360,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "16:00",
    "storageOutputList": -977.5,
    "powerGridList": 1353.2,
    "socList": 32.3,
    "netLoadList": 2330.7,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "16:01",
    "storageOutputList": -977,
    "powerGridList": 1241.1,
    "socList": 31.5,
    "netLoadList": 2218.1,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "16:02",
    "storageOutputList": -977,
    "powerGridList": 1318,
    "socList": 30.7,
    "netLoadList": 2295,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "16:03",
    "storageOutputList": -977.5,
    "powerGridList": 1300.3,
    "socList": 29.9,
    "netLoadList": 2277.8,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "16:04",
    "storageOutputList": -977,
    "powerGridList": 1270.1,
    "socList": 29.1,
    "netLoadList": 2247.1,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "16:05",
    "storageOutputList": -977,
    "powerGridList": 1360.8,
    "socList": 28.3,
    "netLoadList": 2337.8,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "16:06",
    "storageOutputList": -977,
    "powerGridList": 1358.3,
    "socList": 27.1,
    "netLoadList": 2335.3,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "16:07",
    "storageOutputList": -976.5,
    "powerGridList": 1246.1,
    "socList": 26.4,
    "netLoadList": 2222.6,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "16:08",
    "storageOutputList": -976.5,
    "powerGridList": 1155.4,
    "socList": 25.6,
    "netLoadList": 2131.9,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "16:09",
    "storageOutputList": -976.5,
    "powerGridList": 1324.3,
    "socList": 24.8,
    "netLoadList": 2300.8,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "16:10",
    "storageOutputList": -978,
    "powerGridList": 1132.7,
    "socList": 24,
    "netLoadList": 2110.7,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "16:11",
    "storageOutputList": -976.5,
    "powerGridList": 1246.1,
    "socList": 22.8,
    "netLoadList": 2222.6,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "16:12",
    "storageOutputList": -991.5,
    "powerGridList": 1465.4,
    "socList": 22,
    "netLoadList": 2456.9,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "16:13",
    "storageOutputList": -993,
    "powerGridList": 1384.7,
    "socList": 21.2,
    "netLoadList": 2377.7,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "16:14",
    "storageOutputList": -992,
    "powerGridList": 1330.6,
    "socList": 20.4,
    "netLoadList": 2322.6,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "16:15",
    "storageOutputList": -991.5,
    "powerGridList": 1237.3,
    "socList": 19.6,
    "netLoadList": 2228.8,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "16:16",
    "storageOutputList": -992,
    "powerGridList": 1309.1,
    "socList": 18.8,
    "netLoadList": 2301.1,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "16:17",
    "storageOutputList": -992.5,
    "powerGridList": 1152.9,
    "socList": 17.7,
    "netLoadList": 2145.4,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "16:18",
    "storageOutputList": -991.5,
    "powerGridList": 999.2,
    "socList": 16.9,
    "netLoadList": 1990.7,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "16:19",
    "storageOutputList": -991.5,
    "powerGridList": 1067.2,
    "socList": 16.1,
    "netLoadList": 2058.7,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "16:20",
    "storageOutputList": -975.5,
    "powerGridList": 1108.8,
    "socList": 15.3,
    "netLoadList": 2084.3,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "16:21",
    "storageOutputList": -928,
    "powerGridList": 1281.4,
    "socList": 14.1,
    "netLoadList": 2209.4,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "16:22",
    "storageOutputList": -847,
    "powerGridList": 1244.9,
    "socList": 13.7,
    "netLoadList": 2091.9,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "16:23",
    "storageOutputList": -768,
    "powerGridList": 1273.9,
    "socList": 12.9,
    "netLoadList": 2041.9,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "16:24",
    "storageOutputList": -688.5,
    "powerGridList": 1280.2,
    "socList": 12.1,
    "netLoadList": 1968.7,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "16:25",
    "storageOutputList": -648.5,
    "powerGridList": 1217.2,
    "socList": 11.7,
    "netLoadList": 1865.7,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "16:26",
    "storageOutputList": -579,
    "powerGridList": 1253.7,
    "socList": 11,
    "netLoadList": 1832.7,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "16:27",
    "storageOutputList": -539.5,
    "powerGridList": 1404.9,
    "socList": 10.6,
    "netLoadList": 1944.4,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "16:28",
    "storageOutputList": -499.5,
    "powerGridList": 1364.6,
    "socList": 10.2,
    "netLoadList": 1864.1,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "16:29",
    "storageOutputList": -459.5,
    "powerGridList": 1330.6,
    "socList": 9.8,
    "netLoadList": 1790.1,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "16:30",
    "storageOutputList": -419.5,
    "powerGridList": 1384.7,
    "socList": 9.4,
    "netLoadList": 1804.2,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "16:31",
    "storageOutputList": -379.5,
    "powerGridList": 1460.3,
    "socList": 9,
    "netLoadList": 1839.8,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "16:32",
    "storageOutputList": -339.5,
    "powerGridList": 1396.1,
    "socList": 8.6,
    "netLoadList": 1735.6,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "16:33",
    "storageOutputList": -299,
    "powerGridList": 1441.4,
    "socList": 8.2,
    "netLoadList": 1740.4,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "16:34",
    "storageOutputList": -300,
    "powerGridList": 1527.1,
    "socList": 7.8,
    "netLoadList": 1827.1,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "16:35",
    "storageOutputList": -260,
    "powerGridList": 1409.9,
    "socList": 7.8,
    "netLoadList": 1669.9,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "16:36",
    "storageOutputList": -220.5,
    "powerGridList": 1475.5,
    "socList": 7.4,
    "netLoadList": 1696,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "16:37",
    "storageOutputList": -220.5,
    "powerGridList": 1379.7,
    "socList": 7.4,
    "netLoadList": 1600.2,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "16:38",
    "storageOutputList": -170,
    "powerGridList": 1505.7,
    "socList": 6.9,
    "netLoadList": 1675.7,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "16:39",
    "storageOutputList": -185,
    "powerGridList": 1648.1,
    "socList": 6.9,
    "netLoadList": 1833.1,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "16:40",
    "storageOutputList": -184.5,
    "powerGridList": 1498.1,
    "socList": 6.5,
    "netLoadList": 1682.6,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "16:41",
    "storageOutputList": -145,
    "powerGridList": 1451.5,
    "socList": 6.5,
    "netLoadList": 1596.5,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "16:42",
    "storageOutputList": -145,
    "powerGridList": 1450.3,
    "socList": 6.5,
    "netLoadList": 1595.3,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "16:43",
    "storageOutputList": -145,
    "powerGridList": 1407.4,
    "socList": 6.1,
    "netLoadList": 1552.4,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "16:44",
    "storageOutputList": -104,
    "powerGridList": 1456.6,
    "socList": 6.1,
    "netLoadList": 1560.6,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "16:45",
    "storageOutputList": -104,
    "powerGridList": 1646.8,
    "socList": 6.1,
    "netLoadList": 1750.8,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "16:46",
    "storageOutputList": -103.5,
    "powerGridList": 1679.6,
    "socList": 6.1,
    "netLoadList": 1783.1,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "16:47",
    "storageOutputList": -104,
    "powerGridList": 1461.6,
    "socList": 5.8,
    "netLoadList": 1565.6,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "16:48",
    "storageOutputList": -74.5,
    "powerGridList": 1485.5,
    "socList": 5.8,
    "netLoadList": 1560,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "16:49",
    "storageOutputList": -74.5,
    "powerGridList": 1532.2,
    "socList": 5.8,
    "netLoadList": 1606.7,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "16:50",
    "storageOutputList": -74.5,
    "powerGridList": 1597.7,
    "socList": 5.8,
    "netLoadList": 1672.2,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "16:51",
    "storageOutputList": -58,
    "powerGridList": 1512,
    "socList": 5.8,
    "netLoadList": 1570,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "16:52",
    "storageOutputList": -59.5,
    "powerGridList": 1465.4,
    "socList": 5.8,
    "netLoadList": 1524.9,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "16:53",
    "storageOutputList": -20,
    "powerGridList": 1538.5,
    "socList": 5.4,
    "netLoadList": 1558.5,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "16:54",
    "storageOutputList": -20.5,
    "powerGridList": 1461.6,
    "socList": 5.4,
    "netLoadList": 1482.1,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "16:55",
    "storageOutputList": -20.5,
    "powerGridList": 1450.3,
    "socList": 5.4,
    "netLoadList": 1470.8,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "16:56",
    "storageOutputList": -20.5,
    "powerGridList": 1661.9,
    "socList": 5.4,
    "netLoadList": 1682.4,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "16:57",
    "storageOutputList": -20.5,
    "powerGridList": 1541,
    "socList": 5.4,
    "netLoadList": 1561.5,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "16:58",
    "storageOutputList": -20.5,
    "powerGridList": 1592.6,
    "socList": 5.4,
    "netLoadList": 1613.1,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "16:59",
    "storageOutputList": -34.5,
    "powerGridList": 1360.8,
    "socList": 5.4,
    "netLoadList": 1395.3,
    "runningLlanList": -1000,
    "priceList": 1.38,
    "aaa": "尖"
   },
   {
    "dateList": "17:00",
    "storageOutputList": -35,
    "powerGridList": 1401.1,
    "socList": 5.4,
    "netLoadList": 1436.1,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "17:01",
    "storageOutputList": -34.5,
    "powerGridList": 1381,
    "socList": 5.4,
    "netLoadList": 1415.5,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "17:02",
    "storageOutputList": -34.5,
    "powerGridList": 1489.3,
    "socList": 5.4,
    "netLoadList": 1523.8,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "17:03",
    "storageOutputList": -35,
    "powerGridList": 1528.4,
    "socList": 5.4,
    "netLoadList": 1563.4,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "17:04",
    "storageOutputList": 5,
    "powerGridList": 1472.9,
    "socList": 4.9,
    "netLoadList": 1467.9,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "17:05",
    "storageOutputList": 4,
    "powerGridList": 1389.8,
    "socList": 4.9,
    "netLoadList": 1385.8,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "17:06",
    "storageOutputList": 4,
    "powerGridList": 1415,
    "socList": 4.9,
    "netLoadList": 1411,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "17:07",
    "storageOutputList": 4,
    "powerGridList": 1299.1,
    "socList": 4.9,
    "netLoadList": 1295.1,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "17:08",
    "storageOutputList": 4,
    "powerGridList": 1318,
    "socList": 4.9,
    "netLoadList": 1314,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "17:09",
    "storageOutputList": 4,
    "powerGridList": 1466.6,
    "socList": 4.9,
    "netLoadList": 1462.6,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "17:10",
    "storageOutputList": 4,
    "powerGridList": 1372.1,
    "socList": 4.9,
    "netLoadList": 1368.1,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "17:11",
    "storageOutputList": 4,
    "powerGridList": 1285.2,
    "socList": 4.9,
    "netLoadList": 1281.2,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "17:12",
    "storageOutputList": 4,
    "powerGridList": 1357,
    "socList": 4.9,
    "netLoadList": 1353,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "17:13",
    "storageOutputList": 4,
    "powerGridList": 1314.2,
    "socList": 4.9,
    "netLoadList": 1310.2,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "17:14",
    "storageOutputList": 4,
    "powerGridList": 1272.6,
    "socList": 4.9,
    "netLoadList": 1268.6,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "17:15",
    "storageOutputList": 4,
    "powerGridList": 1488.1,
    "socList": 4.9,
    "netLoadList": 1484.1,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "17:16",
    "storageOutputList": 4,
    "powerGridList": 1404.9,
    "socList": 4.9,
    "netLoadList": 1400.9,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "17:17",
    "storageOutputList": 4,
    "powerGridList": 1406.2,
    "socList": 4.9,
    "netLoadList": 1402.2,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "17:18",
    "storageOutputList": 4,
    "powerGridList": 1417.5,
    "socList": 4.9,
    "netLoadList": 1413.5,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "17:19",
    "storageOutputList": 4,
    "powerGridList": 1563.7,
    "socList": 4.9,
    "netLoadList": 1559.7,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "17:20",
    "storageOutputList": 22,
    "powerGridList": 1278.9,
    "socList": 4.9,
    "netLoadList": 1256.9,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "17:21",
    "storageOutputList": 19,
    "powerGridList": 1364.6,
    "socList": 4.9,
    "netLoadList": 1345.6,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "17:22",
    "storageOutputList": 18.5,
    "powerGridList": 1241.1,
    "socList": 4.9,
    "netLoadList": 1222.6,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "17:23",
    "storageOutputList": 18.5,
    "powerGridList": 1421.3,
    "socList": 4.9,
    "netLoadList": 1402.8,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "17:24",
    "storageOutputList": 1.5,
    "powerGridList": 1426.3,
    "socList": 4.9,
    "netLoadList": 1424.8,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "17:25",
    "storageOutputList": 1.5,
    "powerGridList": 1281.4,
    "socList": 4.9,
    "netLoadList": 1279.9,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "17:26",
    "storageOutputList": 1.5,
    "powerGridList": 1200.8,
    "socList": 4.9,
    "netLoadList": 1199.3,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "17:27",
    "storageOutputList": 1.5,
    "powerGridList": 1287.7,
    "socList": 4.9,
    "netLoadList": 1286.2,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "17:28",
    "storageOutputList": 1.5,
    "powerGridList": 1202,
    "socList": 4.9,
    "netLoadList": 1200.5,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "17:29",
    "storageOutputList": 1.5,
    "powerGridList": 1403.6,
    "socList": 4.9,
    "netLoadList": 1402.1,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "17:30",
    "storageOutputList": 4,
    "powerGridList": 1377.2,
    "socList": 4.9,
    "netLoadList": 1373.2,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "17:31",
    "storageOutputList": 4,
    "powerGridList": 1260,
    "socList": 4.9,
    "netLoadList": 1256,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "17:32",
    "storageOutputList": 4,
    "powerGridList": 1282.7,
    "socList": 4.9,
    "netLoadList": 1278.7,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "17:33",
    "storageOutputList": 4,
    "powerGridList": 1404.9,
    "socList": 4.9,
    "netLoadList": 1400.9,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "17:34",
    "storageOutputList": 4,
    "powerGridList": 1296.5,
    "socList": 4.9,
    "netLoadList": 1292.5,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "17:35",
    "storageOutputList": 4,
    "powerGridList": 1276.4,
    "socList": 4.9,
    "netLoadList": 1272.4,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "17:36",
    "storageOutputList": 4,
    "powerGridList": 1205.8,
    "socList": 4.9,
    "netLoadList": 1201.8,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "17:37",
    "storageOutputList": 4,
    "powerGridList": 1375.9,
    "socList": 4.9,
    "netLoadList": 1371.9,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "17:38",
    "storageOutputList": 4,
    "powerGridList": 1220.9,
    "socList": 4.9,
    "netLoadList": 1216.9,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "17:39",
    "storageOutputList": 4,
    "powerGridList": 1213.4,
    "socList": 4.9,
    "netLoadList": 1209.4,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "17:40",
    "storageOutputList": 4,
    "powerGridList": 1296.5,
    "socList": 4.9,
    "netLoadList": 1292.5,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "17:41",
    "storageOutputList": 4,
    "powerGridList": 1338.1,
    "socList": 4.9,
    "netLoadList": 1334.1,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "17:42",
    "storageOutputList": 4,
    "powerGridList": 1181.9,
    "socList": 4.9,
    "netLoadList": 1177.9,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "17:43",
    "storageOutputList": 4,
    "powerGridList": 1255,
    "socList": 4.9,
    "netLoadList": 1251,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "17:44",
    "storageOutputList": 4,
    "powerGridList": 1428.8,
    "socList": 4.9,
    "netLoadList": 1424.8,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "17:45",
    "storageOutputList": 4.5,
    "powerGridList": 1205.8,
    "socList": 4.9,
    "netLoadList": 1201.3,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "17:46",
    "storageOutputList": 4,
    "powerGridList": 1183.1,
    "socList": 4.9,
    "netLoadList": 1179.1,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "17:47",
    "storageOutputList": 4,
    "powerGridList": 1210.9,
    "socList": 4.9,
    "netLoadList": 1206.9,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "17:48",
    "storageOutputList": 4,
    "powerGridList": 1440.2,
    "socList": 4.9,
    "netLoadList": 1436.2,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "17:49",
    "storageOutputList": 4,
    "powerGridList": 825.3,
    "socList": 4.9,
    "netLoadList": 821.3,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "17:50",
    "storageOutputList": 1.5,
    "powerGridList": 810.2,
    "socList": 4.9,
    "netLoadList": 808.7,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "17:51",
    "storageOutputList": 1.5,
    "powerGridList": 808.9,
    "socList": 4.9,
    "netLoadList": 807.4,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "17:52",
    "storageOutputList": 1.5,
    "powerGridList": 1006.7,
    "socList": 4.9,
    "netLoadList": 1005.2,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "17:53",
    "storageOutputList": 1.5,
    "powerGridList": 841.7,
    "socList": 4.9,
    "netLoadList": 840.2,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "17:54",
    "storageOutputList": 1.5,
    "powerGridList": 827.8,
    "socList": 4.9,
    "netLoadList": 826.3,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "17:55",
    "storageOutputList": 1.5,
    "powerGridList": 986.6,
    "socList": 4.9,
    "netLoadList": 985.1,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "17:56",
    "storageOutputList": 1.5,
    "powerGridList": 608.6,
    "socList": 4.9,
    "netLoadList": 607.1,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "17:57",
    "storageOutputList": 1.5,
    "powerGridList": 482.6,
    "socList": 4.9,
    "netLoadList": 481.1,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "17:58",
    "storageOutputList": 1.5,
    "powerGridList": 451.1,
    "socList": 4.9,
    "netLoadList": 449.6,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "17:59",
    "storageOutputList": 1.5,
    "powerGridList": 781.2,
    "socList": 4.9,
    "netLoadList": 779.7,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "18:00",
    "storageOutputList": 1.5,
    "powerGridList": 549.4,
    "socList": 4.9,
    "netLoadList": 547.9,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "18:01",
    "storageOutputList": 1.5,
    "powerGridList": 645.1,
    "socList": 4.9,
    "netLoadList": 643.6,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "18:02",
    "storageOutputList": 1.5,
    "powerGridList": 553.1,
    "socList": 4.9,
    "netLoadList": 551.6,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "18:03",
    "storageOutputList": 1.5,
    "powerGridList": 727,
    "socList": 4.9,
    "netLoadList": 725.5,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "18:04",
    "storageOutputList": 1.5,
    "powerGridList": 695.5,
    "socList": 4.9,
    "netLoadList": 694,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "18:05",
    "storageOutputList": 1.5,
    "powerGridList": 560.7,
    "socList": 4.9,
    "netLoadList": 559.2,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "18:06",
    "storageOutputList": 1.5,
    "powerGridList": 672.8,
    "socList": 4.9,
    "netLoadList": 671.3,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "18:07",
    "storageOutputList": 1.5,
    "powerGridList": 593.5,
    "socList": 4.9,
    "netLoadList": 592,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "18:08",
    "storageOutputList": 1.5,
    "powerGridList": 826.6,
    "socList": 4.9,
    "netLoadList": 825.1,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "18:09",
    "storageOutputList": 1.5,
    "powerGridList": 573.3,
    "socList": 4.9,
    "netLoadList": 571.8,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "18:10",
    "storageOutputList": 2,
    "powerGridList": 695.5,
    "socList": 4.9,
    "netLoadList": 693.5,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "18:11",
    "storageOutputList": 1.5,
    "powerGridList": 743.4,
    "socList": 4.9,
    "netLoadList": 741.9,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "18:12",
    "storageOutputList": 1.5,
    "powerGridList": 788.8,
    "socList": 4.9,
    "netLoadList": 787.3,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "18:13",
    "storageOutputList": 1.5,
    "powerGridList": 1042,
    "socList": 4.9,
    "netLoadList": 1040.5,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "18:14",
    "storageOutputList": 1.5,
    "powerGridList": 972.7,
    "socList": 4.9,
    "netLoadList": 971.2,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "18:15",
    "storageOutputList": 1.5,
    "powerGridList": 965.2,
    "socList": 4.9,
    "netLoadList": 963.7,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "18:16",
    "storageOutputList": 1.5,
    "powerGridList": 1127.7,
    "socList": 4.9,
    "netLoadList": 1126.2,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "18:17",
    "storageOutputList": 1.5,
    "powerGridList": 1135.3,
    "socList": 4.9,
    "netLoadList": 1133.8,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "18:18",
    "storageOutputList": 1.5,
    "powerGridList": 1033.2,
    "socList": 4.9,
    "netLoadList": 1031.7,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "18:19",
    "storageOutputList": 1.5,
    "powerGridList": 1126.4,
    "socList": 4.9,
    "netLoadList": 1124.9,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "18:20",
    "storageOutputList": 1.5,
    "powerGridList": 1489.3,
    "socList": 4.9,
    "netLoadList": 1487.8,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "18:21",
    "storageOutputList": 1.5,
    "powerGridList": 1833.3,
    "socList": 4.9,
    "netLoadList": 1831.8,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "18:22",
    "storageOutputList": 1.5,
    "powerGridList": 1488.1,
    "socList": 4.9,
    "netLoadList": 1486.6,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "18:23",
    "storageOutputList": 1.5,
    "powerGridList": 1475.5,
    "socList": 4.9,
    "netLoadList": 1474,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "18:24",
    "storageOutputList": 1.5,
    "powerGridList": 1207.1,
    "socList": 4.9,
    "netLoadList": 1205.6,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "18:25",
    "storageOutputList": 1.5,
    "powerGridList": 1068.5,
    "socList": 4.9,
    "netLoadList": 1067,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "18:26",
    "storageOutputList": 1.5,
    "powerGridList": 1015.6,
    "socList": 4.9,
    "netLoadList": 1014.1,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "18:27",
    "storageOutputList": 1.5,
    "powerGridList": 851.8,
    "socList": 4.9,
    "netLoadList": 850.3,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "18:28",
    "storageOutputList": 1.5,
    "powerGridList": 1059.7,
    "socList": 4.9,
    "netLoadList": 1058.2,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "18:29",
    "storageOutputList": 1.5,
    "powerGridList": 1089.9,
    "socList": 4.9,
    "netLoadList": 1088.4,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "18:30",
    "storageOutputList": 1.5,
    "powerGridList": 985.3,
    "socList": 4.9,
    "netLoadList": 983.8,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "18:31",
    "storageOutputList": 1.5,
    "powerGridList": 1590.1,
    "socList": 4.9,
    "netLoadList": 1588.6,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "18:32",
    "storageOutputList": 1.5,
    "powerGridList": 1505.7,
    "socList": 4.9,
    "netLoadList": 1504.2,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "18:33",
    "storageOutputList": 1.5,
    "powerGridList": 1386,
    "socList": 4.9,
    "netLoadList": 1384.5,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "18:34",
    "storageOutputList": 1.5,
    "powerGridList": 1333.1,
    "socList": 4.9,
    "netLoadList": 1331.6,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "18:35",
    "storageOutputList": 1.5,
    "powerGridList": 1311.7,
    "socList": 4.9,
    "netLoadList": 1310.2,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "18:36",
    "storageOutputList": 1.5,
    "powerGridList": 1464.1,
    "socList": 4.9,
    "netLoadList": 1462.6,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "18:37",
    "storageOutputList": 1.5,
    "powerGridList": 1372.1,
    "socList": 4.9,
    "netLoadList": 1370.6,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "18:38",
    "storageOutputList": 1.5,
    "powerGridList": 1194.5,
    "socList": 4.9,
    "netLoadList": 1193,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "18:39",
    "storageOutputList": 1.5,
    "powerGridList": 1268.8,
    "socList": 4.9,
    "netLoadList": 1267.3,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "18:40",
    "storageOutputList": 2,
    "powerGridList": 1375.9,
    "socList": 4.9,
    "netLoadList": 1373.9,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "18:41",
    "storageOutputList": 1.5,
    "powerGridList": 1328,
    "socList": 4.9,
    "netLoadList": 1326.5,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "18:42",
    "storageOutputList": 1.5,
    "powerGridList": 1220.9,
    "socList": 4.9,
    "netLoadList": 1219.4,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "18:43",
    "storageOutputList": 1.5,
    "powerGridList": 1505.7,
    "socList": 4.9,
    "netLoadList": 1504.2,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "18:44",
    "storageOutputList": 1.5,
    "powerGridList": 1391,
    "socList": 4.9,
    "netLoadList": 1389.5,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "18:45",
    "storageOutputList": 2,
    "powerGridList": 1571.2,
    "socList": 4.9,
    "netLoadList": 1569.2,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "18:46",
    "storageOutputList": 1.5,
    "powerGridList": 1408.7,
    "socList": 4.9,
    "netLoadList": 1407.2,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "18:47",
    "storageOutputList": 1.5,
    "powerGridList": 1483,
    "socList": 4.9,
    "netLoadList": 1481.5,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "18:48",
    "storageOutputList": 1.5,
    "powerGridList": 1437.7,
    "socList": 4.9,
    "netLoadList": 1436.2,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "18:49",
    "storageOutputList": 1.5,
    "powerGridList": 1534.7,
    "socList": 4.9,
    "netLoadList": 1533.2,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "18:50",
    "storageOutputList": 1.5,
    "powerGridList": 1510.7,
    "socList": 4.9,
    "netLoadList": 1509.2,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "18:51",
    "storageOutputList": 1.5,
    "powerGridList": 1650.6,
    "socList": 4.9,
    "netLoadList": 1649.1,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "18:52",
    "storageOutputList": 1.5,
    "powerGridList": 1756.4,
    "socList": 4.9,
    "netLoadList": 1754.9,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "18:53",
    "storageOutputList": 1.5,
    "powerGridList": 1578.8,
    "socList": 4.9,
    "netLoadList": 1577.3,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "18:54",
    "storageOutputList": 1.5,
    "powerGridList": 1466.6,
    "socList": 4.9,
    "netLoadList": 1465.1,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "18:55",
    "storageOutputList": 2,
    "powerGridList": 1590.1,
    "socList": 4.9,
    "netLoadList": 1588.1,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "18:56",
    "storageOutputList": 1.5,
    "powerGridList": 1741.3,
    "socList": 4.9,
    "netLoadList": 1739.8,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "18:57",
    "storageOutputList": 1.5,
    "powerGridList": 1585.1,
    "socList": 4.9,
    "netLoadList": 1583.6,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "18:58",
    "storageOutputList": 1.5,
    "powerGridList": 1631.7,
    "socList": 4.9,
    "netLoadList": 1630.2,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "18:59",
    "storageOutputList": 1.5,
    "powerGridList": 1721.2,
    "socList": 4.9,
    "netLoadList": 1719.7,
    "runningLlanList": -1000,
    "priceList": 1.13,
    "aaa": "峰"
   },
   {
    "dateList": "19:00",
    "storageOutputList": 1.5,
    "powerGridList": 1566.2,
    "socList": 4.9,
    "netLoadList": 1564.7,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "19:01",
    "storageOutputList": 1.5,
    "powerGridList": 1553.6,
    "socList": 4.9,
    "netLoadList": 1552.1,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "19:02",
    "storageOutputList": 1.5,
    "powerGridList": 1629.2,
    "socList": 4.9,
    "netLoadList": 1627.7,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "19:03",
    "storageOutputList": 1.5,
    "powerGridList": 1669.5,
    "socList": 4.9,
    "netLoadList": 1668,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "19:04",
    "storageOutputList": 1.5,
    "powerGridList": 1620.4,
    "socList": 4.9,
    "netLoadList": 1618.9,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "19:05",
    "storageOutputList": 2,
    "powerGridList": 1478,
    "socList": 4.9,
    "netLoadList": 1476,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "19:06",
    "storageOutputList": 1.5,
    "powerGridList": 1537.2,
    "socList": 4.9,
    "netLoadList": 1535.7,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "19:07",
    "storageOutputList": 1.5,
    "powerGridList": 1534.7,
    "socList": 4.9,
    "netLoadList": 1533.2,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "19:08",
    "storageOutputList": 1.5,
    "powerGridList": 1810.6,
    "socList": 4.9,
    "netLoadList": 1809.1,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "19:09",
    "storageOutputList": 1.5,
    "powerGridList": 1469.2,
    "socList": 4.9,
    "netLoadList": 1467.7,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "19:10",
    "storageOutputList": 1.5,
    "powerGridList": 1430.1,
    "socList": 4.9,
    "netLoadList": 1428.6,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "19:11",
    "storageOutputList": 1.5,
    "powerGridList": 1607.8,
    "socList": 4.9,
    "netLoadList": 1606.3,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "19:12",
    "storageOutputList": 1.5,
    "powerGridList": 1854.7,
    "socList": 4.9,
    "netLoadList": 1853.2,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "19:13",
    "storageOutputList": 1.5,
    "powerGridList": 1616.6,
    "socList": 4.9,
    "netLoadList": 1615.1,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "19:14",
    "storageOutputList": 1.5,
    "powerGridList": 1713.6,
    "socList": 4.9,
    "netLoadList": 1712.1,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "19:15",
    "storageOutputList": 1.5,
    "powerGridList": 1762.7,
    "socList": 4.9,
    "netLoadList": 1761.2,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "19:16",
    "storageOutputList": 1.5,
    "powerGridList": 1944.2,
    "socList": 4.9,
    "netLoadList": 1942.7,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "19:17",
    "storageOutputList": 1.5,
    "powerGridList": 1638,
    "socList": 4.9,
    "netLoadList": 1636.5,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "19:18",
    "storageOutputList": 1.5,
    "powerGridList": 1609,
    "socList": 4.9,
    "netLoadList": 1607.5,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "19:19",
    "storageOutputList": 1.5,
    "powerGridList": 1674.5,
    "socList": 4.9,
    "netLoadList": 1673,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "19:20",
    "storageOutputList": 1.5,
    "powerGridList": 2063.9,
    "socList": 4.9,
    "netLoadList": 2062.4,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "19:21",
    "storageOutputList": 1.5,
    "powerGridList": 1936.6,
    "socList": 4.9,
    "netLoadList": 1935.1,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "19:22",
    "storageOutputList": 1.5,
    "powerGridList": 1859.8,
    "socList": 4.9,
    "netLoadList": 1858.3,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "19:23",
    "storageOutputList": 1.5,
    "powerGridList": 1903.9,
    "socList": 4.9,
    "netLoadList": 1902.4,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "19:24",
    "storageOutputList": 1.5,
    "powerGridList": 1922.8,
    "socList": 4.9,
    "netLoadList": 1921.3,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "19:25",
    "storageOutputList": 1.5,
    "powerGridList": 1897.6,
    "socList": 4.9,
    "netLoadList": 1896.1,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "19:26",
    "storageOutputList": 1.5,
    "powerGridList": 1869.8,
    "socList": 4.9,
    "netLoadList": 1868.3,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "19:27",
    "storageOutputList": 1.5,
    "powerGridList": 1867.3,
    "socList": 4.9,
    "netLoadList": 1865.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "19:28",
    "storageOutputList": 1.5,
    "powerGridList": 1882.4,
    "socList": 4.9,
    "netLoadList": 1880.9,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "19:29",
    "storageOutputList": 1.5,
    "powerGridList": 1930.3,
    "socList": 4.9,
    "netLoadList": 1928.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "19:30",
    "storageOutputList": 1.5,
    "powerGridList": 2099.2,
    "socList": 4.9,
    "netLoadList": 2097.7,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "19:31",
    "storageOutputList": 1.5,
    "powerGridList": 2017.3,
    "socList": 4.9,
    "netLoadList": 2015.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "19:32",
    "storageOutputList": 1.5,
    "powerGridList": 1976.9,
    "socList": 4.9,
    "netLoadList": 1975.4,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "19:33",
    "storageOutputList": 1.5,
    "powerGridList": 1813.1,
    "socList": 4.9,
    "netLoadList": 1811.6,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "19:34",
    "storageOutputList": 1.5,
    "powerGridList": 1970.6,
    "socList": 4.9,
    "netLoadList": 1969.1,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "19:35",
    "storageOutputList": 1.5,
    "powerGridList": 2050,
    "socList": 4.9,
    "netLoadList": 2048.5,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "19:36",
    "storageOutputList": 1.5,
    "powerGridList": 1787.9,
    "socList": 4.9,
    "netLoadList": 1786.4,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "19:37",
    "storageOutputList": 1.5,
    "powerGridList": 1955.5,
    "socList": 4.9,
    "netLoadList": 1954,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "19:38",
    "storageOutputList": 1.5,
    "powerGridList": 1936.6,
    "socList": 4.9,
    "netLoadList": 1935.1,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "19:39",
    "storageOutputList": 1.5,
    "powerGridList": 2167.2,
    "socList": 4.9,
    "netLoadList": 2165.7,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "19:40",
    "storageOutputList": 1.5,
    "powerGridList": 1950.5,
    "socList": 4.9,
    "netLoadList": 1949,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "19:41",
    "storageOutputList": 1.5,
    "powerGridList": 1873.6,
    "socList": 4.9,
    "netLoadList": 1872.1,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "19:42",
    "storageOutputList": 1.5,
    "powerGridList": 2021,
    "socList": 4.9,
    "netLoadList": 2019.5,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "19:43",
    "storageOutputList": 1.5,
    "powerGridList": 1919,
    "socList": 4.9,
    "netLoadList": 1917.5,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "19:44",
    "storageOutputList": 1.5,
    "powerGridList": 2145.8,
    "socList": 4.9,
    "netLoadList": 2144.3,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "19:45",
    "storageOutputList": 1.5,
    "powerGridList": 1983.2,
    "socList": 4.9,
    "netLoadList": 1981.7,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "19:46",
    "storageOutputList": 1.5,
    "powerGridList": 1956.8,
    "socList": 4.9,
    "netLoadList": 1955.3,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "19:47",
    "storageOutputList": 1.5,
    "powerGridList": 2143.3,
    "socList": 4.9,
    "netLoadList": 2141.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "19:48",
    "storageOutputList": 1.5,
    "powerGridList": 1930.3,
    "socList": 4.9,
    "netLoadList": 1928.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "19:49",
    "storageOutputList": 1.5,
    "powerGridList": 2000.9,
    "socList": 4.9,
    "netLoadList": 1999.4,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "19:50",
    "storageOutputList": 1.5,
    "powerGridList": 2109.2,
    "socList": 4.9,
    "netLoadList": 2107.7,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "19:51",
    "storageOutputList": 1.5,
    "powerGridList": 2085.3,
    "socList": 4.9,
    "netLoadList": 2083.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "19:52",
    "storageOutputList": 1.5,
    "powerGridList": 2179.8,
    "socList": 4.9,
    "netLoadList": 2178.3,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "19:53",
    "storageOutputList": 1.5,
    "powerGridList": 2075.2,
    "socList": 4.9,
    "netLoadList": 2073.7,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "19:54",
    "storageOutputList": 1.5,
    "powerGridList": 2105.5,
    "socList": 4.9,
    "netLoadList": 2104,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "19:55",
    "storageOutputList": 1.5,
    "powerGridList": 2005.9,
    "socList": 4.9,
    "netLoadList": 2004.4,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "19:56",
    "storageOutputList": 1.5,
    "powerGridList": 2137,
    "socList": 4.9,
    "netLoadList": 2135.5,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "19:57",
    "storageOutputList": 1.5,
    "powerGridList": 2005.9,
    "socList": 4.9,
    "netLoadList": 2004.4,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "19:58",
    "storageOutputList": 1.5,
    "powerGridList": 1876.1,
    "socList": 4.9,
    "netLoadList": 1874.6,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "19:59",
    "storageOutputList": 1.5,
    "powerGridList": 2171,
    "socList": 4.9,
    "netLoadList": 2169.5,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "20:00",
    "storageOutputList": 1.5,
    "powerGridList": 1931.6,
    "socList": 4.9,
    "netLoadList": 1930.1,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "20:01",
    "storageOutputList": 1.5,
    "powerGridList": 1895,
    "socList": 4.9,
    "netLoadList": 1893.5,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "20:02",
    "storageOutputList": 1.5,
    "powerGridList": 2032.4,
    "socList": 4.9,
    "netLoadList": 2030.9,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "20:03",
    "storageOutputList": 1.5,
    "powerGridList": 1891.3,
    "socList": 4.9,
    "netLoadList": 1889.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "20:04",
    "storageOutputList": 1.5,
    "powerGridList": 1925.3,
    "socList": 4.9,
    "netLoadList": 1923.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "20:05",
    "storageOutputList": 1.5,
    "powerGridList": 2042.5,
    "socList": 4.9,
    "netLoadList": 2041,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "20:06",
    "storageOutputList": 1.5,
    "powerGridList": 2019.8,
    "socList": 4.9,
    "netLoadList": 2018.3,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "20:07",
    "storageOutputList": 1.5,
    "powerGridList": 1877.4,
    "socList": 4.9,
    "netLoadList": 1875.9,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "20:08",
    "storageOutputList": 1.5,
    "powerGridList": 1951.7,
    "socList": 4.9,
    "netLoadList": 1950.2,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "20:09",
    "storageOutputList": 1.5,
    "powerGridList": 1940.4,
    "socList": 4.9,
    "netLoadList": 1938.9,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "20:10",
    "storageOutputList": 1.5,
    "powerGridList": 1896.3,
    "socList": 4.9,
    "netLoadList": 1894.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "20:11",
    "storageOutputList": 1.5,
    "powerGridList": 1949.2,
    "socList": 4.9,
    "netLoadList": 1947.7,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "20:12",
    "storageOutputList": 1.5,
    "powerGridList": 1948,
    "socList": 4.9,
    "netLoadList": 1946.5,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "20:13",
    "storageOutputList": 1.5,
    "powerGridList": 1997.1,
    "socList": 4.9,
    "netLoadList": 1995.6,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "20:14",
    "storageOutputList": 1.5,
    "powerGridList": 2027.3,
    "socList": 4.9,
    "netLoadList": 2025.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "20:15",
    "storageOutputList": 1.5,
    "powerGridList": 2047.5,
    "socList": 4.9,
    "netLoadList": 2046,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "20:16",
    "storageOutputList": 1.5,
    "powerGridList": 1818.2,
    "socList": 4.9,
    "netLoadList": 1816.7,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "20:17",
    "storageOutputList": 1.5,
    "powerGridList": 1917.7,
    "socList": 4.9,
    "netLoadList": 1916.2,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "20:18",
    "storageOutputList": 1.5,
    "powerGridList": 1990.8,
    "socList": 4.9,
    "netLoadList": 1989.3,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "20:19",
    "storageOutputList": 1.5,
    "powerGridList": 2042.5,
    "socList": 4.9,
    "netLoadList": 2041,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "20:20",
    "storageOutputList": 1.5,
    "powerGridList": 1919,
    "socList": 4.9,
    "netLoadList": 1917.5,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "20:21",
    "storageOutputList": 1.5,
    "powerGridList": 1975.7,
    "socList": 4.9,
    "netLoadList": 1974.2,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "20:22",
    "storageOutputList": 1.5,
    "powerGridList": 1963.1,
    "socList": 4.9,
    "netLoadList": 1961.6,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "20:23",
    "storageOutputList": 1.5,
    "powerGridList": 1857.2,
    "socList": 4.9,
    "netLoadList": 1855.7,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "20:24",
    "storageOutputList": 1.5,
    "powerGridList": 2051.3,
    "socList": 4.9,
    "netLoadList": 2049.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "20:25",
    "storageOutputList": 1.5,
    "powerGridList": 1980.7,
    "socList": 4.9,
    "netLoadList": 1979.2,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "20:26",
    "storageOutputList": 1.5,
    "powerGridList": 1963.1,
    "socList": 4.9,
    "netLoadList": 1961.6,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "20:27",
    "storageOutputList": 1.5,
    "powerGridList": 1895,
    "socList": 4.9,
    "netLoadList": 1893.5,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "20:28",
    "storageOutputList": 1.5,
    "powerGridList": 1907.6,
    "socList": 4.9,
    "netLoadList": 1906.1,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "20:29",
    "storageOutputList": 1.5,
    "powerGridList": 1939.1,
    "socList": 4.9,
    "netLoadList": 1937.6,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "20:30",
    "storageOutputList": 1.5,
    "powerGridList": 1898.8,
    "socList": 4.9,
    "netLoadList": 1897.3,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "20:31",
    "storageOutputList": 1.5,
    "powerGridList": 1903.9,
    "socList": 4.9,
    "netLoadList": 1902.4,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "20:32",
    "storageOutputList": 1.5,
    "powerGridList": 1959.3,
    "socList": 4.9,
    "netLoadList": 1957.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "20:33",
    "storageOutputList": 1.5,
    "powerGridList": 1881.2,
    "socList": 4.9,
    "netLoadList": 1879.7,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "20:34",
    "storageOutputList": 1.5,
    "powerGridList": 1819.4,
    "socList": 4.9,
    "netLoadList": 1817.9,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "20:35",
    "storageOutputList": 1.5,
    "powerGridList": 1876.1,
    "socList": 4.9,
    "netLoadList": 1874.6,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "20:36",
    "storageOutputList": 1.5,
    "powerGridList": 1815.7,
    "socList": 4.9,
    "netLoadList": 1814.2,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "20:37",
    "storageOutputList": 1.5,
    "powerGridList": 1804.3,
    "socList": 4.9,
    "netLoadList": 1802.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "20:38",
    "storageOutputList": 1.5,
    "powerGridList": 1945.4,
    "socList": 4.9,
    "netLoadList": 1943.9,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "20:39",
    "storageOutputList": 1.5,
    "powerGridList": 1840.9,
    "socList": 4.9,
    "netLoadList": 1839.4,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "20:40",
    "storageOutputList": 1.5,
    "powerGridList": 2062.6,
    "socList": 4.9,
    "netLoadList": 2061.1,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "20:41",
    "storageOutputList": 1.5,
    "powerGridList": 1888.7,
    "socList": 4.9,
    "netLoadList": 1887.2,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "20:42",
    "storageOutputList": 1.5,
    "powerGridList": 1959.3,
    "socList": 4.9,
    "netLoadList": 1957.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "20:43",
    "storageOutputList": 1.5,
    "powerGridList": 1902.6,
    "socList": 4.9,
    "netLoadList": 1901.1,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "20:44",
    "storageOutputList": 1.5,
    "powerGridList": 1960.6,
    "socList": 4.9,
    "netLoadList": 1959.1,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "20:45",
    "storageOutputList": 2,
    "powerGridList": 1784.2,
    "socList": 4.9,
    "netLoadList": 1782.2,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "20:46",
    "storageOutputList": 1.5,
    "powerGridList": 1892.5,
    "socList": 4.9,
    "netLoadList": 1891,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "20:47",
    "storageOutputList": 1.5,
    "powerGridList": 1898.8,
    "socList": 4.9,
    "netLoadList": 1897.3,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "20:48",
    "storageOutputList": 1.5,
    "powerGridList": 1776.6,
    "socList": 4.9,
    "netLoadList": 1775.1,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "20:49",
    "storageOutputList": 1.5,
    "powerGridList": 1872.4,
    "socList": 4.9,
    "netLoadList": 1870.9,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "20:50",
    "storageOutputList": 1.5,
    "powerGridList": 1774.1,
    "socList": 4.9,
    "netLoadList": 1772.6,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "20:51",
    "storageOutputList": 1.5,
    "powerGridList": 1901.3,
    "socList": 4.9,
    "netLoadList": 1899.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "20:52",
    "storageOutputList": 1.5,
    "powerGridList": 1856,
    "socList": 4.9,
    "netLoadList": 1854.5,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "20:53",
    "storageOutputList": 1.5,
    "powerGridList": 1873.6,
    "socList": 4.9,
    "netLoadList": 1872.1,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "20:54",
    "storageOutputList": 1.5,
    "powerGridList": 1822,
    "socList": 4.9,
    "netLoadList": 1820.5,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "20:55",
    "storageOutputList": 1.5,
    "powerGridList": 1742.6,
    "socList": 4.9,
    "netLoadList": 1741.1,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "20:56",
    "storageOutputList": 1.5,
    "powerGridList": 1719.9,
    "socList": 4.9,
    "netLoadList": 1718.4,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "20:57",
    "storageOutputList": 1.5,
    "powerGridList": 1762.7,
    "socList": 4.9,
    "netLoadList": 1761.2,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "20:58",
    "storageOutputList": 1.5,
    "powerGridList": 1543.5,
    "socList": 4.9,
    "netLoadList": 1542,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "20:59",
    "storageOutputList": 1.5,
    "powerGridList": 1533.4,
    "socList": 4.9,
    "netLoadList": 1531.9,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "21:00",
    "storageOutputList": 1.5,
    "powerGridList": 1066,
    "socList": 4.9,
    "netLoadList": 1064.5,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "21:01",
    "storageOutputList": 1.5,
    "powerGridList": 1097.5,
    "socList": 4.9,
    "netLoadList": 1096,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "21:02",
    "storageOutputList": 1.5,
    "powerGridList": 1082.3,
    "socList": 4.9,
    "netLoadList": 1080.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "21:03",
    "storageOutputList": 1.5,
    "powerGridList": 1055.9,
    "socList": 4.9,
    "netLoadList": 1054.4,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "21:04",
    "storageOutputList": 1.5,
    "powerGridList": 1093.7,
    "socList": 4.9,
    "netLoadList": 1092.2,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "21:05",
    "storageOutputList": 1.5,
    "powerGridList": 1103.8,
    "socList": 4.9,
    "netLoadList": 1102.3,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "21:06",
    "storageOutputList": 1.5,
    "powerGridList": 1084.9,
    "socList": 4.9,
    "netLoadList": 1083.4,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "21:07",
    "storageOutputList": 1.5,
    "powerGridList": 1078.6,
    "socList": 4.9,
    "netLoadList": 1077.1,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "21:08",
    "storageOutputList": 1.5,
    "powerGridList": 1106.3,
    "socList": 4.9,
    "netLoadList": 1104.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "21:09",
    "storageOutputList": 1.5,
    "powerGridList": 1091.2,
    "socList": 4.9,
    "netLoadList": 1089.7,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "21:10",
    "storageOutputList": 1.5,
    "powerGridList": 1110.1,
    "socList": 4.9,
    "netLoadList": 1108.6,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "21:11",
    "storageOutputList": 1.5,
    "powerGridList": 1111.3,
    "socList": 4.9,
    "netLoadList": 1109.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "21:12",
    "storageOutputList": 1.5,
    "powerGridList": 1173.1,
    "socList": 4.9,
    "netLoadList": 1171.6,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "21:13",
    "storageOutputList": 1.5,
    "powerGridList": 1120.1,
    "socList": 4.9,
    "netLoadList": 1118.6,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "21:14",
    "storageOutputList": 1.5,
    "powerGridList": 1169.3,
    "socList": 4.9,
    "netLoadList": 1167.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "21:15",
    "storageOutputList": 1.5,
    "powerGridList": 1135.3,
    "socList": 4.9,
    "netLoadList": 1133.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "21:16",
    "storageOutputList": 1.5,
    "powerGridList": 1152.9,
    "socList": 4.9,
    "netLoadList": 1151.4,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "21:17",
    "storageOutputList": 1.5,
    "powerGridList": 1171.8,
    "socList": 4.9,
    "netLoadList": 1170.3,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "21:18",
    "storageOutputList": 1.5,
    "powerGridList": 1192,
    "socList": 4.9,
    "netLoadList": 1190.5,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "21:19",
    "storageOutputList": 1.5,
    "powerGridList": 1171.8,
    "socList": 4.9,
    "netLoadList": 1170.3,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "21:20",
    "storageOutputList": 1.5,
    "powerGridList": 1152.9,
    "socList": 4.9,
    "netLoadList": 1151.4,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "21:21",
    "storageOutputList": 1.5,
    "powerGridList": 1169.3,
    "socList": 4.9,
    "netLoadList": 1167.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "21:22",
    "storageOutputList": 1.5,
    "powerGridList": 1209.6,
    "socList": 4.9,
    "netLoadList": 1208.1,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "21:23",
    "storageOutputList": 1.5,
    "powerGridList": 1097.5,
    "socList": 4.9,
    "netLoadList": 1096,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "21:24",
    "storageOutputList": 1.5,
    "powerGridList": 1115.1,
    "socList": 4.9,
    "netLoadList": 1113.6,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "21:25",
    "storageOutputList": 1.5,
    "powerGridList": 1107.5,
    "socList": 4.9,
    "netLoadList": 1106,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "21:26",
    "storageOutputList": 1.5,
    "powerGridList": 1087.4,
    "socList": 4.9,
    "netLoadList": 1085.9,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "21:27",
    "storageOutputList": 1.5,
    "powerGridList": 1129,
    "socList": 4.9,
    "netLoadList": 1127.5,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "21:28",
    "storageOutputList": 1.5,
    "powerGridList": 1152.9,
    "socList": 4.9,
    "netLoadList": 1151.4,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "21:29",
    "storageOutputList": 1.5,
    "powerGridList": 1183.1,
    "socList": 4.9,
    "netLoadList": 1181.6,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "21:30",
    "storageOutputList": 2,
    "powerGridList": 1190.7,
    "socList": 4.9,
    "netLoadList": 1188.7,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "21:31",
    "storageOutputList": 1.5,
    "powerGridList": 1179.4,
    "socList": 4.9,
    "netLoadList": 1177.9,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "21:32",
    "storageOutputList": 1.5,
    "powerGridList": 1144.1,
    "socList": 4.9,
    "netLoadList": 1142.6,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "21:33",
    "storageOutputList": 1.5,
    "powerGridList": 1155.4,
    "socList": 4.9,
    "netLoadList": 1153.9,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "21:34",
    "storageOutputList": 1.5,
    "powerGridList": 1165.5,
    "socList": 4.9,
    "netLoadList": 1164,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "21:35",
    "storageOutputList": 1.5,
    "powerGridList": 1156.7,
    "socList": 4.9,
    "netLoadList": 1155.2,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "21:36",
    "storageOutputList": 1.5,
    "powerGridList": 1134,
    "socList": 4.9,
    "netLoadList": 1132.5,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "21:37",
    "storageOutputList": 1.5,
    "powerGridList": 1152.9,
    "socList": 4.9,
    "netLoadList": 1151.4,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "21:38",
    "storageOutputList": 1.5,
    "powerGridList": 1203.3,
    "socList": 4.9,
    "netLoadList": 1201.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "21:39",
    "storageOutputList": 1.5,
    "powerGridList": 1171.8,
    "socList": 4.9,
    "netLoadList": 1170.3,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "21:40",
    "storageOutputList": 1.5,
    "powerGridList": 1166.8,
    "socList": 4.9,
    "netLoadList": 1165.3,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "21:41",
    "storageOutputList": 1.5,
    "powerGridList": 1150.4,
    "socList": 4.9,
    "netLoadList": 1148.9,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "21:42",
    "storageOutputList": 1.5,
    "powerGridList": 1163,
    "socList": 4.9,
    "netLoadList": 1161.5,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "21:43",
    "storageOutputList": 1.5,
    "powerGridList": 1132.7,
    "socList": 4.9,
    "netLoadList": 1131.2,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "21:44",
    "storageOutputList": 1.5,
    "powerGridList": 1157.9,
    "socList": 4.9,
    "netLoadList": 1156.4,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "21:45",
    "storageOutputList": 1.5,
    "powerGridList": 1150.4,
    "socList": 4.9,
    "netLoadList": 1148.9,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "21:46",
    "storageOutputList": 1.5,
    "powerGridList": 1184.4,
    "socList": 4.9,
    "netLoadList": 1182.9,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "21:47",
    "storageOutputList": 1.5,
    "powerGridList": 1168,
    "socList": 4.9,
    "netLoadList": 1166.5,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "21:48",
    "storageOutputList": 1.5,
    "powerGridList": 1179.4,
    "socList": 4.9,
    "netLoadList": 1177.9,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "21:49",
    "storageOutputList": 1.5,
    "powerGridList": 1144.1,
    "socList": 4.9,
    "netLoadList": 1142.6,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "21:50",
    "storageOutputList": 1.5,
    "powerGridList": 1136.5,
    "socList": 4.9,
    "netLoadList": 1135,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "21:51",
    "storageOutputList": 1.5,
    "powerGridList": 1137.8,
    "socList": 4.9,
    "netLoadList": 1136.3,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "21:52",
    "storageOutputList": 1.5,
    "powerGridList": 1136.5,
    "socList": 4.9,
    "netLoadList": 1135,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "21:53",
    "storageOutputList": 1.5,
    "powerGridList": 1132.7,
    "socList": 4.9,
    "netLoadList": 1131.2,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "21:54",
    "storageOutputList": 1.5,
    "powerGridList": 1135.3,
    "socList": 4.9,
    "netLoadList": 1133.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "21:55",
    "storageOutputList": 1.5,
    "powerGridList": 1151.6,
    "socList": 4.9,
    "netLoadList": 1150.1,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "21:56",
    "storageOutputList": 1.5,
    "powerGridList": 1135.3,
    "socList": 4.9,
    "netLoadList": 1133.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "21:57",
    "storageOutputList": 1.5,
    "powerGridList": 1181.9,
    "socList": 4.9,
    "netLoadList": 1180.4,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "21:58",
    "storageOutputList": 1.5,
    "powerGridList": 1181.9,
    "socList": 4.9,
    "netLoadList": 1180.4,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "21:59",
    "storageOutputList": 1.5,
    "powerGridList": 1171.8,
    "socList": 4.9,
    "netLoadList": 1170.3,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "22:00",
    "storageOutputList": 1.5,
    "powerGridList": 1154.2,
    "socList": 4.9,
    "netLoadList": 1152.7,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "22:01",
    "storageOutputList": 1.5,
    "powerGridList": 1185.7,
    "socList": 4.9,
    "netLoadList": 1184.2,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "22:02",
    "storageOutputList": 1.5,
    "powerGridList": 1144.1,
    "socList": 4.9,
    "netLoadList": 1142.6,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "22:03",
    "storageOutputList": 1.5,
    "powerGridList": 1170.5,
    "socList": 4.9,
    "netLoadList": 1169,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "22:04",
    "storageOutputList": 1.5,
    "powerGridList": 1152.9,
    "socList": 4.9,
    "netLoadList": 1151.4,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "22:05",
    "storageOutputList": 1.5,
    "powerGridList": 1160.5,
    "socList": 4.9,
    "netLoadList": 1159,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "22:06",
    "storageOutputList": 1.5,
    "powerGridList": 1155.4,
    "socList": 4.9,
    "netLoadList": 1153.9,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "22:07",
    "storageOutputList": 1.5,
    "powerGridList": 1159.2,
    "socList": 4.9,
    "netLoadList": 1157.7,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "22:08",
    "storageOutputList": 1.5,
    "powerGridList": 1163,
    "socList": 4.9,
    "netLoadList": 1161.5,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "22:09",
    "storageOutputList": 1.5,
    "powerGridList": 1190.7,
    "socList": 4.9,
    "netLoadList": 1189.2,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "22:10",
    "storageOutputList": 1.5,
    "powerGridList": 1166.8,
    "socList": 4.9,
    "netLoadList": 1165.3,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "22:11",
    "storageOutputList": 1.5,
    "powerGridList": 1194.5,
    "socList": 4.9,
    "netLoadList": 1193,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "22:12",
    "storageOutputList": 1.5,
    "powerGridList": 1161.7,
    "socList": 4.9,
    "netLoadList": 1160.2,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "22:13",
    "storageOutputList": 1.5,
    "powerGridList": 1170.5,
    "socList": 4.9,
    "netLoadList": 1169,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "22:14",
    "storageOutputList": 1.5,
    "powerGridList": 1155.4,
    "socList": 4.9,
    "netLoadList": 1153.9,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "22:15",
    "storageOutputList": 2,
    "powerGridList": 1141.6,
    "socList": 4.9,
    "netLoadList": 1139.6,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "22:16",
    "storageOutputList": 1.5,
    "powerGridList": 1111.3,
    "socList": 4.9,
    "netLoadList": 1109.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "22:17",
    "storageOutputList": 1.5,
    "powerGridList": 1130.2,
    "socList": 4.9,
    "netLoadList": 1128.7,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "22:18",
    "storageOutputList": 1.5,
    "powerGridList": 1140.3,
    "socList": 4.9,
    "netLoadList": 1138.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "22:19",
    "storageOutputList": 1.5,
    "powerGridList": 1146.6,
    "socList": 4.9,
    "netLoadList": 1145.1,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "22:20",
    "storageOutputList": 1.5,
    "powerGridList": 1135.3,
    "socList": 4.9,
    "netLoadList": 1133.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "22:21",
    "storageOutputList": 1.5,
    "powerGridList": 1170.5,
    "socList": 4.9,
    "netLoadList": 1169,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "22:22",
    "storageOutputList": 1.5,
    "powerGridList": 1132.7,
    "socList": 4.9,
    "netLoadList": 1131.2,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "22:23",
    "storageOutputList": 1.5,
    "powerGridList": 1169.3,
    "socList": 4.9,
    "netLoadList": 1167.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "22:24",
    "storageOutputList": 1.5,
    "powerGridList": 1174.3,
    "socList": 4.9,
    "netLoadList": 1172.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "22:25",
    "storageOutputList": 1.5,
    "powerGridList": 1154.2,
    "socList": 4.9,
    "netLoadList": 1152.7,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "22:26",
    "storageOutputList": 1.5,
    "powerGridList": 1146.6,
    "socList": 4.9,
    "netLoadList": 1145.1,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "22:27",
    "storageOutputList": 1.5,
    "powerGridList": 1140.3,
    "socList": 4.9,
    "netLoadList": 1138.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "22:28",
    "storageOutputList": 1.5,
    "powerGridList": 1180.6,
    "socList": 4.9,
    "netLoadList": 1179.1,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "22:29",
    "storageOutputList": 1.5,
    "powerGridList": 1171.8,
    "socList": 4.9,
    "netLoadList": 1170.3,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "22:30",
    "storageOutputList": 1.5,
    "powerGridList": 1174.3,
    "socList": 4.9,
    "netLoadList": 1172.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "22:31",
    "storageOutputList": 1.5,
    "powerGridList": 1186.9,
    "socList": 4.9,
    "netLoadList": 1185.4,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "22:32",
    "storageOutputList": 1.5,
    "powerGridList": 1137.8,
    "socList": 4.9,
    "netLoadList": 1136.3,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "22:33",
    "storageOutputList": 1.5,
    "powerGridList": 1145.3,
    "socList": 4.9,
    "netLoadList": 1143.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "22:34",
    "storageOutputList": 1.5,
    "powerGridList": 1198.3,
    "socList": 4.9,
    "netLoadList": 1196.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "22:35",
    "storageOutputList": 1.5,
    "powerGridList": 1210.9,
    "socList": 4.9,
    "netLoadList": 1209.4,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "22:36",
    "storageOutputList": 1.5,
    "powerGridList": 1239.8,
    "socList": 4.9,
    "netLoadList": 1238.3,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "22:37",
    "storageOutputList": 1.5,
    "powerGridList": 1178.1,
    "socList": 4.9,
    "netLoadList": 1176.6,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "22:38",
    "storageOutputList": 1.5,
    "powerGridList": 1174.3,
    "socList": 4.9,
    "netLoadList": 1172.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "22:39",
    "storageOutputList": 1.5,
    "powerGridList": 1207.1,
    "socList": 4.9,
    "netLoadList": 1205.6,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "22:40",
    "storageOutputList": 1.5,
    "powerGridList": 1200.8,
    "socList": 4.9,
    "netLoadList": 1199.3,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "22:41",
    "storageOutputList": 1.5,
    "powerGridList": 1166.8,
    "socList": 4.9,
    "netLoadList": 1165.3,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "22:42",
    "storageOutputList": 1.5,
    "powerGridList": 1130.2,
    "socList": 4.9,
    "netLoadList": 1128.7,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "22:43",
    "storageOutputList": 1.5,
    "powerGridList": 1129,
    "socList": 4.9,
    "netLoadList": 1127.5,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "22:44",
    "storageOutputList": 1.5,
    "powerGridList": 1135.3,
    "socList": 4.9,
    "netLoadList": 1133.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "22:45",
    "storageOutputList": 1.5,
    "powerGridList": 1163,
    "socList": 4.9,
    "netLoadList": 1161.5,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "22:46",
    "storageOutputList": 1.5,
    "powerGridList": 1127.7,
    "socList": 4.9,
    "netLoadList": 1126.2,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "22:47",
    "storageOutputList": 1.5,
    "powerGridList": 1142.8,
    "socList": 4.9,
    "netLoadList": 1141.3,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "22:48",
    "storageOutputList": 1.5,
    "powerGridList": 1203.3,
    "socList": 4.9,
    "netLoadList": 1201.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "22:49",
    "storageOutputList": 1.5,
    "powerGridList": 1188.2,
    "socList": 4.9,
    "netLoadList": 1186.7,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "22:50",
    "storageOutputList": 2,
    "powerGridList": 1197,
    "socList": 4.9,
    "netLoadList": 1195,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "22:51",
    "storageOutputList": 1.5,
    "powerGridList": 1218.4,
    "socList": 4.9,
    "netLoadList": 1216.9,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "22:52",
    "storageOutputList": 1.5,
    "powerGridList": 1175.6,
    "socList": 4.9,
    "netLoadList": 1174.1,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "22:53",
    "storageOutputList": 1.5,
    "powerGridList": 1204.6,
    "socList": 4.9,
    "netLoadList": 1203.1,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "22:54",
    "storageOutputList": 1.5,
    "powerGridList": 1183.1,
    "socList": 4.9,
    "netLoadList": 1181.6,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "22:55",
    "storageOutputList": 1.5,
    "powerGridList": 1168,
    "socList": 4.9,
    "netLoadList": 1166.5,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "22:56",
    "storageOutputList": 1.5,
    "powerGridList": 1180.6,
    "socList": 4.9,
    "netLoadList": 1179.1,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "22:57",
    "storageOutputList": 1.5,
    "powerGridList": 1179.4,
    "socList": 4.9,
    "netLoadList": 1177.9,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "22:58",
    "storageOutputList": 1.5,
    "powerGridList": 1165.5,
    "socList": 4.9,
    "netLoadList": 1164,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "22:59",
    "storageOutputList": 1.5,
    "powerGridList": 1175.6,
    "socList": 4.9,
    "netLoadList": 1174.1,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "23:00",
    "storageOutputList": 2,
    "powerGridList": 1171.8,
    "socList": 4.9,
    "netLoadList": 1169.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "23:01",
    "storageOutputList": 1.5,
    "powerGridList": 1188.2,
    "socList": 4.9,
    "netLoadList": 1186.7,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "23:02",
    "storageOutputList": 1.5,
    "powerGridList": 1137.8,
    "socList": 4.9,
    "netLoadList": 1136.3,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "23:03",
    "storageOutputList": 1.5,
    "powerGridList": 1175.6,
    "socList": 4.9,
    "netLoadList": 1174.1,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "23:04",
    "storageOutputList": 1.5,
    "powerGridList": 1163,
    "socList": 4.9,
    "netLoadList": 1161.5,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "23:05",
    "storageOutputList": 1.5,
    "powerGridList": 1186.9,
    "socList": 4.9,
    "netLoadList": 1185.4,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "23:06",
    "storageOutputList": 1.5,
    "powerGridList": 1181.9,
    "socList": 4.9,
    "netLoadList": 1180.4,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "23:07",
    "storageOutputList": 1.5,
    "powerGridList": 1174.3,
    "socList": 4.9,
    "netLoadList": 1172.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "23:08",
    "storageOutputList": 1.5,
    "powerGridList": 1179.4,
    "socList": 4.9,
    "netLoadList": 1177.9,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "23:09",
    "storageOutputList": 1.5,
    "powerGridList": 1169.3,
    "socList": 4.9,
    "netLoadList": 1167.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "23:10",
    "storageOutputList": 1.5,
    "powerGridList": 1195.7,
    "socList": 4.9,
    "netLoadList": 1194.2,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "23:11",
    "storageOutputList": 1.5,
    "powerGridList": 1160.5,
    "socList": 4.9,
    "netLoadList": 1159,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "23:12",
    "storageOutputList": 1.5,
    "powerGridList": 1115.1,
    "socList": 4.9,
    "netLoadList": 1113.6,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "23:13",
    "storageOutputList": 1.5,
    "powerGridList": 1135.3,
    "socList": 4.9,
    "netLoadList": 1133.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "23:14",
    "storageOutputList": 1.5,
    "powerGridList": 1130.2,
    "socList": 4.9,
    "netLoadList": 1128.7,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "23:15",
    "storageOutputList": 1.5,
    "powerGridList": 1117.6,
    "socList": 4.9,
    "netLoadList": 1116.1,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "23:16",
    "storageOutputList": 1.5,
    "powerGridList": 1183.1,
    "socList": 4.9,
    "netLoadList": 1181.6,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "23:17",
    "storageOutputList": 1.5,
    "powerGridList": 1169.3,
    "socList": 4.9,
    "netLoadList": 1167.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "23:18",
    "storageOutputList": 1.5,
    "powerGridList": 1161.7,
    "socList": 4.9,
    "netLoadList": 1160.2,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "23:19",
    "storageOutputList": 1.5,
    "powerGridList": 1198.3,
    "socList": 4.9,
    "netLoadList": 1196.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "23:20",
    "storageOutputList": 1.5,
    "powerGridList": 1154.2,
    "socList": 4.9,
    "netLoadList": 1152.7,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "23:21",
    "storageOutputList": 1.5,
    "powerGridList": 1163,
    "socList": 4.9,
    "netLoadList": 1161.5,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "23:22",
    "storageOutputList": 1.5,
    "powerGridList": 1173.1,
    "socList": 4.9,
    "netLoadList": 1171.6,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "23:23",
    "storageOutputList": 1.5,
    "powerGridList": 1159.2,
    "socList": 4.9,
    "netLoadList": 1157.7,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "23:24",
    "storageOutputList": 1.5,
    "powerGridList": 1163,
    "socList": 4.9,
    "netLoadList": 1161.5,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "23:25",
    "storageOutputList": 1.5,
    "powerGridList": 1155.4,
    "socList": 4.9,
    "netLoadList": 1153.9,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "23:26",
    "storageOutputList": 1.5,
    "powerGridList": 1180.6,
    "socList": 4.9,
    "netLoadList": 1179.1,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "23:27",
    "storageOutputList": 1.5,
    "powerGridList": 1193.2,
    "socList": 4.9,
    "netLoadList": 1191.7,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "23:28",
    "storageOutputList": 1.5,
    "powerGridList": 1180.6,
    "socList": 4.9,
    "netLoadList": 1179.1,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "23:29",
    "storageOutputList": 1.5,
    "powerGridList": 1186.9,
    "socList": 4.9,
    "netLoadList": 1185.4,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "23:30",
    "storageOutputList": 1.5,
    "powerGridList": 1160.5,
    "socList": 4.9,
    "netLoadList": 1159,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "23:31",
    "storageOutputList": 1.5,
    "powerGridList": 1144.1,
    "socList": 4.9,
    "netLoadList": 1142.6,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "23:32",
    "storageOutputList": 1.5,
    "powerGridList": 1183.1,
    "socList": 4.9,
    "netLoadList": 1181.6,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "23:33",
    "storageOutputList": 1.5,
    "powerGridList": 1136.5,
    "socList": 4.9,
    "netLoadList": 1135,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "23:34",
    "storageOutputList": 1.5,
    "powerGridList": 1157.9,
    "socList": 4.9,
    "netLoadList": 1156.4,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "23:35",
    "storageOutputList": 1.5,
    "powerGridList": 1160.5,
    "socList": 4.9,
    "netLoadList": 1159,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "23:36",
    "storageOutputList": 1.5,
    "powerGridList": 1139,
    "socList": 4.9,
    "netLoadList": 1137.5,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "23:37",
    "storageOutputList": 1.5,
    "powerGridList": 1171.8,
    "socList": 4.9,
    "netLoadList": 1170.3,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "23:38",
    "storageOutputList": 1.5,
    "powerGridList": 1115.1,
    "socList": 4.9,
    "netLoadList": 1113.6,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "23:39",
    "storageOutputList": 1.5,
    "powerGridList": 1140.3,
    "socList": 4.9,
    "netLoadList": 1138.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "23:40",
    "storageOutputList": 1.5,
    "powerGridList": 1131.5,
    "socList": 4.9,
    "netLoadList": 1130,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "23:41",
    "storageOutputList": 1.5,
    "powerGridList": 1110.1,
    "socList": 4.9,
    "netLoadList": 1108.6,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "23:42",
    "storageOutputList": 1.5,
    "powerGridList": 1105,
    "socList": 4.9,
    "netLoadList": 1103.5,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "23:43",
    "storageOutputList": 1.5,
    "powerGridList": 1159.2,
    "socList": 4.9,
    "netLoadList": 1157.7,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "23:44",
    "storageOutputList": 1.5,
    "powerGridList": 1125.2,
    "socList": 4.9,
    "netLoadList": 1123.7,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "23:45",
    "storageOutputList": 1.5,
    "powerGridList": 1145.3,
    "socList": 4.9,
    "netLoadList": 1143.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "23:46",
    "storageOutputList": 1.5,
    "powerGridList": 1147.9,
    "socList": 4.9,
    "netLoadList": 1146.4,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "23:47",
    "storageOutputList": 1.5,
    "powerGridList": 1170.5,
    "socList": 4.9,
    "netLoadList": 1169,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "23:48",
    "storageOutputList": 1.5,
    "powerGridList": 1183.1,
    "socList": 4.9,
    "netLoadList": 1181.6,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "23:49",
    "storageOutputList": 1.5,
    "powerGridList": 1161.7,
    "socList": 4.9,
    "netLoadList": 1160.2,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "23:50",
    "storageOutputList": 1.5,
    "powerGridList": 1179.4,
    "socList": 4.9,
    "netLoadList": 1177.9,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "23:51",
    "storageOutputList": 1.5,
    "powerGridList": 1134,
    "socList": 4.9,
    "netLoadList": 1132.5,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "23:52",
    "storageOutputList": 1.5,
    "powerGridList": 1169.3,
    "socList": 4.9,
    "netLoadList": 1167.8,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "23:53",
    "storageOutputList": 1.5,
    "powerGridList": 1176.8,
    "socList": 4.9,
    "netLoadList": 1175.3,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "23:54",
    "storageOutputList": 1.5,
    "powerGridList": 1149.1,
    "socList": 4.9,
    "netLoadList": 1147.6,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "23:55",
    "storageOutputList": 2,
    "powerGridList": 1144.1,
    "socList": 4.9,
    "netLoadList": 1142.1,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "23:56",
    "storageOutputList": 1.5,
    "powerGridList": 1141.6,
    "socList": 4.9,
    "netLoadList": 1140.1,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "23:57",
    "storageOutputList": 1.5,
    "powerGridList": 1238.6,
    "socList": 4.9,
    "netLoadList": 1237.1,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "23:58",
    "storageOutputList": 1.5,
    "powerGridList": 1213.4,
    "socList": 4.9,
    "netLoadList": 1211.9,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "23:59",
    "storageOutputList": 1.5,
    "powerGridList": 1176.8,
    "socList": 4.9,
    "netLoadList": 1175.3,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   },
   {
    "dateList": "0:00",
    "storageOutputList": 1.5,
    "powerGridList": 1176.8,
    "socList": 4.9,
    "netLoadList": 1175.3,
    "runningLlanList": 0,
    "priceList": 0.71,
    "aaa": "平"
   }
  ]
  
  
  
  
    
    
    
    
    
var bbb = []
    aaa.map(item => {
        bbb.push(item.priceList)
    })
    console.log(bbb.length);
    
    fs.writeFile('a.js', bbb.toString(), function(err) {
        if(err) {
          console.error('写入文件时发生错误：', err);
          return;
        }
        console.log('文件写入成功！');
      });