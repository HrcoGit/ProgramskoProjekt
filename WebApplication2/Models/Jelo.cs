﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace Programsko.Models;

public partial class Jelo
{
    public int IdJelo { get; set; }

    public string Naziv { get; set; }

    public string Opis { get; set; }

    public decimal Cijena { get; set; }

    public string VrstaJela { get; set; }

    public string Sastojci { get; set; }

    public virtual ICollection<RestoranJelo> RestoranJelo { get; set; } = new List<RestoranJelo>();
}