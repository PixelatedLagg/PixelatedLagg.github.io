using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Threading;

namespace Pixelated_Lagg_Commissions_Website.Pages
{
    public class IndexModel : PageModel
    {
        public string typeName = "[Pixelated's Development Services]";
        public string titleactual;
        public string title = "";
        private readonly ILogger<IndexModel> _logger;

        public IndexModel(ILogger<IndexModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
            bool comStatus = false; //Have database/interface for me to easily change this boolean
            ViewData["TimeStamp"] = DateTime.Now.ToShortDateString();
            if (comStatus == true) { ViewData["ComStatus"] = "Open"; }
            else { ViewData["ComStatus"] = "Closed"; }
            //Thread type = new Thread(new ThreadStart(LoopType));
            //type.Start();
        }
        /**public void LoopType()
        {
            foreach (char c in "[Pixelated's Development Services]")
            {
                titleactual += c;
                ViewData["titleactual"] = titleactual;
                Thread.Sleep(500);
            }
        }**/
    }
}
