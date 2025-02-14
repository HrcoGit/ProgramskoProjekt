using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Programsko.Migrations
{
    /// <inheritdoc />
    public partial class SetPrimaryKeysAsIdentity : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CVJECARA",
                columns: table => new
                {
                    ID_CVJECARA = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IME = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: false),
                    ADRESA = table.Column<string>(type: "varchar(150)", unicode: false, maxLength: 150, nullable: false),
                    TELEFON = table.Column<string>(type: "varchar(15)", unicode: false, maxLength: 15, nullable: true),
                    EMAIL = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: true),
                    PROVIZIJA = table.Column<decimal>(type: "decimal(5,2)", nullable: true),
                    CIJENA = table.Column<decimal>(type: "decimal(10,2)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__CVJECARA__6D29853895BB2EF1", x => x.ID_CVJECARA);
                });

            migrationBuilder.CreateTable(
                name: "DOGADJAJ",
                columns: table => new
                {
                    ID_DOGADJAJ = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DATUM = table.Column<DateOnly>(type: "date", nullable: false),
                    KONTAKT = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: false),
                    TIP_DOGADJAJA = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
                    ID_DG = table.Column<int>(type: "int", nullable: true),
                    ID_DC = table.Column<int>(type: "int", nullable: true),
                    ID_DS = table.Column<int>(type: "int", nullable: true),
                    ID_OSTALO = table.Column<int>(type: "int", nullable: true),
                    ID_IZVJESTAJ = table.Column<int>(type: "int", nullable: true),
                    ID_AUTOMOBILI = table.Column<int>(type: "int", nullable: true),
                    ID_SALON = table.Column<int>(type: "int", nullable: true),
                    ID_CATERING = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__DOGADJAJ__04A11DBA6C7CD527", x => x.ID_DOGADJAJ);
                });

            migrationBuilder.CreateTable(
                name: "GLAZBA",
                columns: table => new
                {
                    ID_GLAZBA = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IME = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: false),
                    TELEFON = table.Column<string>(type: "varchar(15)", unicode: false, maxLength: 15, nullable: true),
                    EMAIL = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: true),
                    PROVIZIJA = table.Column<decimal>(type: "decimal(5,2)", nullable: true),
                    CIJENA = table.Column<decimal>(type: "decimal(10,2)", nullable: false),
                    POC_ANGAZMANA = table.Column<DateOnly>(type: "date", nullable: true),
                    KRAJ_ANGAZMANA = table.Column<DateOnly>(type: "date", nullable: true),
                    ID_DOGADJAJ_GLAZBA = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__GLAZBA__9BBB6CA92215D1F3", x => x.ID_GLAZBA);
                });

            migrationBuilder.CreateTable(
                name: "JELO",
                columns: table => new
                {
                    ID_JELO = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NAZIV = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: false),
                    OPIS = table.Column<string>(type: "text", nullable: true),
                    CIJENA = table.Column<decimal>(type: "decimal(10,2)", nullable: false),
                    VRSTA_JELA = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    SASTOJCI = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__JELO__8681A1F58002180C", x => x.ID_JELO);
                });

            migrationBuilder.CreateTable(
                name: "PLAYLISTA",
                columns: table => new
                {
                    ID_PLAYLISTA = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NAZIV = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: false),
                    OPIS = table.Column<string>(type: "text", nullable: true),
                    URL = table.Column<string>(type: "varchar(255)", unicode: false, maxLength: 255, nullable: true),
                    TRAJANJE = table.Column<TimeOnly>(type: "time", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__PLAYLIST__51DC1DD0335F7DAA", x => x.ID_PLAYLISTA);
                });

            migrationBuilder.CreateTable(
                name: "RESTORAN",
                columns: table => new
                {
                    ID_RESTORAN = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NAZIV = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: false),
                    LOKACIJA = table.Column<string>(type: "varchar(150)", unicode: false, maxLength: 150, nullable: false),
                    KONTAKT = table.Column<string>(type: "varchar(15)", unicode: false, maxLength: 15, nullable: true),
                    MAIL = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: true),
                    MJESTO = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__RESTORAN__A03B54630FD6481E", x => x.ID_RESTORAN);
                });

            migrationBuilder.CreateTable(
                name: "SLASTICARNA",
                columns: table => new
                {
                    ID_SLASTICARNA = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IME = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: false),
                    ADRESA = table.Column<string>(type: "varchar(150)", unicode: false, maxLength: 150, nullable: false),
                    TELEFON = table.Column<string>(type: "varchar(15)", unicode: false, maxLength: 15, nullable: true),
                    EMAIL = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: true),
                    PROVIZIJA = table.Column<decimal>(type: "decimal(5,2)", nullable: true),
                    CIJENA = table.Column<decimal>(type: "decimal(10,2)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__SLASTICA__942C50266FB27336", x => x.ID_SLASTICARNA);
                });

            migrationBuilder.CreateTable(
                name: "AUTOMOBILI",
                columns: table => new
                {
                    ID_AUTOMOBILI = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    MARKA = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
                    MODEL = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
                    CIJENA = table.Column<decimal>(type: "decimal(10,2)", nullable: false),
                    PROVIZIJA = table.Column<decimal>(type: "decimal(5,2)", nullable: true),
                    POC_ANGAZMANA = table.Column<DateOnly>(type: "date", nullable: true),
                    KRAJ_ANGAZMANA = table.Column<DateOnly>(type: "date", nullable: true),
                    ID_DOGADJAJ = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__AUTOMOBI__7F9AEB01E36F967F", x => x.ID_AUTOMOBILI);
                    table.ForeignKey(
                        name: "FK__AUTOMOBIL__ID_DO__412EB0B6",
                        column: x => x.ID_DOGADJAJ,
                        principalTable: "DOGADJAJ",
                        principalColumn: "ID_DOGADJAJ");
                });

            migrationBuilder.CreateTable(
                name: "DOGADJAJ_CVJECARA",
                columns: table => new
                {
                    ID_DC = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ID_DOGADJAJ = table.Column<int>(type: "int", nullable: true),
                    ID_CVJECARA = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__DOGADJAJ__8B6237AD78AAE9F5", x => x.ID_DC);
                    table.ForeignKey(
                        name: "FK__DOGADJAJ___ID_CV__5535A963",
                        column: x => x.ID_CVJECARA,
                        principalTable: "CVJECARA",
                        principalColumn: "ID_CVJECARA");
                    table.ForeignKey(
                        name: "FK__DOGADJAJ___ID_DO__5441852A",
                        column: x => x.ID_DOGADJAJ,
                        principalTable: "DOGADJAJ",
                        principalColumn: "ID_DOGADJAJ");
                });

            migrationBuilder.CreateTable(
                name: "IZVJESTAJ",
                columns: table => new
                {
                    ID_IZVJESTAJ = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TIP_IZVJESTAJA = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
                    PODATCI = table.Column<string>(type: "text", nullable: false),
                    DATUM_KREIRANJA = table.Column<DateOnly>(type: "date", nullable: false),
                    ID_DOGADJAJ = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__IZVJESTA__A1CC9CD22E4818CB", x => x.ID_IZVJESTAJ);
                    table.ForeignKey(
                        name: "FK__IZVJESTAJ__ID_DO__3B75D760",
                        column: x => x.ID_DOGADJAJ,
                        principalTable: "DOGADJAJ",
                        principalColumn: "ID_DOGADJAJ");
                });

            migrationBuilder.CreateTable(
                name: "OSTALO",
                columns: table => new
                {
                    ID_OSTALO = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IME = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: false),
                    ADRESA = table.Column<string>(type: "varchar(150)", unicode: false, maxLength: 150, nullable: false),
                    TELEFON = table.Column<string>(type: "varchar(15)", unicode: false, maxLength: 15, nullable: true),
                    EMAIL = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: true),
                    PROVIZIJA = table.Column<decimal>(type: "decimal(5,2)", nullable: true),
                    CIJENA = table.Column<decimal>(type: "decimal(10,2)", nullable: false),
                    NAZIV_USUGE = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: true),
                    POC_ANGAZMANA = table.Column<DateOnly>(type: "date", nullable: true),
                    KRAJ_ANGAZMANA = table.Column<DateOnly>(type: "date", nullable: true),
                    ID_DOGADJAJ = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__OSTALO__684531F8EB7D4843", x => x.ID_OSTALO);
                    table.ForeignKey(
                        name: "FK__OSTALO__ID_DOGAD__440B1D61",
                        column: x => x.ID_DOGADJAJ,
                        principalTable: "DOGADJAJ",
                        principalColumn: "ID_DOGADJAJ");
                });

            migrationBuilder.CreateTable(
                name: "SALON",
                columns: table => new
                {
                    ID_SALON = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IME = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: false),
                    ADRESA = table.Column<string>(type: "varchar(150)", unicode: false, maxLength: 150, nullable: false),
                    TELEFON = table.Column<string>(type: "varchar(15)", unicode: false, maxLength: 15, nullable: true),
                    PROVIZIJA = table.Column<decimal>(type: "decimal(5,2)", nullable: true),
                    CIJENA = table.Column<decimal>(type: "decimal(10,2)", nullable: false),
                    BROJ_MJESTA = table.Column<int>(type: "int", nullable: true),
                    VELICINA = table.Column<decimal>(type: "decimal(5,2)", nullable: true),
                    POC_ANGAZMANA = table.Column<DateOnly>(type: "date", nullable: true),
                    KRAJ_ANGAZMANA = table.Column<DateOnly>(type: "date", nullable: true),
                    ID_DOGADJAJ = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__SALON__E77AB92A33B633D4", x => x.ID_SALON);
                    table.ForeignKey(
                        name: "FK__SALON__ID_DOGADJ__3E52440B",
                        column: x => x.ID_DOGADJAJ,
                        principalTable: "DOGADJAJ",
                        principalColumn: "ID_DOGADJAJ");
                });

            migrationBuilder.CreateTable(
                name: "DOGADJAJ_GLAZBA",
                columns: table => new
                {
                    ID_IZVJESTAJ = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ID_DOGADJAJ = table.Column<int>(type: "int", nullable: true),
                    ID_GLAZBA = table.Column<int>(type: "int", nullable: true),
                    PocAngazmana = table.Column<DateOnly>(type: "date", nullable: true),
                    KrajAngazmana = table.Column<DateOnly>(type: "date", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__DOGADJAJ__A1CC9CD22DF526F3", x => x.ID_IZVJESTAJ);
                    table.ForeignKey(
                        name: "FK__DOGADJAJ___ID_DO__48CFD27E",
                        column: x => x.ID_DOGADJAJ,
                        principalTable: "DOGADJAJ",
                        principalColumn: "ID_DOGADJAJ");
                    table.ForeignKey(
                        name: "FK__DOGADJAJ___ID_GL__49C3F6B7",
                        column: x => x.ID_GLAZBA,
                        principalTable: "GLAZBA",
                        principalColumn: "ID_GLAZBA");
                });

            migrationBuilder.CreateTable(
                name: "GLAZBA_PLAYLIST",
                columns: table => new
                {
                    ID_GP = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ID_GLAZBA = table.Column<int>(type: "int", nullable: true),
                    ID_PLAYLISTA = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__GLAZBA_P__8B62CF149E6780EC", x => x.ID_GP);
                    table.ForeignKey(
                        name: "FK__GLAZBA_PL__ID_GL__4E88ABD4",
                        column: x => x.ID_GLAZBA,
                        principalTable: "GLAZBA",
                        principalColumn: "ID_GLAZBA");
                    table.ForeignKey(
                        name: "FK__GLAZBA_PL__ID_PL__4F7CD00D",
                        column: x => x.ID_PLAYLISTA,
                        principalTable: "PLAYLISTA",
                        principalColumn: "ID_PLAYLISTA");
                });

            migrationBuilder.CreateTable(
                name: "DOGADJAJ_RESTORAN",
                columns: table => new
                {
                    ID_DR = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ID_DOGADJAJ = table.Column<int>(type: "int", nullable: true),
                    ID_RESTORAN = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__DOGADJAJ__8B6237BC3BDA2656", x => x.ID_DR);
                    table.ForeignKey(
                        name: "FK__DOGADJAJ___ID_DO__5FB337D6",
                        column: x => x.ID_DOGADJAJ,
                        principalTable: "DOGADJAJ",
                        principalColumn: "ID_DOGADJAJ");
                    table.ForeignKey(
                        name: "FK__DOGADJAJ___ID_RE__60A75C0F",
                        column: x => x.ID_RESTORAN,
                        principalTable: "RESTORAN",
                        principalColumn: "ID_RESTORAN");
                });

            migrationBuilder.CreateTable(
                name: "RESTORAN_JELO",
                columns: table => new
                {
                    ID_RJ = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ID_RESTORAN = table.Column<int>(type: "int", nullable: true),
                    ID_JELO = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__RESTORAN__8B6381EA11130C3C", x => x.ID_RJ);
                    table.ForeignKey(
                        name: "FK__RESTORAN___ID_JE__66603565",
                        column: x => x.ID_JELO,
                        principalTable: "JELO",
                        principalColumn: "ID_JELO");
                    table.ForeignKey(
                        name: "FK__RESTORAN___ID_RE__656C112C",
                        column: x => x.ID_RESTORAN,
                        principalTable: "RESTORAN",
                        principalColumn: "ID_RESTORAN");
                });

            migrationBuilder.CreateTable(
                name: "DOGADJAJ_SLASTICARNA",
                columns: table => new
                {
                    ID_DS = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ID_DOGADJAJ = table.Column<int>(type: "int", nullable: true),
                    ID_SLASTICARNA = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__DOGADJAJ__8B6237BDE1E82B2C", x => x.ID_DS);
                    table.ForeignKey(
                        name: "FK__DOGADJAJ___ID_DO__59FA5E80",
                        column: x => x.ID_DOGADJAJ,
                        principalTable: "DOGADJAJ",
                        principalColumn: "ID_DOGADJAJ");
                    table.ForeignKey(
                        name: "FK__DOGADJAJ___ID_SL__5AEE82B9",
                        column: x => x.ID_SLASTICARNA,
                        principalTable: "SLASTICARNA",
                        principalColumn: "ID_SLASTICARNA");
                });

            migrationBuilder.CreateIndex(
                name: "IX_AUTOMOBILI_ID_DOGADJAJ",
                table: "AUTOMOBILI",
                column: "ID_DOGADJAJ");

            migrationBuilder.CreateIndex(
                name: "IX_DOGADJAJ_CVJECARA_ID_CVJECARA",
                table: "DOGADJAJ_CVJECARA",
                column: "ID_CVJECARA");

            migrationBuilder.CreateIndex(
                name: "IX_DOGADJAJ_CVJECARA_ID_DOGADJAJ",
                table: "DOGADJAJ_CVJECARA",
                column: "ID_DOGADJAJ");

            migrationBuilder.CreateIndex(
                name: "IX_DOGADJAJ_GLAZBA_ID_DOGADJAJ",
                table: "DOGADJAJ_GLAZBA",
                column: "ID_DOGADJAJ");

            migrationBuilder.CreateIndex(
                name: "IX_DOGADJAJ_GLAZBA_ID_GLAZBA",
                table: "DOGADJAJ_GLAZBA",
                column: "ID_GLAZBA");

            migrationBuilder.CreateIndex(
                name: "IX_DOGADJAJ_RESTORAN_ID_DOGADJAJ",
                table: "DOGADJAJ_RESTORAN",
                column: "ID_DOGADJAJ");

            migrationBuilder.CreateIndex(
                name: "IX_DOGADJAJ_RESTORAN_ID_RESTORAN",
                table: "DOGADJAJ_RESTORAN",
                column: "ID_RESTORAN");

            migrationBuilder.CreateIndex(
                name: "IX_DOGADJAJ_SLASTICARNA_ID_DOGADJAJ",
                table: "DOGADJAJ_SLASTICARNA",
                column: "ID_DOGADJAJ");

            migrationBuilder.CreateIndex(
                name: "IX_DOGADJAJ_SLASTICARNA_ID_SLASTICARNA",
                table: "DOGADJAJ_SLASTICARNA",
                column: "ID_SLASTICARNA");

            migrationBuilder.CreateIndex(
                name: "IX_GLAZBA_PLAYLIST_ID_GLAZBA",
                table: "GLAZBA_PLAYLIST",
                column: "ID_GLAZBA");

            migrationBuilder.CreateIndex(
                name: "IX_GLAZBA_PLAYLIST_ID_PLAYLISTA",
                table: "GLAZBA_PLAYLIST",
                column: "ID_PLAYLISTA");

            migrationBuilder.CreateIndex(
                name: "IX_IZVJESTAJ_ID_DOGADJAJ",
                table: "IZVJESTAJ",
                column: "ID_DOGADJAJ");

            migrationBuilder.CreateIndex(
                name: "IX_OSTALO_ID_DOGADJAJ",
                table: "OSTALO",
                column: "ID_DOGADJAJ");

            migrationBuilder.CreateIndex(
                name: "IX_RESTORAN_JELO_ID_JELO",
                table: "RESTORAN_JELO",
                column: "ID_JELO");

            migrationBuilder.CreateIndex(
                name: "IX_RESTORAN_JELO_ID_RESTORAN",
                table: "RESTORAN_JELO",
                column: "ID_RESTORAN");

            migrationBuilder.CreateIndex(
                name: "IX_SALON_ID_DOGADJAJ",
                table: "SALON",
                column: "ID_DOGADJAJ");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AUTOMOBILI");

            migrationBuilder.DropTable(
                name: "DOGADJAJ_CVJECARA");

            migrationBuilder.DropTable(
                name: "DOGADJAJ_GLAZBA");

            migrationBuilder.DropTable(
                name: "DOGADJAJ_RESTORAN");

            migrationBuilder.DropTable(
                name: "DOGADJAJ_SLASTICARNA");

            migrationBuilder.DropTable(
                name: "GLAZBA_PLAYLIST");

            migrationBuilder.DropTable(
                name: "IZVJESTAJ");

            migrationBuilder.DropTable(
                name: "OSTALO");

            migrationBuilder.DropTable(
                name: "RESTORAN_JELO");

            migrationBuilder.DropTable(
                name: "SALON");

            migrationBuilder.DropTable(
                name: "CVJECARA");

            migrationBuilder.DropTable(
                name: "SLASTICARNA");

            migrationBuilder.DropTable(
                name: "GLAZBA");

            migrationBuilder.DropTable(
                name: "PLAYLISTA");

            migrationBuilder.DropTable(
                name: "JELO");

            migrationBuilder.DropTable(
                name: "RESTORAN");

            migrationBuilder.DropTable(
                name: "DOGADJAJ");
        }
    }
}
