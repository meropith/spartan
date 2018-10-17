using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SpartanSln.Helpers;
using SpartanSln.DTOs;
using System.Web.Http.Cors;
using SpartanSln.Logic;

namespace SpartanSln.Controllers
    {

    [EnableCors("*", "*", "*")]
    public class EquipmentSearchController : ApiController
        {
       
        [HttpGet]
        public IHttpActionResult GetAllEquipment()
            {           
            EquipmentSearch searchObj = new EquipmentSearch();           
            return Ok(new { results = searchObj.GetAllEquipment() });
            }
        
        [HttpGet]
        [EnableCors("*", "*", "*")]
        public IHttpActionResult GetByUnitNo(string UnitNo)
            {
            EquipmentSearch searchObj = new EquipmentSearch();           
            return Ok(new { results = searchObj.GetByUnitNo(UnitNo) });
            }
        
        [HttpGet]
        [EnableCors("*", "*", "*")]
        public IHttpActionResult GetByItemNo(string ItemNo)
            {
            EquipmentSearch searchObj = new EquipmentSearch();
            return Ok(new { results = searchObj.GetByItemNo(ItemNo)});
            }        

        }
    }
