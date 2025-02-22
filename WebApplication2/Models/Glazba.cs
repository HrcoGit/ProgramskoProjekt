﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace Programsko.Models;

public partial class Glazba
{
    public int IdGlazba { get; set; }

    public string Ime { get; set; }

    public string Telefon { get; set; }

    public string Email { get; set; }

    public decimal? Provizija { get; set; }

    public decimal Cijena { get; set; }

    public DateOnly? PocAngazmana { get; set; }

    public DateOnly? KrajAngazmana { get; set; }

    public int? IdDogadjajGlazba { get; set; }

    public virtual ICollection<DogadjajGlazba> DogadjajGlazba { get; set; } = new List<DogadjajGlazba>();

    public virtual ICollection<GlazbaPlaylist> GlazbaPlaylist { get; set; } = new List<GlazbaPlaylist>();
}