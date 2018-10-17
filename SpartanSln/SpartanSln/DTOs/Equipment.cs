using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SpartanSln.DTOs
    {
    public class Equipment
        {
        //SerialisedEquipment External ID
        public string UnitNo { get; set; }
        //EquipmentType External ID
        public string ItemNo { get; set; }
        public string Description { get; set; }

        }
    }