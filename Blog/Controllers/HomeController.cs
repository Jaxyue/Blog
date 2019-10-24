using BLL;
using Model;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Blog.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        Comm cm = new Comm();
        public ActionResult Index()
        {

            DataTable dt = cm.HfindAll();
            List<hSlider> hSilder = DataToList<hSlider>.ConvertToList(dt);
            return View(hSilder);
        }

        public bool Messagebox() {
            StreamReader reader = new StreamReader(Request.InputStream);
            var str = reader.ReadToEnd();
            Mess mess= JsonConvert.DeserializeObject<Mess>(str);
            return cm.iMessage(mess);
        }
    }
}