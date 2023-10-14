namespace signalR.DateStorage
{
    public static class DataManager
    {
        public static List<ChartModel> GetData()
        {
            var r = new Random();
            return new List<ChartModel> {

                new() {Data=new List<int>{r.Next(1,40)}, Label = "Data1"},
                new() {Data=new List<int>{r.Next(1,40)}, Label = "Data2"},
                new() {Data=new List<int>{r.Next(1,40)}, Label = "Data3"},
                new() {Data=new List<int>{r.Next(1,40)}, Label = "Data4"},
            };
        }
    }
}