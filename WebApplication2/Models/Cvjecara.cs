﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace Programsko.Models;

public partial class Cvjecara
{
    public int IdCvjecara { get; set; }

    public string Ime { get; set; }

    public string Adresa { get; set; }

    public string Telefon { get; set; }

    public string Email { get; set; }

    public decimal? Provizija { get; set; }

    public decimal Cijena { get; set; }

    public virtual ICollection<DogadjajCvjecara> DogadjajCvjecara { get; set; } = new List<DogadjajCvjecara>();
}