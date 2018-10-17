using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Runtime.Serialization.Json;
using System.Text;
using System.Web;
using SpartanSln.Models;

namespace SpartanSln.Helpers
    {
    public class UtilityFunctions
        {
        public static string Serialize<T>(T obj)
            {
            DataContractJsonSerializer serializer = new DataContractJsonSerializer(obj.GetType());
            MemoryStream ms = new MemoryStream();
            serializer.WriteObject(ms, obj);
            string retVal = Encoding.UTF8.GetString(ms.ToArray());
            return retVal;
            }

        public static T Deserialize<T>(string json)
            {
            T obj = Activator.CreateInstance<T>();
            MemoryStream ms = new MemoryStream(Encoding.Unicode.GetBytes(json));
            DataContractJsonSerializer serializer = new DataContractJsonSerializer(obj.GetType());
            obj = (T)serializer.ReadObject(ms);
            ms.Close();
            return obj;
            }

        public static RootObject LoadJson()
            {            
            string path = ConfigurationManager.AppSettings["jsonPath"];           

            using (StreamReader r = new StreamReader(path))
                {
                string Json = r.ReadToEnd();
                var RootObject = new RootObject();
                return Deserialize<RootObject>(Json);
                }
            }

        }
    }