using SpartanSln.DTOs;
using SpartanSln.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SpartanSln.Logic
    {
    public class EquipmentSearch
        {
        
        public List<Equipment> GetAllEquipment()
            {
            var obj = UtilityFunctions.LoadJson();

            var allItems = new List<Equipment>();
            foreach (var item in obj.SerialisedEquipment)
                {
                var itemType = obj.EquipmentType.Where(t => t.Id == item.EquipmentTypeId).FirstOrDefault();
                Equipment DTOItem = new Equipment
                    {
                    UnitNo = item.ExternalId,
                    ItemNo = itemType.ExternalId,
                    Description = itemType.Description
                    };
                allItems.Add(DTOItem);

                }

            return allItems;
            }

        public Equipment GetByUnitNo(string UnitNo)
            {
            var obj = UtilityFunctions.LoadJson();

            var unit = obj.SerialisedEquipment.Where(s => s.ExternalId == UnitNo).FirstOrDefault();
            Equipment DTOItem = new Equipment();

            if (unit != null)
                {
                var itemType = obj.EquipmentType.Where(t => t.Id == unit.EquipmentTypeId).FirstOrDefault();
                DTOItem = new Equipment
                    {
                    UnitNo = unit.ExternalId,
                    ItemNo = itemType.ExternalId,
                    Description = itemType.Description
                    };
                }
            else
                {
                DTOItem = new Equipment();
                }

            return DTOItem;
            }

        public List<Equipment> GetByItemNo(string ItemNo)
            {
            var obj = UtilityFunctions.LoadJson();

            var allItemsOfType = new List<Equipment>();
            foreach (var item in obj.SerialisedEquipment)
                {
                var itemType = obj.EquipmentType.Where(t => t.Id == item.EquipmentTypeId).FirstOrDefault();

                if (itemType.ExternalId == ItemNo)
                    {
                    Equipment DTOItem = new Equipment
                        {
                        UnitNo = item.ExternalId,
                        ItemNo = itemType.ExternalId,
                        Description = itemType.Description
                        };
                    allItemsOfType.Add(DTOItem);
                    }

                }

            return allItemsOfType;
            }


        }
    }