﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Programsko.Models;

#nullable disable

namespace Programsko.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20250213203147_SetPrimaryKeysAsIdentity")]
    partial class SetPrimaryKeysAsIdentity
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.12")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Programsko.Models.Automobili", b =>
                {
                    b.Property<int>("IdAutomobili")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("ID_AUTOMOBILI");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("IdAutomobili"));

                    b.Property<decimal>("Cijena")
                        .HasColumnType("decimal(10, 2)")
                        .HasColumnName("CIJENA");

                    b.Property<int?>("IdDogadjaj")
                        .HasColumnType("int")
                        .HasColumnName("ID_DOGADJAJ");

                    b.Property<DateOnly?>("KrajAngazmana")
                        .HasColumnType("date")
                        .HasColumnName("KRAJ_ANGAZMANA");

                    b.Property<string>("Marka")
                        .IsRequired()
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)")
                        .HasColumnName("MARKA");

                    b.Property<string>("Model")
                        .IsRequired()
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)")
                        .HasColumnName("MODEL");

                    b.Property<DateOnly?>("PocAngazmana")
                        .HasColumnType("date")
                        .HasColumnName("POC_ANGAZMANA");

                    b.Property<decimal?>("Provizija")
                        .HasColumnType("decimal(5, 2)")
                        .HasColumnName("PROVIZIJA");

                    b.HasKey("IdAutomobili")
                        .HasName("PK__AUTOMOBI__7F9AEB01E36F967F");

                    b.HasIndex("IdDogadjaj");

                    b.ToTable("AUTOMOBILI", (string)null);
                });

            modelBuilder.Entity("Programsko.Models.Cvjecara", b =>
                {
                    b.Property<int>("IdCvjecara")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("ID_CVJECARA");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("IdCvjecara"));

                    b.Property<string>("Adresa")
                        .IsRequired()
                        .HasMaxLength(150)
                        .IsUnicode(false)
                        .HasColumnType("varchar(150)")
                        .HasColumnName("ADRESA");

                    b.Property<decimal>("Cijena")
                        .HasColumnType("decimal(10, 2)")
                        .HasColumnName("CIJENA");

                    b.Property<string>("Email")
                        .HasMaxLength(100)
                        .IsUnicode(false)
                        .HasColumnType("varchar(100)")
                        .HasColumnName("EMAIL");

                    b.Property<string>("Ime")
                        .IsRequired()
                        .HasMaxLength(100)
                        .IsUnicode(false)
                        .HasColumnType("varchar(100)")
                        .HasColumnName("IME");

                    b.Property<decimal?>("Provizija")
                        .HasColumnType("decimal(5, 2)")
                        .HasColumnName("PROVIZIJA");

                    b.Property<string>("Telefon")
                        .HasMaxLength(15)
                        .IsUnicode(false)
                        .HasColumnType("varchar(15)")
                        .HasColumnName("TELEFON");

                    b.HasKey("IdCvjecara")
                        .HasName("PK__CVJECARA__6D29853895BB2EF1");

                    b.ToTable("CVJECARA", (string)null);
                });

            modelBuilder.Entity("Programsko.Models.Dogadjaj", b =>
                {
                    b.Property<int>("IdDogadjaj")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("ID_DOGADJAJ");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("IdDogadjaj"));

                    b.Property<DateOnly>("Datum")
                        .HasColumnType("date")
                        .HasColumnName("DATUM");

                    b.Property<int?>("IdAutomobili")
                        .HasColumnType("int")
                        .HasColumnName("ID_AUTOMOBILI");

                    b.Property<int?>("IdCatering")
                        .HasColumnType("int")
                        .HasColumnName("ID_CATERING");

                    b.Property<int?>("IdDc")
                        .HasColumnType("int")
                        .HasColumnName("ID_DC");

                    b.Property<int?>("IdDg")
                        .HasColumnType("int")
                        .HasColumnName("ID_DG");

                    b.Property<int?>("IdDs")
                        .HasColumnType("int")
                        .HasColumnName("ID_DS");

                    b.Property<int?>("IdIzvjestaj")
                        .HasColumnType("int")
                        .HasColumnName("ID_IZVJESTAJ");

                    b.Property<int?>("IdOstalo")
                        .HasColumnType("int")
                        .HasColumnName("ID_OSTALO");

                    b.Property<int?>("IdSalon")
                        .HasColumnType("int")
                        .HasColumnName("ID_SALON");

                    b.Property<string>("Kontakt")
                        .IsRequired()
                        .HasMaxLength(100)
                        .IsUnicode(false)
                        .HasColumnType("varchar(100)")
                        .HasColumnName("KONTAKT");

                    b.Property<string>("TipDogadjaja")
                        .IsRequired()
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)")
                        .HasColumnName("TIP_DOGADJAJA");

                    b.HasKey("IdDogadjaj")
                        .HasName("PK__DOGADJAJ__04A11DBA6C7CD527");

                    b.ToTable("DOGADJAJ", (string)null);
                });

            modelBuilder.Entity("Programsko.Models.DogadjajCvjecara", b =>
                {
                    b.Property<int>("IdDc")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("ID_DC");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("IdDc"));

                    b.Property<int?>("IdCvjecara")
                        .HasColumnType("int")
                        .HasColumnName("ID_CVJECARA");

                    b.Property<int?>("IdDogadjaj")
                        .HasColumnType("int")
                        .HasColumnName("ID_DOGADJAJ");

                    b.HasKey("IdDc")
                        .HasName("PK__DOGADJAJ__8B6237AD78AAE9F5");

                    b.HasIndex("IdCvjecara");

                    b.HasIndex("IdDogadjaj");

                    b.ToTable("DOGADJAJ_CVJECARA", (string)null);
                });

            modelBuilder.Entity("Programsko.Models.DogadjajGlazba", b =>
                {
                    b.Property<int>("IdDg")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("ID_IZVJESTAJ");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("IdDg"));

                    b.Property<int?>("IdDogadjaj")
                        .HasColumnType("int")
                        .HasColumnName("ID_DOGADJAJ");

                    b.Property<int?>("IdGlazba")
                        .HasColumnType("int")
                        .HasColumnName("ID_GLAZBA");

                    b.Property<DateOnly?>("KrajAngazmana")
                        .HasColumnType("date");

                    b.Property<DateOnly?>("PocAngazmana")
                        .HasColumnType("date");

                    b.HasKey("IdDg")
                        .HasName("PK__DOGADJAJ__A1CC9CD22DF526F3");

                    b.HasIndex("IdDogadjaj");

                    b.HasIndex("IdGlazba");

                    b.ToTable("DOGADJAJ_GLAZBA", (string)null);
                });

            modelBuilder.Entity("Programsko.Models.DogadjajRestoran", b =>
                {
                    b.Property<int>("IdDr")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("ID_DR");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("IdDr"));

                    b.Property<int?>("IdDogadjaj")
                        .HasColumnType("int")
                        .HasColumnName("ID_DOGADJAJ");

                    b.Property<int?>("IdRestoran")
                        .HasColumnType("int")
                        .HasColumnName("ID_RESTORAN");

                    b.HasKey("IdDr")
                        .HasName("PK__DOGADJAJ__8B6237BC3BDA2656");

                    b.HasIndex("IdDogadjaj");

                    b.HasIndex("IdRestoran");

                    b.ToTable("DOGADJAJ_RESTORAN", (string)null);
                });

            modelBuilder.Entity("Programsko.Models.DogadjajSlasticarna", b =>
                {
                    b.Property<int>("IdDs")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("ID_DS");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("IdDs"));

                    b.Property<int?>("IdDogadjaj")
                        .HasColumnType("int")
                        .HasColumnName("ID_DOGADJAJ");

                    b.Property<int?>("IdSlasticarna")
                        .HasColumnType("int")
                        .HasColumnName("ID_SLASTICARNA");

                    b.HasKey("IdDs")
                        .HasName("PK__DOGADJAJ__8B6237BDE1E82B2C");

                    b.HasIndex("IdDogadjaj");

                    b.HasIndex("IdSlasticarna");

                    b.ToTable("DOGADJAJ_SLASTICARNA", (string)null);
                });

            modelBuilder.Entity("Programsko.Models.Glazba", b =>
                {
                    b.Property<int>("IdGlazba")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("ID_GLAZBA");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("IdGlazba"));

                    b.Property<decimal>("Cijena")
                        .HasColumnType("decimal(10, 2)")
                        .HasColumnName("CIJENA");

                    b.Property<string>("Email")
                        .HasMaxLength(100)
                        .IsUnicode(false)
                        .HasColumnType("varchar(100)")
                        .HasColumnName("EMAIL");

                    b.Property<int?>("IdDogadjajGlazba")
                        .HasColumnType("int")
                        .HasColumnName("ID_DOGADJAJ_GLAZBA");

                    b.Property<string>("Ime")
                        .IsRequired()
                        .HasMaxLength(100)
                        .IsUnicode(false)
                        .HasColumnType("varchar(100)")
                        .HasColumnName("IME");

                    b.Property<DateOnly?>("KrajAngazmana")
                        .HasColumnType("date")
                        .HasColumnName("KRAJ_ANGAZMANA");

                    b.Property<DateOnly?>("PocAngazmana")
                        .HasColumnType("date")
                        .HasColumnName("POC_ANGAZMANA");

                    b.Property<decimal?>("Provizija")
                        .HasColumnType("decimal(5, 2)")
                        .HasColumnName("PROVIZIJA");

                    b.Property<string>("Telefon")
                        .HasMaxLength(15)
                        .IsUnicode(false)
                        .HasColumnType("varchar(15)")
                        .HasColumnName("TELEFON");

                    b.HasKey("IdGlazba")
                        .HasName("PK__GLAZBA__9BBB6CA92215D1F3");

                    b.ToTable("GLAZBA", (string)null);
                });

            modelBuilder.Entity("Programsko.Models.GlazbaPlaylist", b =>
                {
                    b.Property<int>("IdGp")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("ID_GP");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("IdGp"));

                    b.Property<int?>("IdGlazba")
                        .HasColumnType("int")
                        .HasColumnName("ID_GLAZBA");

                    b.Property<int?>("IdPlaylista")
                        .HasColumnType("int")
                        .HasColumnName("ID_PLAYLISTA");

                    b.HasKey("IdGp")
                        .HasName("PK__GLAZBA_P__8B62CF149E6780EC");

                    b.HasIndex("IdGlazba");

                    b.HasIndex("IdPlaylista");

                    b.ToTable("GLAZBA_PLAYLIST", (string)null);
                });

            modelBuilder.Entity("Programsko.Models.Izvjestaj", b =>
                {
                    b.Property<int>("IdIzvjestaj")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("ID_IZVJESTAJ");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("IdIzvjestaj"));

                    b.Property<DateOnly>("DatumKreiranja")
                        .HasColumnType("date")
                        .HasColumnName("DATUM_KREIRANJA");

                    b.Property<int?>("IdDogadjaj")
                        .HasColumnType("int")
                        .HasColumnName("ID_DOGADJAJ");

                    b.Property<string>("Podatci")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("PODATCI");

                    b.Property<string>("TipIzvjestaja")
                        .IsRequired()
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)")
                        .HasColumnName("TIP_IZVJESTAJA");

                    b.HasKey("IdIzvjestaj")
                        .HasName("PK__IZVJESTA__A1CC9CD22E4818CB");

                    b.HasIndex("IdDogadjaj");

                    b.ToTable("IZVJESTAJ", (string)null);
                });

            modelBuilder.Entity("Programsko.Models.Jelo", b =>
                {
                    b.Property<int>("IdJelo")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("ID_JELO");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("IdJelo"));

                    b.Property<decimal>("Cijena")
                        .HasColumnType("decimal(10, 2)")
                        .HasColumnName("CIJENA");

                    b.Property<string>("Naziv")
                        .IsRequired()
                        .HasMaxLength(100)
                        .IsUnicode(false)
                        .HasColumnType("varchar(100)")
                        .HasColumnName("NAZIV");

                    b.Property<string>("Opis")
                        .HasColumnType("text")
                        .HasColumnName("OPIS");

                    b.Property<string>("Sastojci")
                        .HasColumnType("text")
                        .HasColumnName("SASTOJCI");

                    b.Property<string>("VrstaJela")
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)")
                        .HasColumnName("VRSTA_JELA");

                    b.HasKey("IdJelo")
                        .HasName("PK__JELO__8681A1F58002180C");

                    b.ToTable("JELO", (string)null);
                });

            modelBuilder.Entity("Programsko.Models.Ostalo", b =>
                {
                    b.Property<int>("IdOstalo")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("ID_OSTALO");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("IdOstalo"));

                    b.Property<string>("Adresa")
                        .IsRequired()
                        .HasMaxLength(150)
                        .IsUnicode(false)
                        .HasColumnType("varchar(150)")
                        .HasColumnName("ADRESA");

                    b.Property<decimal>("Cijena")
                        .HasColumnType("decimal(10, 2)")
                        .HasColumnName("CIJENA");

                    b.Property<string>("Email")
                        .HasMaxLength(100)
                        .IsUnicode(false)
                        .HasColumnType("varchar(100)")
                        .HasColumnName("EMAIL");

                    b.Property<int?>("IdDogadjaj")
                        .HasColumnType("int")
                        .HasColumnName("ID_DOGADJAJ");

                    b.Property<string>("Ime")
                        .IsRequired()
                        .HasMaxLength(100)
                        .IsUnicode(false)
                        .HasColumnType("varchar(100)")
                        .HasColumnName("IME");

                    b.Property<DateOnly?>("KrajAngazmana")
                        .HasColumnType("date")
                        .HasColumnName("KRAJ_ANGAZMANA");

                    b.Property<string>("NazivUsuge")
                        .HasMaxLength(100)
                        .IsUnicode(false)
                        .HasColumnType("varchar(100)")
                        .HasColumnName("NAZIV_USUGE");

                    b.Property<DateOnly?>("PocAngazmana")
                        .HasColumnType("date")
                        .HasColumnName("POC_ANGAZMANA");

                    b.Property<decimal?>("Provizija")
                        .HasColumnType("decimal(5, 2)")
                        .HasColumnName("PROVIZIJA");

                    b.Property<string>("Telefon")
                        .HasMaxLength(15)
                        .IsUnicode(false)
                        .HasColumnType("varchar(15)")
                        .HasColumnName("TELEFON");

                    b.HasKey("IdOstalo")
                        .HasName("PK__OSTALO__684531F8EB7D4843");

                    b.HasIndex("IdDogadjaj");

                    b.ToTable("OSTALO", (string)null);
                });

            modelBuilder.Entity("Programsko.Models.Playlista", b =>
                {
                    b.Property<int>("IdPlaylista")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("ID_PLAYLISTA");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("IdPlaylista"));

                    b.Property<string>("Naziv")
                        .IsRequired()
                        .HasMaxLength(100)
                        .IsUnicode(false)
                        .HasColumnType("varchar(100)")
                        .HasColumnName("NAZIV");

                    b.Property<string>("Opis")
                        .HasColumnType("text")
                        .HasColumnName("OPIS");

                    b.Property<TimeOnly?>("Trajanje")
                        .HasColumnType("time")
                        .HasColumnName("TRAJANJE");

                    b.Property<string>("Url")
                        .HasMaxLength(255)
                        .IsUnicode(false)
                        .HasColumnType("varchar(255)")
                        .HasColumnName("URL");

                    b.HasKey("IdPlaylista")
                        .HasName("PK__PLAYLIST__51DC1DD0335F7DAA");

                    b.ToTable("PLAYLISTA", (string)null);
                });

            modelBuilder.Entity("Programsko.Models.Restoran", b =>
                {
                    b.Property<int>("IdRestoran")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("ID_RESTORAN");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("IdRestoran"));

                    b.Property<string>("Kontakt")
                        .HasMaxLength(15)
                        .IsUnicode(false)
                        .HasColumnType("varchar(15)")
                        .HasColumnName("KONTAKT");

                    b.Property<string>("Lokacija")
                        .IsRequired()
                        .HasMaxLength(150)
                        .IsUnicode(false)
                        .HasColumnType("varchar(150)")
                        .HasColumnName("LOKACIJA");

                    b.Property<string>("Mail")
                        .HasMaxLength(100)
                        .IsUnicode(false)
                        .HasColumnType("varchar(100)")
                        .HasColumnName("MAIL");

                    b.Property<string>("Mjesto")
                        .HasMaxLength(100)
                        .IsUnicode(false)
                        .HasColumnType("varchar(100)")
                        .HasColumnName("MJESTO");

                    b.Property<string>("Naziv")
                        .IsRequired()
                        .HasMaxLength(100)
                        .IsUnicode(false)
                        .HasColumnType("varchar(100)")
                        .HasColumnName("NAZIV");

                    b.HasKey("IdRestoran")
                        .HasName("PK__RESTORAN__A03B54630FD6481E");

                    b.ToTable("RESTORAN", (string)null);
                });

            modelBuilder.Entity("Programsko.Models.RestoranJelo", b =>
                {
                    b.Property<int>("IdRj")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("ID_RJ");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("IdRj"));

                    b.Property<int?>("IdJelo")
                        .HasColumnType("int")
                        .HasColumnName("ID_JELO");

                    b.Property<int?>("IdRestoran")
                        .HasColumnType("int")
                        .HasColumnName("ID_RESTORAN");

                    b.HasKey("IdRj")
                        .HasName("PK__RESTORAN__8B6381EA11130C3C");

                    b.HasIndex("IdJelo");

                    b.HasIndex("IdRestoran");

                    b.ToTable("RESTORAN_JELO", (string)null);
                });

            modelBuilder.Entity("Programsko.Models.Salon", b =>
                {
                    b.Property<int>("IdSalon")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("ID_SALON");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("IdSalon"));

                    b.Property<string>("Adresa")
                        .IsRequired()
                        .HasMaxLength(150)
                        .IsUnicode(false)
                        .HasColumnType("varchar(150)")
                        .HasColumnName("ADRESA");

                    b.Property<int?>("BrojMjesta")
                        .HasColumnType("int")
                        .HasColumnName("BROJ_MJESTA");

                    b.Property<decimal>("Cijena")
                        .HasColumnType("decimal(10, 2)")
                        .HasColumnName("CIJENA");

                    b.Property<int?>("IdDogadjaj")
                        .HasColumnType("int")
                        .HasColumnName("ID_DOGADJAJ");

                    b.Property<string>("Ime")
                        .IsRequired()
                        .HasMaxLength(100)
                        .IsUnicode(false)
                        .HasColumnType("varchar(100)")
                        .HasColumnName("IME");

                    b.Property<DateOnly?>("KrajAngazmana")
                        .HasColumnType("date")
                        .HasColumnName("KRAJ_ANGAZMANA");

                    b.Property<DateOnly?>("PocAngazmana")
                        .HasColumnType("date")
                        .HasColumnName("POC_ANGAZMANA");

                    b.Property<decimal?>("Provizija")
                        .HasColumnType("decimal(5, 2)")
                        .HasColumnName("PROVIZIJA");

                    b.Property<string>("Telefon")
                        .HasMaxLength(15)
                        .IsUnicode(false)
                        .HasColumnType("varchar(15)")
                        .HasColumnName("TELEFON");

                    b.Property<decimal?>("Velicina")
                        .HasColumnType("decimal(5, 2)")
                        .HasColumnName("VELICINA");

                    b.HasKey("IdSalon")
                        .HasName("PK__SALON__E77AB92A33B633D4");

                    b.HasIndex("IdDogadjaj");

                    b.ToTable("SALON", (string)null);
                });

            modelBuilder.Entity("Programsko.Models.Slasticarna", b =>
                {
                    b.Property<int>("IdSlasticarna")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("ID_SLASTICARNA");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("IdSlasticarna"));

                    b.Property<string>("Adresa")
                        .IsRequired()
                        .HasMaxLength(150)
                        .IsUnicode(false)
                        .HasColumnType("varchar(150)")
                        .HasColumnName("ADRESA");

                    b.Property<decimal>("Cijena")
                        .HasColumnType("decimal(10, 2)")
                        .HasColumnName("CIJENA");

                    b.Property<string>("Email")
                        .HasMaxLength(100)
                        .IsUnicode(false)
                        .HasColumnType("varchar(100)")
                        .HasColumnName("EMAIL");

                    b.Property<string>("Ime")
                        .IsRequired()
                        .HasMaxLength(100)
                        .IsUnicode(false)
                        .HasColumnType("varchar(100)")
                        .HasColumnName("IME");

                    b.Property<decimal?>("Provizija")
                        .HasColumnType("decimal(5, 2)")
                        .HasColumnName("PROVIZIJA");

                    b.Property<string>("Telefon")
                        .HasMaxLength(15)
                        .IsUnicode(false)
                        .HasColumnType("varchar(15)")
                        .HasColumnName("TELEFON");

                    b.HasKey("IdSlasticarna")
                        .HasName("PK__SLASTICA__942C50266FB27336");

                    b.ToTable("SLASTICARNA", (string)null);
                });

            modelBuilder.Entity("Programsko.Models.Automobili", b =>
                {
                    b.HasOne("Programsko.Models.Dogadjaj", "IdDogadjajNavigation")
                        .WithMany("Automobili")
                        .HasForeignKey("IdDogadjaj")
                        .HasConstraintName("FK__AUTOMOBIL__ID_DO__412EB0B6");

                    b.Navigation("IdDogadjajNavigation");
                });

            modelBuilder.Entity("Programsko.Models.DogadjajCvjecara", b =>
                {
                    b.HasOne("Programsko.Models.Cvjecara", "IdCvjecaraNavigation")
                        .WithMany("DogadjajCvjecara")
                        .HasForeignKey("IdCvjecara")
                        .HasConstraintName("FK__DOGADJAJ___ID_CV__5535A963");

                    b.HasOne("Programsko.Models.Dogadjaj", "IdDogadjajNavigation")
                        .WithMany("DogadjajCvjecara")
                        .HasForeignKey("IdDogadjaj")
                        .HasConstraintName("FK__DOGADJAJ___ID_DO__5441852A");

                    b.Navigation("IdCvjecaraNavigation");

                    b.Navigation("IdDogadjajNavigation");
                });

            modelBuilder.Entity("Programsko.Models.DogadjajGlazba", b =>
                {
                    b.HasOne("Programsko.Models.Dogadjaj", "IdDogadjajNavigation")
                        .WithMany("DogadjajGlazba")
                        .HasForeignKey("IdDogadjaj")
                        .HasConstraintName("FK__DOGADJAJ___ID_DO__48CFD27E");

                    b.HasOne("Programsko.Models.Glazba", "IdGlazbaNavigation")
                        .WithMany("DogadjajGlazba")
                        .HasForeignKey("IdGlazba")
                        .HasConstraintName("FK__DOGADJAJ___ID_GL__49C3F6B7");

                    b.Navigation("IdDogadjajNavigation");

                    b.Navigation("IdGlazbaNavigation");
                });

            modelBuilder.Entity("Programsko.Models.DogadjajRestoran", b =>
                {
                    b.HasOne("Programsko.Models.Dogadjaj", "IdDogadjajNavigation")
                        .WithMany("DogadjajRestoran")
                        .HasForeignKey("IdDogadjaj")
                        .HasConstraintName("FK__DOGADJAJ___ID_DO__5FB337D6");

                    b.HasOne("Programsko.Models.Restoran", "IdRestoranNavigation")
                        .WithMany("DogadjajRestoran")
                        .HasForeignKey("IdRestoran")
                        .HasConstraintName("FK__DOGADJAJ___ID_RE__60A75C0F");

                    b.Navigation("IdDogadjajNavigation");

                    b.Navigation("IdRestoranNavigation");
                });

            modelBuilder.Entity("Programsko.Models.DogadjajSlasticarna", b =>
                {
                    b.HasOne("Programsko.Models.Dogadjaj", "IdDogadjajNavigation")
                        .WithMany("DogadjajSlasticarna")
                        .HasForeignKey("IdDogadjaj")
                        .HasConstraintName("FK__DOGADJAJ___ID_DO__59FA5E80");

                    b.HasOne("Programsko.Models.Slasticarna", "IdSlasticarnaNavigation")
                        .WithMany("DogadjajSlasticarna")
                        .HasForeignKey("IdSlasticarna")
                        .HasConstraintName("FK__DOGADJAJ___ID_SL__5AEE82B9");

                    b.Navigation("IdDogadjajNavigation");

                    b.Navigation("IdSlasticarnaNavigation");
                });

            modelBuilder.Entity("Programsko.Models.GlazbaPlaylist", b =>
                {
                    b.HasOne("Programsko.Models.Glazba", "IdGlazbaNavigation")
                        .WithMany("GlazbaPlaylist")
                        .HasForeignKey("IdGlazba")
                        .HasConstraintName("FK__GLAZBA_PL__ID_GL__4E88ABD4");

                    b.HasOne("Programsko.Models.Playlista", "IdPlaylistaNavigation")
                        .WithMany("GlazbaPlaylist")
                        .HasForeignKey("IdPlaylista")
                        .HasConstraintName("FK__GLAZBA_PL__ID_PL__4F7CD00D");

                    b.Navigation("IdGlazbaNavigation");

                    b.Navigation("IdPlaylistaNavigation");
                });

            modelBuilder.Entity("Programsko.Models.Izvjestaj", b =>
                {
                    b.HasOne("Programsko.Models.Dogadjaj", "IdDogadjajNavigation")
                        .WithMany("Izvjestaj")
                        .HasForeignKey("IdDogadjaj")
                        .HasConstraintName("FK__IZVJESTAJ__ID_DO__3B75D760");

                    b.Navigation("IdDogadjajNavigation");
                });

            modelBuilder.Entity("Programsko.Models.Ostalo", b =>
                {
                    b.HasOne("Programsko.Models.Dogadjaj", "IdDogadjajNavigation")
                        .WithMany("Ostalo")
                        .HasForeignKey("IdDogadjaj")
                        .HasConstraintName("FK__OSTALO__ID_DOGAD__440B1D61");

                    b.Navigation("IdDogadjajNavigation");
                });

            modelBuilder.Entity("Programsko.Models.RestoranJelo", b =>
                {
                    b.HasOne("Programsko.Models.Jelo", "IdJeloNavigation")
                        .WithMany("RestoranJelo")
                        .HasForeignKey("IdJelo")
                        .HasConstraintName("FK__RESTORAN___ID_JE__66603565");

                    b.HasOne("Programsko.Models.Restoran", "IdRestoranNavigation")
                        .WithMany("RestoranJelo")
                        .HasForeignKey("IdRestoran")
                        .HasConstraintName("FK__RESTORAN___ID_RE__656C112C");

                    b.Navigation("IdJeloNavigation");

                    b.Navigation("IdRestoranNavigation");
                });

            modelBuilder.Entity("Programsko.Models.Salon", b =>
                {
                    b.HasOne("Programsko.Models.Dogadjaj", "IdDogadjajNavigation")
                        .WithMany("Salon")
                        .HasForeignKey("IdDogadjaj")
                        .HasConstraintName("FK__SALON__ID_DOGADJ__3E52440B");

                    b.Navigation("IdDogadjajNavigation");
                });

            modelBuilder.Entity("Programsko.Models.Cvjecara", b =>
                {
                    b.Navigation("DogadjajCvjecara");
                });

            modelBuilder.Entity("Programsko.Models.Dogadjaj", b =>
                {
                    b.Navigation("Automobili");

                    b.Navigation("DogadjajCvjecara");

                    b.Navigation("DogadjajGlazba");

                    b.Navigation("DogadjajRestoran");

                    b.Navigation("DogadjajSlasticarna");

                    b.Navigation("Izvjestaj");

                    b.Navigation("Ostalo");

                    b.Navigation("Salon");
                });

            modelBuilder.Entity("Programsko.Models.Glazba", b =>
                {
                    b.Navigation("DogadjajGlazba");

                    b.Navigation("GlazbaPlaylist");
                });

            modelBuilder.Entity("Programsko.Models.Jelo", b =>
                {
                    b.Navigation("RestoranJelo");
                });

            modelBuilder.Entity("Programsko.Models.Playlista", b =>
                {
                    b.Navigation("GlazbaPlaylist");
                });

            modelBuilder.Entity("Programsko.Models.Restoran", b =>
                {
                    b.Navigation("DogadjajRestoran");

                    b.Navigation("RestoranJelo");
                });

            modelBuilder.Entity("Programsko.Models.Slasticarna", b =>
                {
                    b.Navigation("DogadjajSlasticarna");
                });
#pragma warning restore 612, 618
        }
    }
}
