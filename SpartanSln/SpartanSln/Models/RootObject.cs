using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SpartanSln.Models
    {
    public class RootObject
        {
        public List<SerialisedEquipment> SerialisedEquipment { get; set; }
        public List<EquipmentType> EquipmentType { get; set; }
        }


    }