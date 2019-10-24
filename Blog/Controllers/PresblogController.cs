using BLL;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Blog.Controllers
{
    public class PresblogController : Controller
    {
        // GET: Presblog
        public ActionResult Main()
        {
            return View();
        }
        Comm cm = new Comm();
        public string Title() {
            DataTable dt = cm.Title();
            string jsonStr = JsonConvert.SerializeObject(dt);
            return jsonStr;
        }
        public string Album() {
            DataTable dt = cm.Album();
            string jsonStr = JsonConvert.SerializeObject(dt);
            return jsonStr;
        }
        public string news() {
            DataTable dt = cm.news();
            string jsonStr = JsonConvert.SerializeObject(dt);
            return jsonStr;
        }
    }
}