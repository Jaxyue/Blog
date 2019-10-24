using BLL;
using Model;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Blog.Controllers
{
    public class PresBackendController : Controller
    {
        // GET: PresBackend
        public ActionResult PresBackend()
        {
            return View();
        }
        Comm cm = new Comm();
        public bool tUpdate() {
            StreamReader reader = new StreamReader(Request.InputStream);
            var str = reader.ReadToEnd();
            Title hs = JsonConvert.DeserializeObject<Title>(str);
            bool res = cm.tUpdate(hs);
            return res;
        }
    }
}