using DAL;
using Model;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
   public class Comm
    {
        Communal cl = new Communal();
        public DataTable HfindAll() {
            string sql = "select * from hSlider";
            return cl.Query(sql);
        }
        public DataTable cSlider() {
            string sql = "select * from cSlider";
            return cl.Query(sql);
        }
        
        public string Account(string userName,string Pwd) {
            string Acctype = "";
            string sql = "select intor from Account where userName='" + userName + "' and Pwd='" + Pwd + "'";
            if (cl.Query(sql).Rows.Count>0&&(cl.Query(sql).Rows[0][0]).ToString()!="普通用户")
            {
                Acctype = "超级用户";
                
            }
            else if (cl.Query(sql).Rows.Count>0)
            {
                Acctype = "普通用户";
            }
            else
            {
                Acctype = "";
            }
           
            return Acctype;
        }
        public bool updata(hSlider h) {
            string sql = "update hSlider set Etitle='" + h.Etitle + "',Ctitle='" + h.Ctitle + "',EPicdescribe='" + h.EPicdescribe + "',CPicdescribe='" + h.CPicdescribe + "' where hId=" + h.hId + "";
            return cl.updata(sql);
        }

        public bool iMessage(Mess m) {
            string sql = "insert Mess values('" + m.mName + "','" + m.mEmail + "','" + m.mText + "',0)";
            return cl.updata(sql);
        }
        public DataTable aMessagebox() {
            string sql = "select * from Mess where isDele=0";
            return cl.Query(sql);
        }
        public bool uMessage(int mId) {
            string sql= "update Mess set isDele=1 where mId=" + mId + "";
            return cl.updata(sql);
        }

        public DataTable Account() {
            string sql = "select * from Account where intor='普通用户' and isDele=0";
            return cl.Query(sql);
        }
        public bool accRemove(int id) {
            string sql = "update Account set isDele=1 where uId=" + id;
            return cl.updata(sql);
        }

        public DataTable Title() {
            string sql = "select * from Title";
            return cl.Query(sql);
        }
        public DataTable Album() {
            string sql = "select * from Album";
            return cl.Query(sql);
        }
        public DataTable news() {
            string sql = "select * from news";
            return cl.Query(sql);
        }
        public bool tUpdate(Title t) {
            string sql = "update Title set h2='" + t.h2 + "',br='" + t.br + "',p='" + t.p + "' where tId=1";
            return cl.updata(sql);
        }
    } 
}
