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
    public class BackendController : Controller
    {
        // GET: Backend
        public ActionResult Backend()
        {
            return View();
        }
        Comm cm = new Comm();
        public string Hslider() {
            DataTable dt = cm.HfindAll();
            string jsonStr = JsonConvert.SerializeObject(dt);
            return jsonStr;
        }
        
        public bool updata() {
            StreamReader reader = new StreamReader(Request.InputStream);
            var str = reader.ReadToEnd();
            hSlider hs = JsonConvert.DeserializeObject<hSlider>(str);
            bool result = cm.updata(hs);
            return result;
            
        }
        //public bool uMess() {

        //}
        public ActionResult Messagebox()
        {
            return View();
        }
        public string Message() {
            
            DataTable dt = cm.aMessagebox();
            string jsonStr = JsonConvert.SerializeObject(dt);
            return jsonStr;
        }

        public bool Rader() {
            int id = int.Parse(Request.QueryString["id"]);
            bool res = cm.uMessage(id);
            return res;
        }

        public ActionResult Account() {
            return View();
        }

        public string showAccount() {
            DataTable dt = cm.Account();
            string jsonStr = JsonConvert.SerializeObject(dt);
            return jsonStr;
        }

        public bool uAccount() {
            int uId = int.Parse(Request.QueryString["uId"]);
            return cm.accRemove(uId);
        }
    }
}