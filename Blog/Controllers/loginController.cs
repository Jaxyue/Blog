using BLL;
using Blog.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Blog.Controllers
{
    public class loginController : Controller
    {
        // GET: login
        public ActionResult login()
        {
            //Comm cm = new Comm();
            //string userName = Request["username"];
            //string pwd = Request["password"];
            //DataTable dt = cm.Account(userName, pwd);
            //bool res;
            //if (dt.Rows.Count>1)
            //{
            //    res = true;
            //}
            //else
            //{
            //    res = false;
            //}
            //return Json(res,JsonRequestBehavior.AllowGet);
            return View();
        }
        public string res() {
            Comm cm = new Comm();
            string userName = Request.QueryString["userName"];
            string pwd = Request.QueryString["Pwd"];
            string dt = cm.Account(userName, pwd);
            if (dt!="")
            {
                Session.Add("Name", userName);
            }
            return dt;
        }

        public string userName() {
            var userName = "";
            if (Session["Name"] != null)
            {
                userName = Session["Name"].ToString();
            }
            return userName;
        }
    }
}