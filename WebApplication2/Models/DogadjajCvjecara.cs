﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace Programsko.Models;

public partial class DogadjajCvjecara
{
    public int IdDc { get; set; }

    public int? IdDogadjaj { get; set; }

    public int? IdCvjecara { get; set; }

    public virtual Cvjecara IdCvjecaraNavigation { get; set; }

    public virtual Dogadjaj IdDogadjajNavigation { get; set; }
}